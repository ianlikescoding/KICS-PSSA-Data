var express = require('express');
var app = express();
const sql = require('sqlite3');

let db = new sql.Database('./kics.db', (err)  => {
    if (err) {
        console.error(err.message);
    }
    console.log("Database connect!")
    
})
app.get('/test', function (req, res) {
    
    console.log("got request");
    
    db.all("SELECT * FROM School LIMIT 10", function(err, rows) {
        if (err){
            console.error(err.message);
        }
        console.log(rows[0])
        res.send(rows[0])
    });
  //res.send('Hello World!'); // This will serve your request to '/'
});

app.get('/allschool', function (req, res) {
    db.all("SELECT * FROM SCHOOL", function(err, rows) {
        if (err) {
            console.error(err.message);
        }
        res.send(rows);
    })
});

app.get('/getspecific', function(req, res){
    //get a specific item(s) from a table, with specifics in the query parameters
    cols = req.query.cols
    table = req.query.table
    attribute = req.query.attribute
    spec = req.query.spec
    if (spec == null && attribute == null){ //check if the user doesn't want specific limits
        requestString = "SELECT " + cols + " FROM " + table + ";"
    }
    else{
        requestString = "SELECT " + cols + " FROM " + table + " WHERE "+ attribute + " = " + spec +";";
    }
    console.log(requestString);
    db.all(requestString, function(err, rows) {
        if (err) {
            console.error(err.message);
        }
        res.send(rows);
    })
});
app.listen(3306, function () {
  console.log('Example app listening on port 3306!');
 });
