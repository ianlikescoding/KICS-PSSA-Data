import { useState, useEffect } from "react";
import CustomizedMenus from "./DropDown";
import "../components/ChartContainer.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ScatterChart,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { CircularProgress } from "@mui/material";

const DemographicvPSSAChart = () => {
  const options = [
    "Enrollment by Asian",
    "Enrollment by AfricanAmerican",
    "Enrollment by Hispanic",
    "Enrollment by NativeAmerican",
    "Enrollement by White",
  ];

  const [currOption, setCurrOption] = useState(options[0]);
  const [demographicDataUnprocessed, setDemographicDataUnprocessed] =
    useState(null);
  const [demographicData, setDemographicData] = useState(null);

  function processeDemographicData() {
    var data = [];
    // Process data once fetched
    if (demographicDataUnprocessed) {
      demographicDataUnprocessed.forEach((el) => {
        var currOptionAsJsonTag = "Asian";
        if (currOption == options[1]) {
          currOptionAsJsonTag = "AfricanAmerican";
        } else if (currOption == options[2]) {
          currOptionAsJsonTag = "Hispanic";
        } else if (currOption == options[3]) {
          currOptionAsJsonTag = "NativeAmerican";
        } else if (currOption == options[4]) {
          currOptionAsJsonTag = "White";
        }
        var avgScore =
          (el.PAdvanced * 4 +
            el.PProficient * 3 +
            el.PBasic * 2 +
            el.PBelowBasic * 1) /
          4;
        data.push({
          schoolNumber: el["SchoolNumber"],
          x: avgScore,
          y: el[currOptionAsJsonTag],
        });
      });
      setDemographicData(data);
    }
  }
  console.log("This is a test", demographicData);
  useEffect(() => {
    fetchDemographicData();
  }, []);

  useEffect(() => {
    processeDemographicData();
  }, [demographicDataUnprocessed, currOption]);

  async function fetchDemographicData() {
    try {
      const response = await fetch("http://localhost:3001/demographics");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setDemographicDataUnprocessed(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  console.log("This is a result", demographicData);
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <CustomizedMenus
        options={options}
        setCurrOption={setCurrOption}
        currOption={currOption}
      />
      <Box>
        <h1>Demographic Data vs PSSA Score</h1>
        <ResponsiveContainer width={730} height={400}>
          {demographicData ? (
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
              <YAxis type="number" dataKey="y" name="demographic-data" />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                // content={<CustomTooltip />}
              />
              <Scatter name="gradrate" data={demographicData} fill="#8884d8" />
            </ScatterChart>
          ) : (
            <CircularProgress />
          )}
        </ResponsiveContainer>
      </Box>
    </Stack>
  );
};

// export const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip" backgroundColor="white">
//         <h3>{`${payload[0].payload.AUN}`}</h3>
//         <p className="pssascore-label">{`PSSA Score : ${payload[0].value}`}</p>
//         <p className="gradrate-label">{`Total Expenditure : $${payload[1].value}M`}</p>
//       </div>
//     );
//   }

//   return null;
// };

export default DemographicvPSSAChart;
