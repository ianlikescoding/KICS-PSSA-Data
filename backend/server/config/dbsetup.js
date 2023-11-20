// Require or import the dependencies
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
// Read the SQL file
const dataSql = fs.readFileSync('../../KICS_DB/1113/kics_PSSAScores.sql').toString();
console.log(fs);
// Setup the database connection
let db = new sqlite3.Database('mydatabase', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQLite database.');
  });
  
  // Convert the SQL string to array so that you can run them one at a time.
  // You can split the strings using the query delimiter i.e. `;` in // my case I used `);` because some data in the queries had `;`.
  const dataArr = dataSql.toString().split(');');
  // db.serialize ensures that your queries are one after the other depending on which one came first in your `dataArr`
  db.serialize(() => {
    // db.run runs your SQL query against the DB
    db.run('PRAGMA foreign_keys=OFF;');
    db.run('BEGIN TRANSACTION;');
    // Loop through the `dataArr` and db.run each query
    dataArr.forEach((query) => {
      if(query) {
        // Add the delimiter back to each query before you run them
        // In my case the it was `);`
        query += ');';
        db.run(query, (err) => {
           if(err) throw err;
        });
      }
    });
    db.run('COMMIT;');
  });
  // Close the DB connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
  });