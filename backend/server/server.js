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

app.get("/avg", function (req, res) {
  db.all(
    "SELECT SchoolNumber, Year, avg(PAdvanced), avg(PProficient), avg(PBasic), avg(PBelowBasic) FROM PSSAScores GROUP BY SchoolNumber, Year",
    function (err, rows) {
      if (err) {
        console.error("This is avg:", err.message);
      }
      res.send(rows);
    }
  );
});

app.get("/dictionary", function (req, res) {
  db.all(
    "select distinct s.SchoolName, s.SchoolNumber from school s, PSSAScores p where p.SchoolNumber = s.SchoolNumber",
    function (err, rows) {
      if (err) {
        console.error(err.message);
      }
      res.send(rows);
    }
  );
});

app.get("/demographics", function (req, res) {
  db.all(
    "select SchoolName, d.SchoolNumber, d.Asian, d.AfricanAmerican, d.Hispanic, d.NativeAmerican, d.White,PAdvanced,PProficient,PBasic,PBelowBasic, d.Male, d.Female from (select s.SchoolName, s.SchoolNumber, Year, avg(PAdvanced) as PAdvanced, avg(PProficient) as PProficient, avg(PBasic) as PBasic, avg(PBelowBasic) as PBelowBasic from School s, PSSAScores p where s.SchoolNumber = p.SchoolNumber group by s.SchoolNumber, Year) y, Demographics d where Year = 2019 and y.SchoolNumber = d.SchoolNumber",
    function (err, rows) {
      if (err) {
        console.error(err.message);
      }
      res.send(rows);
    }
  );
});

app.get("/findatabydistrict", function (req, res) {
  db.all(
    "SELECT DISTINCT Finances.Year,District.DistrictName,TotalExpenditure,WADM,PersonalIncome,PAdvanced,PProficient,PBasic,PBelowBasic FROM (SELECT AUN AS PAUN,Year as PYear,round(AVG(PAdvanced)) AS PAdvanced,round(AVG(PProficient)) AS PProficient,round(AVG(PBasic)) AS PBasic,AVG(PBelowBasic) AS PBelowBasic from School,PSSAScores where School.SchoolNumber=PSSAScores.SchoolNumber Group By AUN,Year),Finances,District WHERE PYear=2015 AND PAUN=Finances.AUN AND PYear=Finances.Year AND Finances.AUN=District.AUN",
    function (err, rows) {
      if (err) {
        console.error(err.message);
      }
      res.send(rows);
    }
  );
});

app.get("/personneldatabydistrict", function (req, res) {
  db.all(
    "SELECT PersonnelData.Year,DistrictName,EdLevel,Salary,PFemale,PMale,YearsOfService,PAdvanced,PProficient,PBasic,PBelowBasic FROM (SELECT AUN AS PAUN,Year as PYear,round(AVG(PAdvanced)) AS PAdvanced,round(AVG(PProficient)) AS PProficient,round(AVG(PBasic)) AS PBasic,round(AVG(PBelowBasic)) AS PBelowBasic from School,PSSAScores where School.SchoolNumber=PSSAScores.SchoolNumber Group By AUN,Year),PersonnelData,District WHERE PYear=2015 AND PAUN=PersonnelData.AUN AND PYear=PersonnelData.Year AND PersonnelData.AUN=District.AUN",
    function (err, rows) {
      if (err) {
        console.error(err.message);
      }
      res.send(rows);
    }
  );
});

app.get("/graddatabyschool", function (req, res) {
  db.all(
    "select d.Year,y.SchoolName,DropoutRate,GraduationRate,PPostSecondary,PCollegeBound,PAdvanced,PProficient,PBasic,PBelowBasic from (select s.SchoolNumber,s.SchoolName,Year, round(AVG(PAdvanced)) as PAdvanced, round(AVG(PProficient)) as PProficient, round(AVG(PBasic)) as PBasic, round(AVG(PBelowBasic)) as PBelowBasic from School s, PSSAScores p where s.SchoolNumber = p.SchoolNumber group by s.SchoolNumber, Year) y, Graduation d where y.year=d.Year and y.SchoolNumber=d.SchoolNumber and d.year=2019;",
    function (err, rows) {
      if (err) {
        console.error(err.message);
      }
      res.send(rows);
    }
  );
});
