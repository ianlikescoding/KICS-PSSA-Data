import * as React from 'react';
import Grid from '@mui/material/Grid';
import CustomizedMenus from './DropDown'
import { generateBarChart, generatePieGraph } from '../generateChart';
import '../components/ChartContainer.css'

export default function ComplexedGrid() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <CustomizedMenus />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs className='chart-container'>
              {/* {generateBarChart()} */}
              This is where I want to insert a chart
            </Grid>
            <Grid>
              PSSA {/* horizontal axis label */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
