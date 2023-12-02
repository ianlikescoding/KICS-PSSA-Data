[33mcommit 06cf5f8aaa60effa180664ec6ad92315b9fdb2a0[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: koyasuk <koyasuk@lafayette.edu>
Date:   Sat Dec 2 12:22:33 2023 -0500

    implemented readme, feel free to add or change

[1mdiff --git a/README.md b/README.md[m
[1mnew file mode 100644[m
[1mindex 0000000..6517be1[m
[1m--- /dev/null[m
[1m+++ b/README.md[m
[36m@@ -0,0 +1,66 @@[m
[32m+[m
[32m+[m[32m# KICS Project -DBMS-[m
[32m+[m
[32m+[m[32mMotivation-[m
[32m+[m
[32m+[m[32mEach year PA students take standarized test to measure school performance. After research we have found that the score of PSSA test have an impact on school fundings from the state. Therefore, we wante to visualize the correlation of favrious factors and PSSA scores. This will not only help people who are planning to go to higher education, but also their gurdians/parents as well to be used as another resource to decide where to send their kids.[m[41m [m
[32m+[m
[32m+[m[32m## Authors[m
[32m+[m
[32m+[m[32mFront-end[m
[32m+[m[32m- Kizuki Koyasu[m
[32m+[m[32m- Sakhi Naik[m
[32m+[m[32mBack-end[m
[32m+[m[32m- Cade Killbrde[m
[32m+[m[32m- Ian Brown[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32m## Run Locally[m
[32m+[m
[32m+[m[32mClone the project[m
[32m+[m
[32m+[m[32m```bash[m
[32m+[m[32m  git clone https://link-to-project[m
[32m+[m[32m```[m
[32m+[m
[32m+[m[32mGo to the backend server directory[m
[32m+[m
[32m+[m[32m```bash[m
[32m+[m[32m  cd backend/server[m
[32m+[m[32m```[m
[32m+[m
[32m+[m[32mInstall dependencies[m
[32m+[m
[32m+[m[32m```bash[m
[32m+[m[32m  npm install[m
[32m+[m[32m```[m
[32m+[m
[32m+[m[32mStart the server[m
[32m+[m
[32m+[m[32m```bash[m
[32m+[m[32m  node server.js[m
[32m+[m[32m```[m
[32m+[m
[32m+[m[32mMove to frontend directory[m
[32m+[m
[32m+[m[32m```bash[m
[32m+[m[32m    cd ..[m
[32m+[m[32m    cd ..[m
[32m+[m[32m    cd frontend[m
[32m+[m[32m```[m
[32m+[m
[32m+[m[32mRun web-page[m
[32m+[m
[32m+[m[32m```bash[m
[32m+[m[32mnpm start[m
[32m+[m[32m```[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32m## Features[m
[32m+[m
[32m+[m[32m- Research Question[m
[32m+[m[32m- Correlation Coefficient Ranking[m
[32m+[m[32m- Dynamic chart visualization[m
[32m+[m[32m- Time series[m
\ No newline at end of file[m
[1mdiff --git a/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/__init__.cpython-312.pyc b/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/__init__.cpython-312.pyc[m
[1mnew file mode 100644[m
[1mindex 0000000..6f0ea61[m
Binary files /dev/null and b/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/__init__.cpython-312.pyc differ
[1mdiff --git a/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/common.cpython-312.pyc b/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/common.cpython-312.pyc[m
[1mnew file mode 100644[m
[1mindex 0000000..26827ec[m
Binary files /dev/null and b/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/common.cpython-312.pyc differ
[1mdiff --git a/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/input.cpython-312.pyc b/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/input.cpython-312.pyc[m
[1mnew file mode 100644[m
[1mindex 0000000..b15ad1e[m
Binary files /dev/null and b/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/input.cpython-312.pyc differ
[1mdiff --git a/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/simple_copy.cpython-312.pyc b/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/simple_copy.cpython-312.pyc[m
[1mnew file mode 100644[m
[1mindex 0000000..044e53e[m
Binary files /dev/null and b/backend/server/node_modules/node-gyp/gyp/pylib/gyp/__pycache__/simple_copy.cpython-312.pyc differ
[1mdiff --git a/backend/server/node_modules/sqlite3/lib/binding/napi-v6-darwin-unknown-arm64/node_sqlite3.node b/backend/server/node_modules/sqlite3/lib/binding/napi-v6-darwin-unknown-arm64/node_sqlite3.node[m
[1mnew file mode 100755[m
[1mindex 0000000..4d606c6[m
Binary files /dev/null and b/backend/server/node_modules/sqlite3/lib/binding/napi-v6-darwin-unknown-arm64/node_sqlite3.node differ
[1mdiff --git a/backend/server/node_modules/sqlite3/lib/binding/napi-v6-darwin-unknown-x64/node_sqlite3.node b/backend/server/node_modules/sqlite3/lib/binding/napi-v6-darwin-unknown-x64/node_sqlite3.node[m
[1mnew file mode 100755[m
[1mindex 0000000..51b876b[m
Binary files /dev/null and b/backend/server/node_modules/sqlite3/lib/binding/napi-v6-darwin-unknown-x64/node_sqlite3.node differ
[1mdiff --git a/src/App.css b/src/App.css[m
[1mnew file mode 100644[m
[1mindex 0000000..74b5e05[m
[1m--- /dev/null[m
[1m+++ b/src/App.css[m
[36m@@ -0,0 +1,38 @@[m
[32m+[m[32m.App {[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.App-logo {[m
[32m+[m[32m  height: 40vmin;[m
[32m+[m[32m  pointer-events: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (prefers-reduced-motion: no-preference) {[m
[32m+[m[32m  .App-logo {[m
[32m+[m[32m    animation: App-logo-spin infinite 20s linear;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.App-header {[m
[32m+[m[32m  background-color: #282c34;[m
[32m+[m[32m  min-height: 100vh;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  font-size: calc(10px + 2vmin);[m
[32m+[m[32m  color: white;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.App-link {[m
[32m+[m[32m  color: #61dafb;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@keyframes App-logo-spin {[m
[32m+[m[32m  from {[m
[32m+[m[32m    transform: rotate(0deg);[m
[32m+[m[32m  }[m
[32m+[m[32m  to {[m
[32m+[m[32m    transform: rotate(360deg);[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[1mdiff --git a/src/App.js b/src/App.js[m
[1mnew file mode 100644[m
[1mindex 0000000..04439d2[m
[1m--- /dev/null[m
[1m+++ b/src/App.js[m
[36m@@ -0,0 +1,18 @@[m
[32m+[m[32mimport "./App.css";[m
[32m+[m[32mimport { useState, useEffect } from "react";[m
[32m+[m[32mimport Header from "./components/Header";[m
[32m+[m[32mimport ComplexedGrid from "./components/ChartContainer";[m
[32m+[m[32mimport FetchData from "./FetchData";[m
[32m+[m[32mimport FetchAvg from "./FetchAvg";[m
[32m+[m
[32m+[m[32mfunction App() {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="App">[m
[32m+[m[32m      <Header />[m
[32m+[m[32m      <FetchData />[m
[32m+[m[32m      <ComplexedGrid />[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default App;[m
[1mdiff --git a/src/App.test.js b/src/App.test.js[m
[1mnew file mode 100644[m
[1mindex 0000000..1f03afe[m
[1m--- /dev/null[m
[1m+++ b/src/App.test.js[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32mimport { render, screen } from '@testing-library/react';[m
[32m+[m[32mimport App from './App';[m
[32m+[m
[32m+[m[32mtest('renders learn react link', () => {[m
[32m+[m[32m  render(<App />);[m
[32m+[m[32m  const linkElement = screen.getByText(/learn react/i);[m
[32m+[m[32m  expect(linkElement).toBeInTheDocument();[m
[32m+[m[32m});[m
[1mdiff --git a/src/FetchAvg.js b/src/FetchAvg.js[m
[1mnew file mode 100644[m
[1mindex 0000000..a2daf30[m
[1m--- /dev/null[m
[1m+++ b/src/FetchAvg.js[m
[36m@@ -0,0 +1,45 @@[m
[32m+[m[32m// import React, { useState, useEffect } from "react";[m
[32m+[m
[32m+[m[32m// function FetchData({ setData: parentSetData }) {[m
[32m+[m[32m//   const [data, setData] = useState(null);[m
[32m+[m
[32m+[m[32m//   useEffect(() => {[m
[32m+[m[32m//     // Fetch data from the backend when the component mounts[m
[32m+[m[32m//     fetchData();[m
[32m+[m[32m//   }, []); // Only run this effect once, when the component mounts[m
[32m+[m
[32m+[m[32m//   const fetchData = async () => {[m
[32m+[m[32m//     try {[m
[32m+[m[32m//       const response = await fetch([m
[32m+[m[32m//         "http://localhost:3001/getspecific?" +[m
[32m+[m[32m//           new URLSearchParams({[m
[32m+[m[32m//             cols: "SchoolNumber, Year, avg(PAdvanced), avg(PProficient), avg(PBasic), avg(PBelowBasic)",[m
[32m+[m[32m//             table: "PSSAScores",[m
[32m+[m[32m//             attribute: "SchoolNumber, Year",[m
[32m+[m[32m//           })[m
[32m+[m[32m//       );[m
[32m+[m[32m//       if (!response.ok) {[m
[32m+[m[32m//         throw new Error(`HTTP error! Status: ${response.status}`);[m
[32m+[m[32m//       }[m
[32m+[m[32m//       const result = await response.json();[m
[32m+[m[32m//       const dataArray = Object.values(result);[m
[32m+[m[32m//       setData(dataArray);[m
[32m+[m[32m//     } catch (error) {[m
[32m+[m[32m//       console.error("Fetch error:", error);[m
[32m+[m[32m//     }[m
[32m+[m[32m//   };[m
[32m+[m
[32m+[m[32m//   // useEffect to notify the parent component when data is available[m
[32m+[m[32m//   useEffect(() => {[m
[32m+[m[32m//     if (data) {[m
[32m+[m[32m//       console.log("data fetched: ", data);[m
[32m+[m[32m//       console.log("This is a test: ", data[1]);[m
[32m+[m[32m//       parentSetData(data);[m
[32m+[m[32m//     }[m
[32m+[m[32m//   }, [data, parentSetData]);[m
[32m+[m
[32m+[m[32m//   // No need to return anything[m
[32m+[m[32m//   return null;[m
[32m+[m[32m// }[m
[32m+[m
[32m+[m[32m// export default FetchData;[m
\ No newline at end of file[m
[1mdiff --git a/src/FetchData.js b/src/FetchData.js[m
[1mnew file mode 100644[m
[1mindex 0000000..78967b7[m
[1m--- /dev/null[m
[1m+++ b/src/FetchData.js[m
[36m@@ -0,0 +1,47 @@[m
[32m+[m[32mimport React, { useState, useEffect } from "react";[m
[32m+[m
[32m+[m[32mfunction FetchData() {[m
[32m+[m[32m  const [data, setData] = useState(null);[m
[32m+[m
[32m+[m[32m  useEffect(() => {[m
[32m+[m[32m    // Fetch data from the backend when the component mounts[m
[32m+[m[32m    fetchData();[m
[32m+[m[32m  }, []);[m
[32m+[m
[32m+[m[32m  useEffect(() => {[m
[32m+[m[32m    // Fetch data from the backend when the component mounts[m
[32m+[m[32m    if (data) {[m
[32m+[m[32m      // console.log("data fetched: ", data);[m
[32m+[m[32m      // console.log("This is a test: ", data[1]);[m
[32m+[m[32m    }[m
[32m+[m[32m  }, [data]);[m
[32m+[m
[32m+[m[32m  const fetchData = async () => {[m
[32m+[m[32m    try {[m
[32m+[m[32m      const response = await fetch([m
[32m+[m[32m        "http://localhost:3001/getspecific?" +[m
[32m+[m[32m          new URLSearchParams({[m
[32m+[m[32m            cols: "PAdvanced",[m
[32m+[m[32m            table: "PSSAScores",[m
[32m+[m[32m          })[m
[32m+[m[32m      );[m
[32m+[m[32m      if (!response.ok) {[m
[32m+[m[32m        throw new Error(`HTTP error! Status: ${response.status}`);[m
[32m+[m[32m      }[m
[32m+[m[32m      const result = await response.json();[m
[32m+[m[32m      setData(result);[m
[32m+[m[32m    } catch (error) {[m
[32m+[m[32m      console.error("Fetch error:", error);[m
[32m+[m[32m    }[m
[32m+[m[32m  };[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div>[m
[32m+[m[32m            <h1>React Frontend</h1>[m
[32m+[m[32m            {data && <p>{data.message}</p>}[m
[32m+[m[32m          [m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default FetchData;[m
[1mdiff --git a/src/components/AvgPSSAScoreChart.js b/src/components/AvgPSSAScoreChart.js[m
[1mnew file mode 100644[m
[1mindex 0000000..217ab5d[m
[1m--- /dev/null[m
[1m+++ b/src/components/AvgPSSAScoreChart.js[m
[36m@@ -0,0 +1,200 @@[m
[32m+[m[32mimport React, { useState, useEffect } from "react";[m
[32m+[m[32mimport CustomizedMenus from "./DropDown";[m
[32m+[m[32mimport "../components/ChartContainer.css";[m
[32m+[m[32mimport Stack from "@mui/material/Stack";[m
[32m+[m[32mimport Box from "@mui/material/Box";[m
[32m+[m[32mimport {[m
[32m+[m[32m  XAxis,[m
[32m+[m[32m  YAxis,[m
[32m+[m[32m  CartesianGrid,[m
[32m+[m[32m  Tooltip,[m
[32m+[m[32m  Legend,[m
[32m+[m[32m  LineChart,[m
[32m+[m[32m  Line,[m
[32m+[m[32m} from "recharts";[m
[32m+[m[32mimport { CircularProgress } from "@mui/material";[m
[32m+[m
[32m+[m[32mfunction FetchData() {[m
[32m+[m[32m  let options = "GETTYSBURG AREA MS";[m
[32m+[m[32m  const [data, setData] = useState(null);[m
[32m+[m[32m  const [schoolName, setName] = useState([]);[m
[32m+[m[32m  const [currOption, setCurrOption] = useState(null);[m
[32m+[m[32m  const dictionary = new Map();[m
[32m+[m
[32m+[m[32m  useEffect(() => {[m
[32m+[m[32m    fetchName();[m
[32m+[m[32m  }, []);[m
[32m+[m
[32m+[m[32m  useEffect(() => {[m
[32m+[m[32m    // Fetch data from the backend when the component mounts[m
[32m+[m[32m    if (schoolName && schoolName.length > 0) {[m
[32m+[m[32m      // Fetch data using schoolName[m
[32m+[m[32m    }[m
[32m+[m[32m  }, [schoolName]);[m
[32m+[m
[32m+[m[32m  const fetchName = async () => {[m
[32m+[m[32m    try {[m
[32m+[m[32m      const responseName = await fetch([m
[32m+[m[32m        "http://localhost:3001/getDictionary?" +[m
[32m+[m[32m          new URLSearchParams({[m
[32m+[m[32m            cols: "distinct s.SchoolName, s.SchoolNumber",[m
[32m+[m[32m            table: "PSSAScores p, School s",[m
[32m+[m[32m            attribute: "p.SchoolNumber = s.SchoolNumber",[m
[32m+[m[32m          })[m
[32m+[m[32m      );[m
[32m+[m[32m      if (!responseName.ok) {[m
[32m+[m[32m        throw new Error(`HTTP error! Status: ${responseName.status}`);[m
[32m+[m[32m      }[m
[32m+[m[32m      const resultName = await responseName.json();[m
[32m+[m[32m      setName(resultName);[m
[32m+[m[32m    } catch (error) {[m
[32m+[m[32m      console.error("Fetch error:", error);[m
[32m+[m[32m    }[m
[32m+[m[32m  };[m
[32m+[m
[32m+[m[32m  useEffect(() => {[m
[32m+[m[32m    fetchData();[m
[32m+[m[32m  }, []);[m
[32m+[m
[32m+[m[32m  useEffect(() => {[m
[32m+[m[32m    if (data) {[m
[32m+[m[32m      // Process data if needed[m
[32m+[m[32m    }[m
[32m+[m[32m  }, [data]);[m
[32m+[m
[32m+[m[32m  const fetchData = async () => {[m
[32m+[m[32m    try {[m
[32m+[m[32m      const response = await fetch([m
[32m+[m[32m        "http://localhost:3001/getspecific?" +[m
[32m+[m[32m          new URLSearchParams({[m
[32m+[m[32m            cols: "SchoolNumber, Year, avg(PAdvanced), avg(PProficient), avg(PBasic), avg(PBelowBasic)",[m
[32m+[m[32m            table: "PSSAScores",[m
[32m+[m[32m            attribute: "SchoolNumber != 0", //TODO: check the equality later this should be a parameterize[m
[32m+[m[32m            spec: "SchoolNumber, Year",[m
[32m+[m[32m          })[m
[32m+[m[32m      );[m
[32m+[m[32m      if (!response.ok) {[m
[32m+[m[32m        throw new Error(`HTTP error! Status: ${response.status}`);[m
[32m+[m[32m      }[m
[32m+[m[32m      const result = await response.json();[m
[32m+[m[32m      setData(result);[m
[32m+[m[32m    } catch (error) {[m
[32m+[m[32m      console.error("Fetch error:", error);[m
[32m+[m[32m    }[m
[32m+[m[32m  };[m
[32m+[m
[32m+[m[32m  // creating a dictionary for dropdown menu,[m
[32m+[m[32m  // When a user picks a specified[m
[32m+[m[32m  if (!dictionary) {[m
[32m+[m[32m    // Handle the case where data is null or undefined[m
[32m+[m[32m    console.error("Data is null or undefined.");[m
[32m+[m[32m    return null; // or return some default content[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  const uniqueSchoolNames = new Set();[m
[32m+[m
[32m+[m[32m  for (let i = 0; i < schoolName.length; i++) {[m
[32m+[m[32m    const schoolNumber = schoolName[i].SchoolNumber;[m
[32m+[m[32m    const schoolNameValue = schoolName[i].SchoolName;[m
[32m+[m
[32m+[m[32m    // Check if the school name is not already in the Set[m
[32m+[m[32m    if (!uniqueSchoolNames.has(schoolNameValue)) {[m
[32m+[m[32m      // Add the school name to the Set to mark it as seen[m
[32m+[m[32m      uniqueSchoolNames.add(schoolNameValue);[m
[32m+[m
[32m+[m[32m      // Add the school name and number to the dictionary[m
[32m+[m[32m      dictionary.set(schoolNumber, schoolNameValue);[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  // Convert the Set to an array for options[m
[32m+[m[32m  options = Array.from(uniqueSchoolNames);[m
[32m+[m
[32m+[m[32m  // const handleDropdownChange = (selectedItem) => {[m
[32m+[m[32m  //   setSelectedSchool(selectedItem);[m
[32m+[m[32m  //   console.log("This is the selected school", selectedSchool);[m
[32m+[m[32m  // };[m
[32m+[m[32m  //TODO: I would like to get a school name, and convert that to School number using dictionary[m
[32m+[m[32m  //      Then use that as a parameter of sql query to get all the data needed.[m
[32m+[m[32m  // console.log(data);[m
[32m+[m
[32m+[m[32m  if (!data) {[m
[32m+[m[32m    return null;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  //Organized data is key:SchoolNumber, value: map of (year,weighted score);[m
[32m+[m[32m  const organizedData = new Map();[m
[32m+[m
[32m+[m[32m  for (let i = 0; i < data.length; i++) {[m
[32m+[m[32m    const schoolNumber = data[i].SchoolNumber;[m
[32m+[m[32m    const year = data[i].Year;[m
[32m+[m[32m    const weightedScore =[m
[32m+[m[32m      (data[i]["avg(PAdvanced)"] * 4 +[m
[32m+[m[32m        data[i]["avg(PBasic)"] * 3 +[m
[32m+[m[32m        data[i]["avg(PBelowBasic)"] * 2 +[m
[32m+[m[32m        data[i]["avg(PProficient)"]) /[m
[32m+[m[32m      4;[m
[32m+[m
[32m+[m[32m    // Create an inner map if it doesn't exist for the schoolNumber[m
[32m+[m[32m    if (!organizedData.has(schoolNumber)) {[m
[32m+[m[32m      organizedData.set(schoolNumber, new Map());[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    // Add the data for the specific year[m
[32m+[m[32m    organizedData.get(schoolNumber).set(year, {[m
[32m+[m[32m      year: year,[m
[32m+[m[32m      score: weightedScore,[m
[32m+[m[32m    });[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  // console.log("Organized Data:", organizedData);[m
[32m+[m
[32m+[m[32m  let selectedSchoolNumber = 10;[m
[32m+[m[32m  for (const [schoolNumber, schoolName] of dictionary.entries()) {[m
[32m+[m[32m    if (schoolName === currOption) {[m
[32m+[m[32m      selectedSchoolNumber = schoolNumber;[m
[32m+[m[32m      break; // No need to continue the loop once a match is found[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  const dataSet = organizedData.get(selectedSchoolNumber);[m
[32m+[m[32m  const dataSetArray = Array.from(dataSet.values());[m
[32m+[m[32m  console.log(dataSetArray);[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <Stack direction="row" spacing={2} alignItems="center">[m
[32m+[m[32m      {options ? ([m
[32m+[m[32m        <CustomizedMenus[m
[32m+[m[32m          options={options}[m
[32m+[m[32m          setCurrOption={setCurrOption}[m
[32m+[m[32m          currOption={currOption || options[0]}[m
[32m+[m[32m        />[m
[32m+[m[32m      ) : ([m
[32m+[m[32m        <CircularProgress style={{ margin: "auto" }} />[m
[32m+[m[32m      )}[m
[32m+[m[32m      <Box>[m
[32m+[m[32m        <h1>Average PSSA Score</h1>[m
[32m+[m[32m        <LineChart[m
[32m+[m[32m          width={730}[m
[32m+[m[32m          height={250}[m
[32m+[m[32m          data={dataSetArray}[m
[32m+[m[32m          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}[m
[32m+[m[32m        >[m
[32m+[m[32m          <CartesianGrid strokeDasharray="3 3" />[m
[32m+[m[32m          <XAxis dataKey="year" />[m
[32m+[m[32m          <YAxis dataKey="score" domain={[0, 100]} />[m
[32m+[m[32m          <Tooltip />[m
[32m+[m[32m          <Legend />[m
[32m+[m[32m          <Line[m
[32m+[m[32m            type="monotone"[m
[32m+[m[32m            dataKey="score"[m
[32m+[m[32m            stroke="#FF8000"[m
[32m+[m[32m            activeDot={{ r: 8 }}[m
[32m+[m[32m          />[m
[32m+[m[32m        </LineChart>[m
[32m+[m[32m      </Box>[m
[32m+[m[32m    </Stack>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default FetchData;[m
[1mdiff --git a/src/components/ChartContainer.css b/src/components/ChartContainer.css[m
[1mnew file mode 100644[m
[1mindex 0000000..8fd5001[m
[1m--- /dev/null[m
[1m+++ b/src/components/ChartContainer.css[m
[36m@@ -0,0 +1,66 @@[m
[32m+[m[32m.chart-container {[m
[32m+[m[32m    height: 400px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.more-chart-btn {[m
[32m+[m[32m    position: relative;[m
[32m+[m[32m    left:0;[m
[32m+[m[32m    outline: none;[m
[32m+[m[32m    text-decoration: none;[m
[32m+[m[32m    border-radius: 50px;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    justify-content: center;[m
[32m+[m[32m    align-items: center;[m
[32m+[m[32m    cursor: pointer;[m
[32m+[m[32m    text-transform: uppercase;[m
[32m+[m[32m    height: 60px;[m
[32m+[m[32m    width: 210px;[m
[32m+[m[32m    opacity: 1;[m
[32m+[m[32m    background-color: #ffffff;[m
[32m+[m[32m    border: 1px solid rgba(22, 76, 167, 0.6);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Corrected selector for span */[m
[32m+[m[32m.more-chart-btn span {[m
[32m+[m[32m    color: rgba(22, 76, 167, 1);[m
[32m+[m[32m    font-size: 12px;[m
[32m+[m[32m    font-weight: 500;[m
[32m+[m[32m    letter-spacing: 0.7px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Keyframes */[m
[32m+[m[32m@keyframes rotate {[m
[32m+[m[32m    0% {[m
[32m+[m[32m        transform: rotate(0deg) translate3d(0, 0, 0);[m
[32m+[m[32m    }[m
[32m+[m[32m    25% {[m
[32m+[m[32m        transform: rotate(3deg) translate3d(0, 0, 0);[m
[32m+[m[32m    }[m
[32m+[m[32m    50% {[m
[32m+[m[32m        transform: rotate(-3deg) translate3d(0, 0, 0);[m
[32m+[m[32m    }[m
[32m+[m[32m    75% {[m
[32m+[m[32m        transform: rotate(1deg) translate3d(0, 0, 0);[m
[32m+[m[32m    }[m
[32m+[m[32m    100% {[m
[32m+[m[32m        transform: rotate(0deg) translate3d(0, 0, 0);[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@keyframes storm {[m
[32m+[m[32m    0% {[m
[32m+[m[32m        transform: translate3d(0, 0, 0) translateZ(0);[m
[32m+[m[32m    }[m
[32m+[m[32m    25% {[m
[32m+[m[32m        transform: translate3d(4px, 0, 0) translateZ(0);[m
[32m+[m[32m    }[m
[32m+[m[32m    50% {[m
[32m+[m[32m        transform: translate3d(-3px, 0, 0) translateZ(0);[m
[32m+[m[32m    }[m
[32m+[m[32m    75% {[m
[32m+[m[32m        transform: translate3d(2px, 0, 0) translateZ(0);[m
[32m+[m[32m    }[m
[32m+[m[32m    100% {[m
[32m+[m[32m        transform: translate3d(0, 0, 0) translateZ(0);[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/src/components/ChartContainer.js b/src/components/ChartContainer.js[m
[1mnew file mode 100644[m
[1mindex 0000000..f98a0ac[m
[1m--- /dev/null[m
[1m+++ b/src/components/ChartContainer.js[m
[36m@@ -0,0 +1,295 @@[m
[32m+[m[32mimport React, { useState, useEffect } from "react";[m
[32m+[m[32mimport CustomizedMenus from "./DropDown";[m
[32m+[m[32mimport "../components/ChartContainer.css";[m
[32m+[m[32mimport Paper from "@mui/material/Paper";[m
[32m+[m[32mimport Stack from "@mui/material/Stack";[m
[32m+[m[32mimport Box from "@mui/material/Box";[m
[32m+[m[32mimport { Container } from "@mui/material";[m
[32m+[m[32mimport PropTypes from "prop-types";[m
[32m+[m[32mimport {[m
[32m+[m[32m  XAxis,[m
[32m+[m[32m  YAxis,[m
[32m+[m[32m  CartesianGrid,[m
[32m+[m[32m  Tooltip,[m
[32m+[m[32m  Legend,[m
[32m+[m[32m  PieChart,[m
[32m+[m[32m  Pie,[m
[32m+[m[32m  ScatterChart,[m
[32m+[m[32m  Scatter,[m
[32m+[m[32m  LineChart,[m
[32m+[m[32m  Line,[m
[32m+[m[32m  ResponsiveContainer,[m
[32m+[m[32m} from "recharts";[m
[32m+[m[32mimport AvgChart from "./AvgPSSAScoreChart";[m
[32m+[m
[32m+[m[32mexport default function ComplexedGrid() {[m
[32m+[m[32m  // useEffect(() => {[m
[32m+[m[32m  //   console.log("Data received in ComplexedGrid:", data00);[m
[32m+[m[32m  // }, [data00]);[m
[32m+[m
[32m+[m[32m  // if (!data00) {[m
[32m+[m[32m  //   // Handle the case where data is null or undefined[m
[32m+[m[32m  //   console.error("Data is null or undefined.");[m
[32m+[m[32m  //   return null; // or return some default content[m
[32m+[m[32m  // }[m
[32m+[m[41m  [m
[32m+[m
[32m+[m[32m  //TODO: being passed correctly, have to organize it so that[m
[32m+[m[32m  //TODO: for some reason this code runs multiple times so I cant get the correct number for the result.[m
[32m+[m
[32m+[m[32m  // for (let i = 0; i < data00.length; i++) {[m
[32m+[m[32m  //   const currentObject = data00[i];[m
[32m+[m
[32m+[m[32m  //   // Modify the values as needed;[m
[32m+[m[32m  //   currentObject["avg(PAdvanced)"] = currentObject["avg(PAdvanced)"] * 4;[m
[32m+[m[32m  //   currentObject["avg(PBasic)"] = currentObject["avg(PBasic)"] * 3;[m
[32m+[m[32m  //   currentObject["avg(PBelowBasic)"] = currentObject["avg(PBelowBasic)"] * 2;[m
[32m+[m[32m  //   currentObject["avg(PAdvanced)"] =[m
[32m+[m[32m  //     (currentObject["avg(PAdvanced)"] +[m
[32m+[m[32m  //       currentObject["avg(PBasic)"] +[m
[32m+[m[32m  //       currentObject["avg(PBelowBasic)"] +[m
[32m+[m[32m  //       currentObject["avg(PProficient)"]) /[m
[32m+[m[32m  //     4;[m
[32m+[m[32m  // }[m
[32m+[m[32m  // console.log("after change", data00);[m
[32m+[m
[32m+[m[32m  const data = [[m
[32m+[m[32m    {[m
[32m+[m[32m      pssa_score: 1.65,[m
[32m+[m[32m      Y1: 4,[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      pssa_score: 1.7,[m
[32m+[m[32m      Y1: 8,[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      pssa_score: 1.9,[m
[32m+[m[32m      Y1: 7,[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      pssa_score: 1.9,[m
[32m+[m[32m      Y1: 13,[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      pssa_score: 2.5,[m
[32m+[m[32m      Y1: 20,[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      pssa_score: 3.2,[m
[32m+[m[32m      Y1: 16,[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      pssa_score: 3.6,[m
[32m+[m[32m      Y1: 10,[m
[32m+[m[32m    },[m
[32m+[m[32m  ];[m
[32m+[m
[32m+[m[32m  const data01 = [[m
[32m+[m[32m    { name: "Advanced", value: 40 },[m
[32m+[m[32m    { name: "Proficient", value: 30 },[m
[32m+[m[32m    { name: "Basic", value: 27 },[m
[32m+[m[32m    { name: "Below Basic", value: 3 },[m
[32m+[m[32m  ];[m
[32m+[m
[32m+[m[32m  const data02 = [[m
[32m+[m[32m    { name: "School A", x: 3.8, y: 90 },[m
[32m+[m[32m    { name: "School B", x: 2.7, y: 78 },[m
[32m+[m[32m    { name: "School C", x: 2.5, y: 69 },[m
[32m+[m[32m    { name: "School D", x: 3.0, y: 82 },[m
[32m+[m[32m    { name: "School E", x: 3.2, y: 80 },[m
[32m+[m[32m    { name: "School F", x: 2.3, y: 67 },[m
[32m+[m[32m    { name: "School G", x: 3.6, y: 88 },[m
[32m+[m[32m    { name: "School H", x: 2.7, y: 78 },[m
[32m+[m[32m    { name: "School I", x: 2.0, y: 70 },[m
[32m+[m[32m    { name: "School J", x: 3.0, y: 81 },[m
[32m+[m[32m    { name: "School K", x: 3.2, y: 81 },[m
[32m+[m[32m    { name: "School L", x: 2.3, y: 72 },[m
[32m+[m[32m    { name: "School M", x: 3.8, y: 95 },[m
[32m+[m[32m    { name: "School N", x: 2.7, y: 78 },[m
[32m+[m[32m    { name: "School O", x: 2.5, y: 69 },[m
[32m+[m[32m    { name: "School P", x: 3.0, y: 82 },[m
[32m+[m[32m    { name: "School Q", x: 2.2, y: 75 },[m
[32m+[m[32m    { name: "School R", x: 0.94, y: 65 },[m
[32m+[m[32m  ];[m
[32m+[m
[32m+[m[32m  const CustomTooltip = ({ active, payload, label }) => {[m
[32m+[m[32m    if (active && payload && payload.length) {[m
[32m+[m[32m      console.log("payload: ", payload);[m
[32m+[m[32m      console.log("label: ", label);[m
[32m+[m[32m      return ([m
[32m+[m[32m        <div className="custom-tooltip" backgroundColor="white">[m
[32m+[m[32m          <h3>{`${payload[0].payload.name}`}</h3>[m
[32m+[m[32m          <p className="pssascore-label">{`PSSA Score : ${payload[0].value}`}</p>[m
[32m+[m[32m          <p className="gradrate-label">{`Graduation Rate : $${payload[1].value}M`}</p>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      );[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    return null;[m
[32m+[m[32m  };[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <Container>[m
[32m+[m[32m      <Paper[m
[32m+[m[32m        sx={{[m
[32m+[m[32m          p: 2,[m
[32m+[m[32m          margin: "auto",[m
[32m+[m[32m          width: 1000,[m
[32m+[m[32m          flexGrow: 1,[m
[32m+[m[32m          backgroundColor: (theme) =>[m
[32m+[m[32m            theme.palette.mode === "dark" ? "#1A2027" : "#fff",[m
[32m+[m[32m        }}[m
[32m+[m[32m      >[m
[32m+[m[32m        <Stack spacing={4}>[m
[32m+[m[32m          <Stack[m
[32m+[m[32m            direction="row"[m
[32m+[m[32m            spacing={2}[m
[32m+[m[32m            alignItems="center"[m
[32m+[m[32m            justifyContent={"center"}[m
[32m+[m[32m          >[m
[32m+[m[32m            <CustomizedMenus[m
[32m+[m[32m              options={[[m
[32m+[m[32m                "Total Expenditures",[m
[32m+[m[32m                "Personal Income/Market Value per WADM",[m
[32m+[m[32m              ]}[m
[32m+[m[32m            />[m
[32m+[m[32m            <Box>[m
[32m+[m[32m              <h1>Financial Data vs PSSA Score</h1>[m
[32m+[m[32m              <ResponsiveContainer width={730} height={300}>[m
[32m+[m[32m                <ScatterChart[m
[32m+[m[32m                  margin={{[m
[32m+[m[32m                    top: 20,[m
[32m+[m[32m                    right: 20,[m
[32m+[m[32m                    bottom: 20,[m
[32m+[m[32m                    left: 20,[m
[32m+[m[32m                  }}[m
[32m+[m[32m                >[m
[32m+[m[32m                  <CartesianGrid />[m
[32m+[m[32m                  <XAxis type="number" dataKey="x" name="PSSA_score" />[m
[32m+[m[32m                  <YAxis[m
[32m+[m[32m                    type="number"[m
[32m+[m[32m                    dataKey="y"[m
[32m+[m[32m                    name="graduation_rate"[m
[32m+[m[32m                    unit="M"[m
[32m+[m[32m                  />[m
[32m+[m[32m                  <Tooltip[m
[32m+[m[32m                    cursor={{ strokeDasharray: "3 3" }}[m
[32m+[m[32m                    content={<CustomTooltip />}[m
[32m+[m[32m                  />[m
[32m+[m[32m                  <Scatter name="gradrate" data={data02} fill="#8884d8" />[m
[32m+[m[32m                </ScatterChart>[m
[32m+[m[32m              </ResponsiveContainer>[m
[32m+[m[32m            </Box>[m
[32m+[m[32m          </Stack>[m
[32m+[m[32m          <Stack direction="row" spacing={2} alignItems="center">[m
[32m+[m[32m            <CustomizedMenus[m
[32m+[m[32m              options={[[m
[32m+[m[32m                "Graduation Rate",[m
[32m+[m[32m                "Dropout Rate",[m
[32m+[m[32m                "Postsecondary Bound",[m
[32m+[m[32m                "College Bound",[m
[32m+[m[32m              ]}[m
[32m+[m[32m            />[m
[32m+[m[32m            <Box>[m
[32m+[m[32m              <h1>Post-Graduate Data vs PSAA Score</h1>[m
[32m+[m[32m              <LineChart[m
[32m+[m[32m                width={730}[m
[32m+[m[32m                height={250}[m
[32m+[m[32m                data={data}[m
[32m+[m[32m                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}[m
[32m+[m[32m              >[m
[32m+[m[32m                <CartesianGrid strokeDasharray="3 3" />[m
[32m+[m[32m                <XAxis dataKey="pssa_score" />[m
[32m+[m[32m                <YAxis />[m
[32m+[m[32m                <Tooltip />[m
[32m+[m[32m                <Legend />[m
[32m+[m[32m                <Line[m
[32m+[m[32m                  type="monotone"[m
[32m+[m[32m                  dataKey="Y2"[m
[32m+[m[32m                  stroke="#0088FE"[m
[32m+[m[32m                  activeDot={{ r: 8 }}[m
[32m+[m[32m                />[m
[32m+[m[32m                <Line type="monotone" dataKey="Y1" stroke="#82ca9d" />[m
[32m+[m[32m              </LineChart>[m
[32m+[m[32m            </Box>[m
[32m+[m[32m          </Stack>[m
[32m+[m[32m          <Stack direction="row" spacing={2} alignItems="center">[m
[32m+[m[32m            <CustomizedMenus[m
[32m+[m[32m              options={[[m
[32m+[m[32m                "Literacy",[m
[32m+[m[32m                "Enrollment by Gender",[m
[32m+[m[32m                "Enrollment by Race",[m
[32m+[m[32m                "Attendance",[m
[32m+[m[32m                "Faculty Years of Service",[m
[32m+[m[32m              ]}[m
[32m+[m[32m            />[m
[32m+[m[32m            <Box>[m
[32m+[m[32m              <h1>Demographic Data vs PSSA Score</h1>[m
[32m+[m[32m              <LineChart[m
[32m+[m[32m                width={730}[m
[32m+[m[32m                height={250}[m
[32m+[m[32m                data={data}[m
[32m+[m[32m                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}[m
[32m+[m[32m              >[m
[32m+[m[32m                <CartesianGrid strokeDasharray="3 3" />[m
[32m+[m[32m                <XAxis dataKey="pssa_score" />[m
[32m+[m[32m                <YAxis />[m
[32m+[m[32m                <Tooltip />[m
[32m+[m[32m                <Legend />[m
[32m+[m[32m                <Line[m
[32m+[m[32m                  type="monotone"[m
[32m+[m[32m                  dataKey="Y2"[m
[32m+[m[32m                  stroke="#FFBB28"[m
[32m+[m[32m                  activeDot={{ r: 8 }}[m
[32m+[m[32m                />[m
[32m+[m[32m                <Line type="monotone" dataKey="Y1" stroke="#00C49F" />[m
[32m+[m[32m              </LineChart>[m
[32m+[m[32m            </Box>[m
[32m+[m[32m          </Stack>[m
[32m+[m[32m          //TODO: calling  a chart.[m[41m [m
[32m+[m[32m          <AvgChart />[m
[32m+[m[32m        </Stack>[m
[32m+[m[32m      </Paper>[m
[32m+[m[32m      <Paper[m
[32m+[m[32m        sx={{[m
[32m+[m[32m          p: 2,[m
[32m+[m[32m          margin: "auto",[m
[32m+[m[32m          width: 1000,[m
[32m+[m[32m          flexGrow: 1,[m
[32m+[m[32m          marginTop: 5,[m
[32m+[m[32m          marginBottom: 10,[m
[32m+[m[32m          justifyContent: "center",[m
[32m+[m[32m          display: "grid",[m
[32m+[m[32m          backgroundColor: (theme) =>[m
[32m+[m[32m            theme.palette.mode === "dark" ? "#1A2027" : "#fff",[m
[32m+[m[32m        }}[m
[32m+[m[32m      >[m
[32m+[m[32m        <Box width="100%">[m
[32m+[m[32m          <h1>PSSA Score Breakdown</h1>[m
[32m+[m[32m          <Stack direction="row" spacing={10} alignItems="center">[m
[32m+[m[32m            <CustomizedMenus[m
[32m+[m[32m              options={["School A", "School B", "School C", "School D"]}[m
[32m+[m[32m            />[m
[32m+[m[32m            <PieChart width={270} height={300}>[m
[32m+[m[32m              <Pie[m
[32m+[m[32m                dataKey="value"[m
[32m+[m[32m                isAnimationActive={false}[m
[32m+[m[32m                data={data01}[m
[32m+[m[32m                cx="50%"[m
[32m+[m[32m                cy="50%"[m
[32m+[m[32m                outerRadius={80}[m
[32m+[m[32m                fill="pink"[m
[32m+[m[32m                label="name"[m
[32m+[m[32m              />[m
[32m+[m[32m              <Tooltip />[m
[32m+[m[32m            </PieChart>[m
[32m+[m[32m          </Stack>[m
[32m+[m[32m        </Box>[m
[32m+[m[32m      </Paper>[m
[32m+[m[32m    </Container>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mComplexedGrid.propTypes = {[m
[32m+[m[32m  data: PropTypes.array, // Adjust the type according to the actual data structure[m
[32m+[m[32m};[m
[1mdiff --git a/src/components/DropDown.css b/src/components/DropDown.css[m
[1mnew file mode 100644[m
[1mindex 0000000..e69de29[m
[1mdiff --git a/src/components/DropDown.js b/src/components/DropDown.js[m
[1mnew file mode 100644[m
[1mindex 0000000..ba18bd0[m
[1m--- /dev/null[m
[1m+++ b/src/components/DropDown.js[m
[36m@@ -0,0 +1,103 @@[m
[32m+[m[32mimport * as React from "react";[m
[32m+[m[32mimport { styled, alpha } from "@mui/material/styles";[m
[32m+[m[32mimport Button from "@mui/material/Button";[m
[32m+[m[32mimport Menu from "@mui/material/Menu";[m
[32m+[m[32mimport MenuItem from "@mui/material/MenuItem";[m
[32m+[m[32mimport KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";[m
[32m+[m
[32m+[m[32mconst StyledMenu = styled((props) => ([m
[32m+[m[32m  <Menu[m
[32m+[m[32m    elevation={0}[m
[32m+[m[32m    anchorOrigin={{[m
[32m+[m[32m      vertical: "bottom",[m
[32m+[m[32m      horizontal: "right",[m
[32m+[m[32m    }}[m
[32m+[m[32m    transformOrigin={{[m
[32m+[m[32m      vertical: "top",[m
[32m+[m[32m      horizontal: "right",[m
[32m+[m[32m    }}[m
[32m+[m[32m    {...props}[m
[32m+[m[32m  />[m
[32m+[m[32m))(({ theme }) => ({[m
[32m+[m[32m  "& .MuiPaper-root": {[m
[32m+[m[32m    borderRadius: 6,[m
[32m+[m[32m    marginTop: theme.spacing(1),[m
[32m+[m[32m    minWidth: 180,[m
[32m+[m[32m    color:[m
[32m+[m[32m      theme.palette.mode === "light"[m
[32m+[m[32m        ? "rgb(55, 65, 81)"[m
[32m+[m[32m        : theme.palette.grey[300],[m
[32m+[m[32m    boxShadow:[m
[32m+[m[32m      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",[m
[32m+[m[32m    "& .MuiMenu-list": {[m
[32m+[m[32m      padding: "4px 0",[m
[32m+[m[32m    },[m
[32m+[m[32m    "& .MuiMenuItem-root": {[m
[32m+[m[32m      "& .MuiSvgIcon-root": {[m
[32m+[m[32m        fontSize: 18,[m
[32m+[m[32m        color: theme.palette.text.secondary,[m
[32m+[m[32m        marginRight: theme.spacing(1.5),[m
[32m+[m[32m      },[m
[32m+[m[32m      "&:active": {[m
[32m+[m[32m        backgroundColor: alpha([m
[32m+[m[32m          theme.palette.primary.main,[m
[32m+[m[32m          theme.palette.action.selectedOpacity[m
[32m+[m[32m        ),[m
[32m+[m[32m      },[m
[32m+[m[32m    },[m
[32m+[m[32m  },[m
[32m+[m[32m}));[m
[32m+[m
[32m+[m[32mexport default function CustomizedMenus(props) {[m
[32m+[m[32m  const options = props.options ? props.options : ["No data"];[m
[32m+[m[32m  const currOption = props.currOption;[m
[32m+[m[32m  const setCurrOption = props.setCurrOption;[m
[32m+[m[32m  const [anchorEl, setAnchorEl] = React.useState(null);[m
[32m+[m[32m  const open = Boolean(anchorEl);[m
[32m+[m[32m  const handleClick = (event) => {[m
[32m+[m[32m    setAnchorEl(event.currentTarget);[m
[32m+[m[32m  };[m
[32m+[m[32m  const handleClose = () => {[m
[32m+[m[32m    setAnchorEl(null);[m
[32m+[m[32m  };[m
[32m+[m
[32m+[m[32m  function changeDataSet(optionName) {[m
[32m+[m[32m    setCurrOption(optionName);[m
[32m+[m[32m    handleClose();[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div>[m
[32m+[m[32m      <Button[m
[32m+[m[32m        id="demo-customized-button"[m
[32m+[m[32m        aria-controls={open ? "demo-customized-menu" : undefined}[m
[32m+[m[32m        aria-haspopup="true"[m
[32m+[m[32m        aria-expanded={open ? "true" : undefined}[m
[32m+[m[32m        variant="contained"[m
[32m+[m[32m        disableElevation[m
[32m+[m[32m        onClick={handleClick}[m
[32m+[m[32m        endIcon={<KeyboardArrowDownIcon />}[m
[32m+[m[32m        sx={{ width: 200 }}[m
[32m+[m[32m      >[m
[32m+[m[32m        <b>{currOption}</b>[m
[32m+[m[32m      </Button>[m
[32m+[m[32m      <StyledMenu[m
[32m+[m[32m        id="demo-customized-menu"[m
[32m+[m[32m        MenuListProps={{[m
[32m+[m[32m          "aria-labelledby": "demo-customized-button",[m
[32m+[m[32m        }}[m
[32m+[m[32m        anchorEl={anchorEl}[m
[32m+[m[32m        open={open}[m
[32m+[m[32m        onClose={handleClose}[m
[32m+[m[32m      >[m
[32m+[m[32m        {options?.map((el) => {[m
[32m+[m[32m          return ([m
[32m+[m[32m            <MenuItem onClick={() => changeDataSet(el)} disableRipple key={el}>[m
[32m+[m[32m              {el}[m
[32m+[m[32m            </MenuItem>[m
[32m+[m[32m          );[m
[32m+[m[32m        })}[m
[32m+[m[32m      </StyledMenu>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[1mdiff --git a/src/components/Header.css b/src/components/Header.css[m
[1mnew file mode 100644[m
[1mindex 0000000..421be2f[m
[1m--- /dev/null[m
[1m+++ b/src/components/Header.css[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32m.logo{[m
[32m+[m[32m    width:200px;[m
[32m+[m[32m    height:auto;[m
[32m+[m[32m    top: 0;[m
[32m+[m[32m    left: 0;[m
[32m+[m[32m    justify-content: left;[m
[32m+[m[32m    display:grid;[m
[32m+[m[32m}[m
[1mdiff --git a/src/components/Header.js b/src/components/Header.js[m
[1mnew file mode 100644[m
[1mindex 0000000..1f35eaf[m
[1m--- /dev/null[m
[1m+++ b/src/components/Header.js[m
[36m@@ -0,0 +1,12 @@[m
[32m+[m[32mimport "./Header.css"[m
[32m+[m
[32m+[m[32mconst Header = () => {[m
[32m+[m[32m    return ([m
[32m+[m[32m        <div className="header-div">[m
[32m+[m[32m            <img src="./logo.png" className="logo"></img>[m
[32m+[m[32m        </div>[m
[32m+[m[41m        [m
[32m+[m[32m    )[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default Header;[m
\ No newline at end of file[m
[1mdiff --git a/src/index.css b/src/index.css[m
[1mnew file mode 100644[m
[1mindex 0000000..ec2585e[m
[1m--- /dev/null[m
[1m+++ b/src/index.css[m
[36m@@ -0,0 +1,13 @@[m
[32m+[m[32mbody {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',[m
[32m+[m[32m    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',[m
[32m+[m[32m    sans-serif;[m
[32m+[m[32m  -webkit-font-smoothing: antialiased;[m
[32m+[m[32m  -moz-osx-font-smoothing: grayscale;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mcode {[m
[32m+[m[32m  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',[m
[32m+[m[32m    monospace;[m
[32m+[m[32m}[m
[1mdiff --git a/src/index.js b/src/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..d563c0f[m
[1m--- /dev/null[m
[1m+++ b/src/index.js[m
[36m@@ -0,0 +1,17 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m[32mimport ReactDOM from 'react-dom/client';[m
[32m+[m[32mimport './index.css';[m
[32m+[m[32mimport App from './App';[m
[32m+[m[32mimport reportWebVitals from './reportWebVitals';[m
[32m+[m
[32m+[m[32mconst root = ReactDOM.createRoot(document.getElementById('root'));[m
[32m+[m[32mroot.render([m
[32m+[m[32m  <React.StrictMode>[m
[32m+[m[32m    <App />[m
[32m+[m[32m  </React.StrictMode>[m
[32m+[m[32m);[m
[32m+[m
[32m+[m[32m// If you want to start measuring performance in your app, pass a function[m
[32m+[m[32m// to log results (for example: reportWebVitals(console.log))[m
[32m+[m[32m// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals[m
[32m+[m[32mreportWebVitals();[m
[1mdiff --git a/src/logo.svg b/src/logo.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..9dfc1c0[m
[1m--- /dev/null[m
[1m+++ b/src/logo.svg[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32m<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>[m
\ No newline at end of file[m
[1mdiff --git a/src/reportWebVitals.js b/src/reportWebVitals.js[m
[1mnew file mode 100644[m
[1mindex 0000000..5253d3a[m
[1m--- /dev/null[m
[1m+++ b/src/reportWebVitals.js[m
[36m@@ -0,0 +1,13 @@[m
[32m+[m[32mconst reportWebVitals = onPerfEntry => {[m
[32m+[m[32m  if (onPerfEntry && onPerfEntry instanceof Function) {[m
[32m+[m[32m    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {[m
[32m+[m[32m      getCLS(onPerfEntry);[m
[32m+[m[32m      getFID(onPerfEntry);[m
[32m+[m[32m      getFCP(onPerfEntry);[m
[32m+[m[32m      getLCP(onPerfEntry);[m
[32m+[m[32m      getTTFB(onPerfEntry);[m
[32m+[m[32m    });[m
[32m+[m[32m  }[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default reportWebVitals;[m
[1mdiff --git a/src/setupTests.js b/src/setupTests.js[m
[1mnew file mode 100644[m
[1mindex 0000000..8f2609b[m
[1m--- /dev/null[m
[1m+++ b/src/setupTests.js[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32m// jest-dom adds custom jest matchers for asserting on DOM nodes.[m
[32m+[m[32m// allows you to do things like:[m
[32m+[m[32m// expect(element).toHaveTextContent(/react/i)[m
[32m+[m[32m// learn more: https://github.com/testing-library/jest-dom[m
[32m+[m[32mimport '@testing-library/jest-dom';[m
