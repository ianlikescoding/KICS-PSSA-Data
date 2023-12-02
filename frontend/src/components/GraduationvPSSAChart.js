import { useState, useEffect } from "react";
import CustomizedMenus from "./DropDown";
import "../components/ChartContainer.css";
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

const GraduationvPSSAChart = () => {
  const [gradDataUnprocessed, setGradDataUnprocessed] = useState(null);
  const [gradData, setGradData] = useState(null);
  const options = [
    "Graduation Rate",
    "Dropout Rate",
    "Percent Post-secondary",
    "Percent College Bound",
  ];
  const [currOption, setCurrOption] = useState(options[0]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchGraduationData();
  }, []);

  useEffect(() => {
    processGraduationData();
  }, [gradDataUnprocessed, currOption]);

  async function fetchGraduationData() {
    try {
      const response = await fetch("http://localhost:3001/graddatabyschool");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setGradDataUnprocessed(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  function processGraduationData() {
    var data = [];
    // Process data once fetched
    if (gradDataUnprocessed) {
      gradDataUnprocessed.forEach((el) => {
        var currOptionAsJsonTag = "GraduationRate";
        if (currOption == options[1]) {
          currOptionAsJsonTag = "DropoutRate";
        } else if (currOption == options[2]) {
          currOptionAsJsonTag = "PPostSecondary";
        } else if (currOption == options[3]) {
          currOptionAsJsonTag = "PCollegeBound";
        }

        var avgScore =
          (el.PAdvanced * 4 +
            el.PProficient * 3 +
            el.PBasic * 2 +
            el.PBelowBasic * 1) /
          4;

        data.push({
          School: el["SchoolName"],
          x: avgScore,
          y: el[currOptionAsJsonTag],
        });
      });
      setGradData(data);
    }
  }

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
        <h1>{`${currOption} vs PSSA Score`}</h1>
        <ResponsiveContainer width={730} height={400}>
          {gradData ? (
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
              <YAxis type="number" dataKey="y" name="graduation-data" />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<CustomTooltip />}
              />
              <Scatter name="gradrate" data={gradData} fill="#8884d8" />
            </ScatterChart>
          ) : (
            <CircularProgress />
          )}
        </ResponsiveContainer>
      </Box>
    </Stack>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // console.log("payload: ", payload);
    // console.log("label: ", label);
    return (
      <div className="custom-tooltip" backgroundColor="white">
        <h3>{`${payload[0].payload.School}`}</h3>
        <p className="pssascore-label">{`PSSA Score : ${payload[0].value}`}</p>
        <p className="gradrate-label">{`Data : ${payload[1].value}%`}</p>
      </div>
    );
  }

  return null;
};

export default GraduationvPSSAChart;
