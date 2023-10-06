const mysql = require('mysql2');
const { Client } = require('ssh2')
const sshClient = new Client();

const dbServer = {
    host: '139.147.9.167', // host for connection
    port: 3306, // default port for mysql is 3306
    database: 'kics', // database from which we want to connect out node application
    user: 'kics', // username of the mysql connection
    password: 'KICS320' // password of the mysql connection
    //timeout: 33306
}

const tunnelConfig = {
    username: "KICS",
    password: "butterbread",
    host: "139.147.9.167",
    port: 22
}

const forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: 3306,
    dstHost: dbServer.host,
    dstPort: dbServer.port
}

const SSHConnection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
        sshClient.forwardout(
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

                const connection = mysql.createConnection(updateDbServer);

                correction.connect((error) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(connection);
                    module.exports = connection;
                });
            });
    }).connect(tunnelConfig);
})