const myDBConnectionClient = require('./dbConfig.js');
const dbCall = (query_str) => {
    myDBConnectionClient.then((conn) => {
        conn.query(query_str, (err, result, fields) => {
            if (err) throw err;
            console.log("SQL Query Result-- ", result);
            if (result.length !== 0) {  //considering SQL Select statement
                result = result[0];
                console.log(result)
                //perform your required work on result
            }
        })
    })
}
module.exports = dbCall;