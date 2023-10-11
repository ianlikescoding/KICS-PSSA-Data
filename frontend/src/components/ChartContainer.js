import * as React from "react";
import CustomizedMenus from "./DropDown";
import "../components/ChartContainer.css";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import {
  BarChart,
  Bar,
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
  ResponsiveContainer
} from "recharts";

export default function ComplexedGrid() {
  const data = [
    {
      name: "School A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "School B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "School C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "School D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "School E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "School F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "School G",
      uv: 3490,
      pv: 4300,
    },
  ];

  const data01 = [
    { name: "Advanced", value: 400 },
    { name: "Proficient", value: 300 },
    { name: "Basic", value: 300 },
    { name: "Below Basic", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const data02 = [
    { name: 'School A', x: 3.8, y: 90},
    { name: 'School B', x: 2.7, y: 78},
    { name: 'School C', x: 2.5, y: 69},
    { name: 'School D', x: 3.0, y: 82},
    { name: 'School E', x: 3.2, y: 80},
    { name: 'School F', x: 2.3, y: 67},
    { name: 'School G', x: 3.6, y: 88},
    { name: 'School H', x: 2.7, y: 78},
    { name: 'School I', x: 2.0, y: 70},
    { name: 'School J', x: 3.0, y: 81},
    { name: 'School K', x: 3.2, y: 81},
    { name: 'School L', x: 2.3, y: 72},
    { name: 'School M', x: 3.8, y: 95},
    { name: 'School N', x: 2.7, y: 78},
    { name: 'School O', x: 2.5, y: 69},
    { name: 'School P', x: 3.0, y: 82},
    { name: 'School Q', x: 2.2, y: 75},
    { name: 'School R', x: 0.94, y: 65},

  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      console.log("payload: ", payload)
      console.log("label: ", label)
      return (
        <div className="custom-tooltip">
          <h3>{`${payload[0].payload.name}`}</h3>
          <p className="pssascore-label">{`${payload[0].name} : ${payload[0].value}`}</p>
          <p className="gradrate-label">{`${payload[1].name} : ${payload[1].value}`}</p>
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
        <Stack direction="row" spacing={2} alignItems="center">
            <CustomizedMenus />
            <Box>
              <h1>PSSA Score vs Financial Data</h1>
              <ResponsiveContainer width={730} height={300}>
                <ScatterChart
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid />
                  <XAxis type="number" dataKey="x" name="PSSA_score" />
                  <YAxis type="number" dataKey="y" name="graduation_rate" unit="%" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip/>} />
                  <Scatter name="gradrate" data={data02} fill="#8884d8"/>
                </ScatterChart>
              </ResponsiveContainer>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <CustomizedMenus />
            <Box >
            <h1>Visual B</h1>
            <BarChart width={730} height={250} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
                </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <CustomizedMenus />
            <Box>
              <h1>Visual C</h1>
              <LineChart
                width={730}
                height={250}
                data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </Box>
          </Stack>
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
            <CustomizedMenus />
            <PieChart width={270} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
            </PieChart>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}
