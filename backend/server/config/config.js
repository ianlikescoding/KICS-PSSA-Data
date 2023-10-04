const mysql = require('mysql')
const db = mysql.createConnection({
host: "KICS@139.147.9.167:22",
user: "KICS",
password: "butterbread",
database:"kics" 
})


module.exports = db


