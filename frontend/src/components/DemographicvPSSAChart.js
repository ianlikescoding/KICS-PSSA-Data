import { useState, useEffect } from "react";
import CustomizedMenus from "./DropDown";
import "../components/ChartContainer.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
import { calculateRegression } from "./FinancialsvPSSAChart";

const DemographicvPSSAChart = (props) => {
  const setDemCorrelations = props.setDemCorrelations;
  const options = [
    "Enrollment by Asian",
    "Enrollment by AfricanAmerican",
    "Enrollment by Hispanic",
    "Enrollment by NativeAmerican",
    "Enrollement by White",
    "Enrollement by Male",
    "Enrollement by Female",
  ];

  const [currOption, setCurrOption] = useState(options[0]);
  const [demographicDataUnprocessed, setDemographicDataUnprocessed] =
    useState(null);
  const [demographicData, setDemographicData] = useState(null);
  const [yAxisLabel, setYAxisLabel] = useState("");
  const [currCorrelationNum, setCurrCorrelationNum] = useState(null);

  function processeDemographicData() {
    var currCorrelationNum;
    var data = [];
    var yAxisLabel = "";
    var asianData = [];
    var africanAmericanData = [];
    var hispanicData = [];
    var nativeAmericanData = [];
    var whiteData = [];
    var maleData = [];
    var femaleData = [];
    var test = [];
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
        } else if (currOption == options[5]) {
          currOptionAsJsonTag = "Male";
        } else if (currOption == options[6]) {
          currOptionAsJsonTag = "Female";
        }

        var avgScore =
          (el.PAdvanced * 4 +
            el.PProficient * 3 +
            el.PBasic * 2 +
            el.PBelowBasic * 1) /
          4;

        data.push({
          School: el["SchoolName"],
          x: parseFloat(avgScore.toFixed(2)),
          y: el[currOptionAsJsonTag],
        });

        test.push({
          other: parseFloat(avgScore.toFixed(2)),
          PSSA: el[currOptionAsJsonTag],
        });

        asianData.push({
          other: el["Asian"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        africanAmericanData.push({
          other: el["AfricanAmerican"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        hispanicData.push({
          other: el["Hispanic"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        nativeAmericanData.push({
          other: el["NativeAmerican"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        whiteData.push({
          other: el["White"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        maleData.push({
          other: el["Male"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        femaleData.push({
          other: el["Female"],
          PSSA: parseFloat(avgScore.toFixed(2)),
        });

        yAxisLabel = `% of ${currOptionAsJsonTag} students`;
      });

      var demRegressions = [];
      demRegressions.push({
        Name: "Asian",
        correlationCoefficient: calculateRegression(asianData),
      });
      demRegressions.push({
        Name: "AfricanAmerican",
        correlationCoefficient: calculateRegression(africanAmericanData),
      });
      demRegressions.push({
        Name: "Hispanic",
        correlationCoefficient: calculateRegression(hispanicData),
      });
      demRegressions.push({
        Name: "NativeAmerican",
        correlationCoefficient: calculateRegression(nativeAmericanData),
      });
      demRegressions.push({
        Name: "White",
        correlationCoefficient: calculateRegression(whiteData),
      });
      demRegressions.push({
        Name: "Male",
        correlationCoefficient: calculateRegression(maleData),
      });
      demRegressions.push({
        Name: "Female",
        correlationCoefficient: calculateRegression(femaleData),
      });
      setDemCorrelations(demRegressions);
      setDemographicData(data);
      setCurrCorrelationNum(parseFloat(calculateRegression(test).toFixed(4)));
    }
    setYAxisLabel(yAxisLabel);
  }

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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Paper className="custom-tooltip" backgroundcolor="white">
          <h3>{`${payload[0].payload.School}`}</h3>
          <p className="pssascore-label">{`PSSA Score : ${payload[0].value}`}</p>
          <p className="gradrate-label">{`${currOption}: ${payload[1].value}%`}</p>
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
              <YAxis type="number" dataKey="y" name={yAxisLabel} />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<CustomTooltip />}
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

export default DemographicvPSSAChart;
