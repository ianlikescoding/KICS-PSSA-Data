import { useState, useEffect } from "react";
import CustomizedMenus from "./DropDown";
import "../components/ChartContainer.css";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
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
import Statistics from "statistics.js";

const FinancialsvPSSAChart = (props) => {
  const setFinCorrelations = props.setFinCorrelations;
  const [currCorrelationNum, setCurrCorrelationNum] = useState(null);
  const [finDataUnprocessed, setFinDataUnprocessed] = useState(null);
  const [finData, setFinData] = useState(null);
  const options = [
    "Total Expenditure",
    "Personal Income/Market Value per WADM",
    "Personal Income",
  ];
  const [currOption, setCurrOption] = useState(options[0]);

  function formatMillions(num) {
    return num / 1000000;
  }

  function processFinancialData() {
    var currCorrelationNum;
    var test = [];
    var data = [];
    var totalExpenditureData = [];
    var wadmData = [];
    var personalIncomeData = [];
    // Process data once fetched
    if (finDataUnprocessed) {
      finDataUnprocessed.forEach((el) => {
        var currOptionAsJsonTag = "TotalExpenditure";
        var formattedVal = 0;

        if (currOption == options[1]) {
          currOptionAsJsonTag = "WADM";
          formattedVal = el[currOptionAsJsonTag];
        } else if (currOption == options[2]) {
          currOptionAsJsonTag = "PersonalIncome";
          formattedVal = formatMillions(el[currOptionAsJsonTag]);
        } else if (currOption == options[0]) {
          formattedVal = formatMillions(el[currOptionAsJsonTag]);
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
          y: formattedVal,
        });

        test.push({
          other: parseFloat(avgScore.toFixed(2)),
          PSSA: el[currOptionAsJsonTag],
        });

        totalExpenditureData.push({
          other: el["TotalExpenditure"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        wadmData.push({
          other: el["WADM"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        personalIncomeData.push({
          other: el["PersonalIncome"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });
      });

      var financialRegressions = [];
      financialRegressions.push({
        Name: "TotalExpenditure",
        correlationCoefficient: calculateRegression(totalExpenditureData),
      });
      financialRegressions.push({
        Name: "WADM",
        correlationCoefficient: calculateRegression(wadmData),
      });
      financialRegressions.push({
        Name: "PersonalIncome",
        correlationCoefficient: calculateRegression(personalIncomeData),
      });
      setFinCorrelations(financialRegressions);
      setFinData(data);
      setCurrCorrelationNum(parseFloat(calculateRegression(test).toFixed(4)));
    }
  }

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchFinancialData();
  }, []);

  useEffect(() => {
    processFinancialData();
  }, [finDataUnprocessed, currOption]);

  async function fetchFinancialData() {
    try {
      const response = await fetch("http://localhost:3001/findatabydistrict");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setFinDataUnprocessed(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      var dataLabel = `${currOption}: $${payload[1].value.toFixed(2)}M`;
      if (currOption == options[1]) {
        dataLabel = `WADM: $${payload[1].value.toFixed(2)}`;
      }
      return (
        <Paper className="custom-tooltip" backgroundColor="white">
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
      </Stack>
      <Box>
        <h1>Financial Data vs PSSA Score</h1>
        <ResponsiveContainer width={730} height={400}>
          {finData ? (
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
              <YAxis type="number" dataKey="y" name="financial-data" />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<CustomTooltip />}
              />
              <Scatter name="gradrate" data={finData} fill="#8884d8" />
            </ScatterChart>
          ) : (
            <CircularProgress />
          )}
        </ResponsiveContainer>
      </Box>
    </Stack>
  );
};

export function calculateRegression(data) {
  var testVars = {
    other: "metric",
    PSSA: "metric",
  };

  var stats = new Statistics(data, testVars);
  var regression = stats.linearRegression("other", "PSSA");

  return regression.correlationCoefficient;
}

export default FinancialsvPSSAChart;
