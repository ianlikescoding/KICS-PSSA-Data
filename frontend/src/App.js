import './App.css';
import { GeneratePieGraph } from './generatePieGraph';
import Header from './components/Header';
import { generateBarChart } from './generateBarChart';


function App() {
  return (
    <div className="App">
      <Header/>
      <div id='bar_chart1'></div>
      <button onClick={() => generateBarChart('bar_chart1')} ><span>Generate Chart</span><i></i></button>
      <button onClick={() => GeneratePieGraph('pie_chart_1')}><span>Button</span><i></i></button>
    </div>
  );
}

export default App;
