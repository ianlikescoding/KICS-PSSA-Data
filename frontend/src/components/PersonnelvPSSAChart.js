import { useState, useEffect } from "react";
import CustomizedMenus from "./DropDown";
import "../components/ChartContainer.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ScatterChart,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const PersonnelvPSSAChart = () => {
  const [personnelDataUnprocessed, setPersonnelDataUnprocessed] =
    useState(null);
  const [personnelData, setPersonnelData] = useState(null);
  const options = [
    "Education Level",
    "Salary",
    "Percent Female",
    "Percent Male",
    "Years of Service",
  ];
  const [currOption, setCurrOption] = useState(options[0]);

  function processPersonnelData() {
    var data = [];
    // Process data once fetched
    if (personnelDataUnprocessed) {
      personnelDataUnprocessed.forEach((el) => {
        var currOptionAsJsonTag = "EdLevel";
        if (currOption == options[1]) {
          currOptionAsJsonTag = "Salary";
        } else if (currOption == options[2]) {
          currOptionAsJsonTag = "PFemale";
        } else if (currOption == options[3]) {
          currOptionAsJsonTag = "PMale";
        } else if (currOption == options[4]) {
          currOptionAsJsonTag = "YearsOfService";
        }
        var avgScore =
          (el.PAdvanced * 4 +
            el.PProficient * 3 +
            el.PBasic * 2 +
            el.PBelowBasic * 1) /
          4;
        data.push({
          District: el["DistrictName"],
          x: parseFloat(avgScore.toFixed(2)),
          y: el[currOptionAsJsonTag],
        });
      });

      setPersonnelData(data);
    }
  }

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchPersonnelData();
  }, []);

  useEffect(() => {
    processPersonnelData();
  }, [personnelDataUnprocessed, currOption]);

  async function fetchPersonnelData() {
    try {
      const response = await fetch(
        "http://localhost:3001/personneldatabydistrict"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setPersonnelDataUnprocessed(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      var dataLabel = `${currOption}: ${payload[1].value} years`;
      if (currOption == options[1]) {
        dataLabel = `${currOption}: $${payload[1].value}`;
      } else if (currOption == options[2]) {
        dataLabel = `${currOption}: ${payload[1].value}%`;
      } else if (currOption == options[3]) {
        dataLabel = `${currOption}: ${payload[1].value}%`;
      }

      return (
        <Paper className="custom-tooltip" backgroundColor="white" margin={10}>
          <h3>{`${payload[0].payload.District}`}</h3>
          <p className="pssascore-label">{`PSSA Score : ${payload[0].value}`}</p>
          <p className="gradrate-label">{dataLabel}</p>
        </Paper>
      );
    }

    return null;
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent={"center"}
    >
      <CustomizedMenus
        options={options}
        setCurrOption={setCurrOption}
        currOption={currOption}
      />
      <Box>
        <h1>Personnel Data vs PSSA Score</h1>
        <ResponsiveContainer width={730} height={400}>
          {personnelData ? (
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 30,
              }}
            >
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="PSSA_score" />
              <YAxis type="number" dataKey="y" name="personnel-data" />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<CustomTooltip />}
              />
              <Scatter name="gradrate" data={personnelData} fill="#8884d8" />
            </ScatterChart>
          ) : (
            <CircularProgress />
          )}
        </ResponsiveContainer>
      </Box>
    </Stack>
  );
};

export default PersonnelvPSSAChart;
