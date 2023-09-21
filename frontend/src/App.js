import './App.css';
import Header from './components/Header';
import { generateBarChart } from './generateBarChart';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='bar_chart1'></div>
      <button onClick={() => generateBarChart('bar_chart1')}> Generate Chart</button>
    </div>
  );
}

export default App;
