const mysql = require('mysql');
const md5 = require('md5');
const { Client } = require('ssh2');

localhost = '127.0.0.1';

mysqlConfig = {
    host: '139.147.9.167', // host for connection
    port: 3306, // default port for mysql is 3306
    database: 'kics', // database from which we want to connect out node application
    user: 'kics', // username of the mysql connection
    password: 'KICS320', // password of the mysql connection
    timeout: 33306
}

sshTunnelConfig = {
    username: "KICS",
    password: "butterbread",
    host: "139.147.9.167",
    port: 22
}

var ssh = new Client();
if (ssh.connect(sshTunnelConfig)) {
    console.log("success")
};

ssh.on('ready', () => {
    console.log("ready")
    ssh.forwardOut(
        srcIP= localhost,
        srcPort= mysqlConfig.timeout, 
        dstIP= localhost, 
        dstPort= mysqlConfig.port,
        (err, stream) => {
            console.log("Attemping forwardout...")
            if (err) {
                console.log ("ERROR!");
            console.log(err);
            }
            const conn =  mysql.createConnection(mysqlConfig);
            console.log("Attempting connection...")
            conn.connect(function (err) {
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("connection created with Mysql successfully");
                    }
                }
            );
            module.exports = conn;
        }
    );
});