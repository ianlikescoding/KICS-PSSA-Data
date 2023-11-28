import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ComplexedGrid from "./components/ChartContainer";
import FetchData from "./FetchData";

function App() {
  // let allCharts = [];
  // const [data, setData] = useState();

  // setTimeout(() => {
  //   setData("Make API call here");
  // }, 1000);

  // useEffect(() => {
  //   if (document.getElementById("bar_chart1")) {
  //     generateBarChart(allCharts, "bar_chart1");
  //   }

  //   if (document.getElementById("pie_chart1")) {
  //     generatePieGraph(allCharts, "pie_chart1");
  //   }
  // }, [data]);

  return (
    <div className="App">
      <Header />
      <FetchData/>
      <ComplexedGrid />
    </div>
  );
}

export default App;
