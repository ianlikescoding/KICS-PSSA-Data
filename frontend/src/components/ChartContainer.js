import * as React from "react";
import Grid from "@mui/material/Grid";
import CustomizedMenus from "./DropDown";
import { generateBarChart, generatePieGraph } from "../generateChart";
import "../components/ChartContainer.css";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";

export default function ComplexedGrid(allCharts) {
  const [data, setData] = useState(); // will be used later
  return (
    <Container>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          width: 1000,
          height: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            sx={{
              marginTop: 30,
            }}
          >
            <CustomizedMenus />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Container>
                <Grid item xs className="chart-container">
                <div id="bar_chart1"></div>
                </Grid>
                <Grid item xs className="chart-container">
                <div id="pie_chart1"></div>
                </Grid>
              </Container>
              <Grid>PSSA</Grid> {/*horizontal axis label */}
              <Grid>
                <button className="more-chart-btn">
                  <span>Add More Chart</span>
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
