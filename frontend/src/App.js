import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ComplexedGrid from "./components/ChartContainer";
import Intro from "./components/Intro";

function App() {
  const [allCorrelations, setAllCorrelations] = useState(null);
  return (
    <div className="App">
      <Header />
      <Intro allCorrelations={allCorrelations} />
      <ComplexedGrid setAllCorrelations={setAllCorrelations} />
    </div>
  );
}

export default App;