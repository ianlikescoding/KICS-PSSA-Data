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
  Label,
  ResponsiveContainer,
} from "recharts";
import { calculateRegression, xTickFormatter } from "./FinancialsvPSSAChart";
import { Typography } from "@mui/material";

const PersonnelvPSSAChart = (props) => {
  const setPersonnelCorrelations = props.setPersonnelCorrelations;
  const [currCorrelationNum, setCurrCorrelationNum] = useState(null);
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
    var currCorrelationNum;
    var test = [];
    var data = [];
    var edLevelData = [];
    var salaryData = [];
    var pFemaleData = [];
    var pMaleData = [];
    var yearsOfServiceData = [];
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

        test.push({
          other: parseFloat(avgScore.toFixed(2)),
          PSSA: el[currOptionAsJsonTag],
        });

        edLevelData.push({
          other: el["EdLevel"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        salaryData.push({
          other: el["Salary"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        pFemaleData.push({
          other: el["PFemale"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        pMaleData.push({
          other: el["PMale"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        yearsOfServiceData.push({
          other: el["YearsOfService"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });
      });

      var personnelRegressions = [];
      personnelRegressions.push({
        Name: "Personnel Education Level",
        correlationCoefficient: calculateRegression(edLevelData),
      });
      personnelRegressions.push({
        Name: "Personnel Salary",
        correlationCoefficient: calculateRegression(salaryData),
      });
      personnelRegressions.push({
        Name: "% Female Personnel",
        correlationCoefficient: calculateRegression(pFemaleData),
      });
      personnelRegressions.push({
        Name: "% Male Personnel",
        correlationCoefficient: calculateRegression(pMaleData),
      });
      personnelRegressions.push({
        Name: "Personnel Years Of Service",
        correlationCoefficient: calculateRegression(yearsOfServiceData),
      });
      setPersonnelCorrelations(personnelRegressions);
      setCurrCorrelationNum(parseFloat(calculateRegression(test).toFixed(4)));
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

  const yTickFormatter = (tick) => {
    if (currOption == options[1]) {
      return `$${tick}`;
    } else if (currOption == options[2] || currOption == options[3]) {
      return `${tick}%`;
    } else if (currOption == options[4]) {
      return `${tick} Yr`;
    }

    return `${tick}`;
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent={"center"}
      >
        <Stack
          direction="column"
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
            <h3>Correlation Coefficient: {currCorrelationNum}</h3>
          </Box>
          {currOption == options[0] ? (
            <Typography fontSize="14px">
              *Level is denoted by following manner:<br></br>1 - Less than high
              school graduate,
              <br />2 - High school graduate,
              <br />3 - Some college, less than bachelor's degree,
              <br />4 - Bachelor's degree ,<br></br>5 - Master's degree, 6 -
              Doctor's degree
            </Typography>
          ) : (
            <></>
          )}
        </Stack>
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
                <XAxis
                  type="number"
                  dataKey="x"
                  name="PSSA_score"
                  tickFormatter={xTickFormatter}
                >
                  <Label
                    value="PSSA Scores"
                    offset={-20}
                    position="insideBottom"
                  />
                </XAxis>
                <YAxis
                  type="number"
                  dataKey="y"
                  name="personnel-data"
                  tickFormatter={yTickFormatter}
                ></YAxis>
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
    </>
  );
};

export default PersonnelvPSSAChart;
