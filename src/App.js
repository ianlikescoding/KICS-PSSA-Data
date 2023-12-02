import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ComplexedGrid from "./components/ChartContainer";
import FetchData from "./FetchData";
import FetchAvg from "./FetchAvg";

function App() {
  return (
    <div className="App">
      <Header />
      <FetchData />
      <ComplexedGrid />
    </div>
  );
}

export default App;
