const mysql = require('mysql2');
const { Client } = require('ssh2')
const sshClient = new Client();
require('dotenv').config();

const dbServer = {
    host: '127.0.0.1', // host for connection
    port: 3306, // default port for mysql is 3306
    database: process.env.DB_DATABASE, // database from which we want to connect out node application
    user: process.env.DB_USERNAME, // username of the mysql connection
    password: process.env.DB_PASSWORD, // password of the mysql connection
    timeout: 10
}

const tunnelConfig = {
    username: process.env.DB_SSH_USER,
    password: process.env.DB_SSH_PASSWORD,
    host: process.env.DB_SSH_HOST,
    port: 22
}

const forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: 22,
    dstHost: '139.147.9.167',
    dstPort: dbServer.port
}

const SSHConnection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
        sshClient.forwardOut(
            forwardConfig.srcHost,
            forwardConfig.srcPort,
            forwardConfig.dstHost,
            forwardConfig.dstPort,
            (err, stream) => {
                if (err) reject(err);

                const updateDbServer = {
                    ...dbServer,
                    stream
                };
                console.log("Here")
                console.log(forwardConfig.srcHost);
                console.log(forwardConfig.srcPort);
                console.log(forwardConfig.dstHost);
                console.log(forwardConfig.dstPort);
                const connection = mysql.createConnection(updateDbServer);
                console.log("Here")
                connection.connect((error) => {
                    if (error) {
                        console.log("Error:", error)
                        reject(error);
                    }
                    console.log("Success")
                    resolve(connection);
                    //module.exports = connection;
                });
            });
    }).connect(tunnelConfig);
});

module.exports = SSHConnection;