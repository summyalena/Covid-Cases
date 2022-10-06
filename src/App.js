import Home from './components/CovidHome/Home';
import './App.css';
import Headers from './components/headers/headers';
import CovidCases from './components/covidCaseHome/covidCase';

function App() {
  return (
    <div className="App">
      <Headers />
      <Home />
      <CovidCases />
    </div>
  );
}

export default App;
