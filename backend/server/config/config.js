const mysql = require('mysql2')
const { Client } = require('ssh2');
const sshClient = new Client();

/*
const db = mysql.createConnection({
host: "139.147.9.167",
user: "KICS",
password: "KICS320",
database:"kics" 
})

db.connect( function(err) {
    if (err) {
          return console.error('error: ' + err.message);
    }
     console.log('Connected to the MySQL server.');
    });
*/

var connection;
const config = {
host: '139.147.9.167', //localhost?
user: 'kics',
password: 'KICS320',
database: 'kics',
port: 3001
};

const tunnelConfig = {
    host: '139.147.9.167',
    port: 22,
    user: 'KICS',
    password: 'butterbread'
    };

    const forwardConfig = {
        srcHost: '127.0.0.1',
        srcPort: 4321,
        dstHost: '139.147.9.167',
        dstPort: 3306 //not sure
        };

        const end = async () => {
            await connection.end(function(err){
                if(err){
                  return console.log(err.message)
                       }
            })
            }



    /*
const tunnelConfig = {
    host: "139.147.9.167",
    port: 22,
    username: "KICS",
    password: "butterbread"
}

const forwardConfig = {
    srcHost: 'localhost',
    srcPort: 4321,
    dstHost: "139.147.9.167",
    dstPort: 3306 //may be 3306
};
const SSHConnection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
        sshClient.forwardOut(
        forwardConfig.srcHost,
        forwardConfig.srcPort,
        forwardConfig.dstHost,
        forwardConfig.dstPort,
        (err, stream) => {
             if (err) reject(err);
             const updatedDb = {
                 ...db,
                 stream
            };
            const connection =  mysql.createConnection(updatedDb);
           connection.connect((error) => {
            if (error) {
                reject(error);
            }
            resolve(connection);
            });
        });
    }).connect(tunnelConfig);
});
*/

module.exports = db, tunnelConfig, forwardConfig


