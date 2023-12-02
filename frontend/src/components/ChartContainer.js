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
import DemographicvPSSAChart from "./DemographicvPSSAChart";
import GraduationvPSSAChart from "./GraduationvPSSAChart";

export default function ComplexedGrid(props) {
  const setAllCorrelations = props.setAllCorrelations;
  const [finCorrelations, setFinCorrelations] = useState(null);
  const [gradCorrelations, setGradCorrelations] = useState(null);
  const [personnelCorrelations, setPersonnelCorrelations] = useState(null);
  const [demCorrelations, setDemCorrelations] = useState(null);

  useEffect(() => {
    //rank all factor correlations
    if (
      finCorrelations &&
      gradCorrelations &&
      personnelCorrelations &&
      demCorrelations
    ) {
      var allCorrelations = [
        ...finCorrelations,
        ...gradCorrelations,
        ...personnelCorrelations,
        ...demCorrelations,
      ];
      allCorrelations.sort((a, b) => {
        return (
          Math.abs(b.correlationCoefficient) -
          Math.abs(a.correlationCoefficient)
        );
      });

      console.log("allcorrs sorted: ", allCorrelations);
      setAllCorrelations(allCorrelations);
    }
  }, [
    finCorrelations,
    gradCorrelations,
    personnelCorrelations,
    demCorrelations,
  ]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // console.log("payload: ", payload);
      // console.log("label: ", label);
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
          <FinancialsvPSSAChart setFinCorrelations={setFinCorrelations} />
          <PersonnelvPSSAChart
            setPersonnelCorrelations={setPersonnelCorrelations}
          />
          <GraduationvPSSAChart setGradCorrelations={setGradCorrelations} />
          <DemographicvPSSAChart setDemCorrelations={setDemCorrelations} />
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
          <Stack direction="row" spacing={10} alignItems="center">
            <AvgChart />
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}

ComplexedGrid.propTypes = {
  data: PropTypes.array, // Adjust the type according to the actual data structure
};
