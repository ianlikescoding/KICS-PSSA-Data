import React, { useState, useEffect } from "react";
import CustomizedMenus from "./DropDown";
import "../components/ChartContainer.css";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
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
import AvgChart from "./AvgPSSAScoreChart";
import FinancialsvPSSAChart from "./FinancialsvPSSAChart";
import PersonnelvPSSAChart from "./PersonnelvPSSAChart";

export default function ComplexedGrid() {
  // useEffect(() => {
  //   console.log("Data received in ComplexedGrid:", data00);
  // }, [data00]);

  // if (!data00) {
  //   // Handle the case where data is null or undefined
  //   console.error("Data is null or undefined.");
  //   return null; // or return some default content
  // }

  //TODO: being passed correctly, have to organize it so that
  //TODO: for some reason this code runs multiple times so I cant get the correct number for the result.

  // for (let i = 0; i < data00.length; i++) {
  //   const currentObject = data00[i];

  //   // Modify the values as needed;
  //   currentObject["avg(PAdvanced)"] = currentObject["avg(PAdvanced)"] * 4;
  //   currentObject["avg(PBasic)"] = currentObject["avg(PBasic)"] * 3;
  //   currentObject["avg(PBelowBasic)"] = currentObject["avg(PBelowBasic)"] * 2;
  //   currentObject["avg(PAdvanced)"] =
  //     (currentObject["avg(PAdvanced)"] +
  //       currentObject["avg(PBasic)"] +
  //       currentObject["avg(PBelowBasic)"] +
  //       currentObject["avg(PProficient)"]) /
  //     4;
  // }
  // console.log("after change", data00);

  const data = [
    {
      pssa_score: 1.65,
      Y1: 4,
    },
    {
      pssa_score: 1.7,
      Y1: 8,
    },
    {
      pssa_score: 1.9,
      Y1: 7,
    },
    {
      pssa_score: 1.9,
      Y1: 13,
    },
    {
      pssa_score: 2.5,
      Y1: 20,
    },
    {
      pssa_score: 3.2,
      Y1: 16,
    },
    {
      pssa_score: 3.6,
      Y1: 10,
    },
  ];

  const data01 = [
    { name: "Advanced", value: 40 },
    { name: "Proficient", value: 30 },
    { name: "Basic", value: 27 },
    { name: "Below Basic", value: 3 },
  ];

  const data02 = [
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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      console.log("payload: ", payload);
      console.log("label: ", label);
      return (
        <div className="custom-tooltip" backgroundColor="white">
          <h3>{`${payload[0].payload.name}`}</h3>
          <p className="pssascore-label">{`PSSA Score : ${payload[0].value}`}</p>
          <p className="gradrate-label">{`Graduation Rate : $${payload[1].value}M`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <Container>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          width: 1000,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Stack spacing={4}>
          <FinancialsvPSSAChart />
          <PersonnelvPSSAChart />
          <Stack direction="row" spacing={2} alignItems="center">
            <CustomizedMenus
              options={[
                "Literacy",
                "Enrollment by Gender",
                "Enrollment by Race",
                "Attendance",
                "Faculty Years of Service",
              ]}
            />
            <Box>
              <h1>Demographic Data vs PSSA Score</h1>
              <LineChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pssa_score" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Y2"
                  stroke="#FFBB28"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="Y1" stroke="#00C49F" />
              </LineChart>
            </Box>
          </Stack>
          //TODO: calling a chart.
          <AvgChart />
        </Stack>
      </Paper>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          width: 1000,
          flexGrow: 1,
          marginTop: 5,
          marginBottom: 10,
          justifyContent: "center",
          display: "grid",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Box width="100%">
          <h1>PSSA Score Breakdown</h1>
          <Stack direction="row" spacing={10} alignItems="center">
            <CustomizedMenus
              options={["School A", "School B", "School C", "School D"]}
            />
            <PieChart width={270} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="pink"
                label="name"
              />
              <Tooltip />
            </PieChart>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}

ComplexedGrid.propTypes = {
  data: PropTypes.array, // Adjust the type according to the actual data structure
};
