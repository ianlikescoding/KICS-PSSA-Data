var express = require("express");
const cors = require("cors");
const sql = require("sqlite3");

var app = express();

let db = new sql.Database("./../kics.db", (err) => {
  if (err) {
    console.error("Error:", err.message);
  }
  console.log("Database connect!");
});

app.use(cors());
app.use(express.json());

app.get("/test", function (req, res) {
  console.log("got request");

  db.all("SELECT * FROM School LIMIT 10", function (err, rows) {
    if (err) {
      console.error(err.message);
    }
    console.log(rows[0]);
    res.send(rows[0]);
  });
  //res.send('Hello World!'); // This will serve your request to '/'
});

app.get("/allschool", function (req, res) {
  db.all("SELECT * FROM SCHOOL", function (err, rows) {
    if (err) {
      console.error(err.message);
    }
    res.send(rows);
  });
});

app.get("/getspecific", function (req, res) {
  //get a specific item(s) from a table, with specifics in the query parameters
  cols = req.query.cols;
  table = req.query.table;
  attribute = req.query.attribute;
  spec = req.query.spec;
  if (spec == null && attribute == null) {
    //check if the user doesn't want specific limits
    requestString = "SELECT " + cols + " FROM " + table + ";";
  } else {
    requestString =
      "SELECT " +
      cols +
      " FROM " +
      table +
      " WHERE " +
      attribute +
      " = " +
      spec +
      ";";
  }
  console.log(requestString);
  db.all(requestString, function (err, rows) {
    if (err) {
      console.error(err.message);
    }
    res.send(rows);
  });
});

app.get("/pssabyschool", function (req, res) {
  db.all(
    "SELECT SchoolNumber, Year, avg(PAdvanced), avg(PProficient), avg(PBasic), avg(PBelowBasic) FROM PSSAScores group by SchoolNumber, Year;",
    function (err, rows) {
      if (err) {
        console.error(err.message);
      }
      res.send(rows);
    }
  );
});

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});

app.get("/findatabydistrict", function (req, res) {
  db.all(
    "SELECT DISTINCT Finances.Year,Finances.AUN,TotalExpenditure,PAdvanced,PProficient,PBasic,PBelowBasic FROM (SELECT AUN AS PAUN,Year as PYear,AVG(PAdvanced) AS PAdvanced,AVG(PProficient) AS PProficient,AVG(PBasic) AS PBasic,AVG(PBelowBasic) AS PBelowBasic from School,PSSAScores where School.SchoolNumber=PSSAScores.SchoolNumber Group By AUN,Year),Finances WHERE PYear=2015 AND PAUN=Finances.AUN AND PYear=Finances.Year",
    function (err, rows) {
      if (err) {
        console.error(err.message);
      }
      res.send(rows);
    }
  );
});

app.get("/personneldatabydistrict", function (req, res) {
  //SELECT PersonnelData.Year,PersonnelData.AUN,EdLevel,PAdvanced,PProficient,PBasic,PBelowBasic FROM (SELECT AUN AS PAUN,Year as PYear,AVG(PAdvanced) AS PAdvanced,AVG(PProficient) AS PProficient,AVG(PBasic) AS PBasic,AVG(PBelowBasic) AS PBelowBasic from School,PSSAScores where School.SchoolNumber=PSSAScores.SchoolNumber Group By AUN,Year),PersonnelData WHERE PYear=2015 AND PAUN=PersonnelData.AUN AND PYear=PersonnelData.Year LIMIT 10
  db.all(
    "SELECT PersonnelData.Year,PersonnelData.AUN,EdLevel,PAdvanced,PProficient,PBasic,PBelowBasic FROM (SELECT AUN AS PAUN,Year as PYear,AVG(PAdvanced) AS PAdvanced,AVG(PProficient) AS PProficient,AVG(PBasic) AS PBasic,AVG(PBelowBasic) AS PBelowBasic from School,PSSAScores where School.SchoolNumber=PSSAScores.SchoolNumber Group By AUN,Year),PersonnelData WHERE PYear=2015 AND PAUN=PersonnelData.AUN AND PYear=PersonnelData.Year LIMIT 10",
    function (err, rows) {
      if (err) {
        console.error(err.message);
      }
      res.send(rows);
    }
  );
});
