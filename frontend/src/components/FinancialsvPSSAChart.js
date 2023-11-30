import { useState, useEffect } from "react";
import CustomizedMenus from "./DropDown";
import "../components/ChartContainer.css";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  ScatterChart,
  Scatter,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const FinancialsvPSSAChart = () => {
  const [finDataUnprocessed, setFinDataUnprocessed] = useState(null);
  const [finData, setFinData] = useState(null);
  const options = [
    "Total Expenditures",
    "Personal Income/Market Value per WADM",
  ];
  const [currOption, setCurrOption] = useState(options[0]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchFinancialData();
  }, []);

  useEffect(() => {
    var data = [];
    // Process data once fetched
    if (finDataUnprocessed) {
      finDataUnprocessed.forEach((el) => {
        var avgScore =
          (el.PAdvanced * 4 +
            el.PProficient * 3 +
            el.PBasic * 2 +
            el.PBelowBasic * 1) /
          4;
        data.push({
          AUN: el.AUN,
          x: avgScore,
          y: el.TotalExpenditure,
        });
      });
      // for (var el in finDataUnprocessed) {
      //   console.log("el: ", el);
      //   var avgScore =
      //     (el["PAdvanced"] * 4 +
      //       el["PAdvanced"] * 3 +
      //       el["PAdvanced"] * 2 +
      //       el["PAdvanced"] * 1) /
      //     4;
      //   data.push({
      //     AUN: el["AUN"],
      //     x: avgScore,
      //     y: el["TotalExpenditure"],
      //   });
      // }

      setFinData(data);
    }
  }, [finDataUnprocessed]);

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

  const data03 = [
    { name: "School A", x: 3.8, y: 90 },
    { name: "School B", x: 2.7, y: 78 },
    { name: "School C", x: 2.5, y: 69 },
    { name: "School D", x: 3.0, y: 82 },
    { name: "School E", x: 3.2, y: 80 },
    { name: "School F", x: 2.3, y: 67 },
    { name: "School G", x: 3.6, y: 88 },
    { name: "School H", x: 2.7, y: 78 },
    { name: "School I", x: 2.0, y: 70 },
    { name: "School J", x: 3.0, y: 81 },
    { name: "School K", x: 3.2, y: 81 },
    { name: "School L", x: 2.3, y: 72 },
    { name: "School M", x: 3.8, y: 95 },
    { name: "School N", x: 2.7, y: 78 },
    { name: "School O", x: 2.5, y: 69 },
    { name: "School P", x: 3.0, y: 82 },
    { name: "School Q", x: 2.2, y: 75 },
    { name: "School R", x: 0.94, y: 65 },
  ];

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

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // console.log("payload: ", payload);
    // console.log("label: ", label);
    return (
      <div className="custom-tooltip" backgroundColor="white">
        <h3>{`${payload[0].payload.AUN}`}</h3>
        <p className="pssascore-label">{`PSSA Score : ${payload[0].value}`}</p>
        <p className="gradrate-label">{`Total Expenditure : $${payload[1].value}M`}</p>
      </div>
    );
  }

  return null;
};

export default FinancialsvPSSAChart;
