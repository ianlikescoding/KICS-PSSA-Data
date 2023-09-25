import * as React from "react";
import Grid from "@mui/material/Grid";
import CustomizedMenus from "./DropDown";
import { generateBarChart, generatePieGraph } from "../generateChart";
import "../components/ChartContainer.css";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

export default function ComplexedGrid() {
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
              <Grid item xs className="chart-container">
                {/* {generateBarChart()} */}
                This is where I want to insert a chart
              </Grid>
              <Grid>PSSA {/* horizontal axis label */}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
