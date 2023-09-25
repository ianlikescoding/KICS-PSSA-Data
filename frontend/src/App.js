import './App.css';
import { useState, useEffect } from "react";
import Header from './components/Header';
import CustomizedMenus from './components/DropDown'
import { generatePieGraph, generateBarChart } from './generateChart';
import complexedGrid from './components/ChartContainer';



function App() {
  let allCharts = [];
  const [data, setData] = useState();

  setTimeout(() => {
    setData("Make API call here")
  }, 1000);

  useEffect(() => {
    if (data) {
      generateBarChart(allCharts, 'bar_chart1');
      generatePieGraph(allCharts, 'pie_chart1');
    }
  }, [data]);

  return (
    <div className="App">
      <Header/>
      {complexedGrid()}
      <div id='bar_chart1'></div>
      <div id='pie_chart1'></div>
    </div>
  );
}

export default App;
