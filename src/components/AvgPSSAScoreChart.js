import React, { useState, useEffect } from "react";
import CustomizedMenus from "./DropDown";
import "../components/ChartContainer.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";
import { CircularProgress } from "@mui/material";

function FetchData() {
  let options = "GETTYSBURG AREA MS";
  const [data, setData] = useState(null);
  const [schoolName, setName] = useState([]);
  const [currOption, setCurrOption] = useState(null);
  const dictionary = new Map();

  useEffect(() => {
    fetchName();
  }, []);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    if (schoolName && schoolName.length > 0) {
      // Fetch data using schoolName
    }
  }, [schoolName]);

  const fetchName = async () => {
    try {
      const responseName = await fetch(
        "http://localhost:3001/getDictionary?" +
          new URLSearchParams({
            cols: "distinct s.SchoolName, s.SchoolNumber",
            table: "PSSAScores p, School s",
            attribute: "p.SchoolNumber = s.SchoolNumber",
          })
      );
      if (!responseName.ok) {
        throw new Error(`HTTP error! Status: ${responseName.status}`);
      }
      const resultName = await responseName.json();
      setName(resultName);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      // Process data if needed
    }
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/getspecific?" +
          new URLSearchParams({
            cols: "SchoolNumber, Year, avg(PAdvanced), avg(PProficient), avg(PBasic), avg(PBelowBasic)",
            table: "PSSAScores",
            attribute: "SchoolNumber != 0", //TODO: check the equality later this should be a parameterize
            spec: "SchoolNumber, Year",
          })
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // creating a dictionary for dropdown menu,
  // When a user picks a specified
  if (!dictionary) {
    // Handle the case where data is null or undefined
    console.error("Data is null or undefined.");
    return null; // or return some default content
  }

  const uniqueSchoolNames = new Set();

  for (let i = 0; i < schoolName.length; i++) {
    const schoolNumber = schoolName[i].SchoolNumber;
    const schoolNameValue = schoolName[i].SchoolName;

    // Check if the school name is not already in the Set
    if (!uniqueSchoolNames.has(schoolNameValue)) {
      // Add the school name to the Set to mark it as seen
      uniqueSchoolNames.add(schoolNameValue);

      // Add the school name and number to the dictionary
      dictionary.set(schoolNumber, schoolNameValue);
    }
  }

  // Convert the Set to an array for options
  options = Array.from(uniqueSchoolNames);

  // const handleDropdownChange = (selectedItem) => {
  //   setSelectedSchool(selectedItem);
  //   console.log("This is the selected school", selectedSchool);
  // };
  //TODO: I would like to get a school name, and convert that to School number using dictionary
  //      Then use that as a parameter of sql query to get all the data needed.
  // console.log(data);

  if (!data) {
    return null;
  }

  //Organized data is key:SchoolNumber, value: map of (year,weighted score);
  const organizedData = new Map();

  for (let i = 0; i < data.length; i++) {
    const schoolNumber = data[i].SchoolNumber;
    const year = data[i].Year;
    const weightedScore =
      (data[i]["avg(PAdvanced)"] * 4 +
        data[i]["avg(PBasic)"] * 3 +
        data[i]["avg(PBelowBasic)"] * 2 +
        data[i]["avg(PProficient)"]) /
      4;

    // Create an inner map if it doesn't exist for the schoolNumber
    if (!organizedData.has(schoolNumber)) {
      organizedData.set(schoolNumber, new Map());
    }

    // Add the data for the specific year
    organizedData.get(schoolNumber).set(year, {
      year: year,
      score: weightedScore,
    });
  }

  // console.log("Organized Data:", organizedData);

  let selectedSchoolNumber = 10;
  for (const [schoolNumber, schoolName] of dictionary.entries()) {
    if (schoolName === currOption) {
      selectedSchoolNumber = schoolNumber;
      break; // No need to continue the loop once a match is found
    }
  }

  const dataSet = organizedData.get(selectedSchoolNumber);
  const dataSetArray = Array.from(dataSet.values());
  console.log(dataSetArray);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {options ? (
        <CustomizedMenus
          options={options}
          setCurrOption={setCurrOption}
          currOption={currOption || options[0]}
        />
      ) : (
        <CircularProgress style={{ margin: "auto" }} />
      )}
      <Box>
        <h1>Average PSSA Score</h1>
        <LineChart
          width={730}
          height={250}
          data={dataSetArray}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis dataKey="score" domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#FF8000"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Box>
    </Stack>
  );
}

export default FetchData;
