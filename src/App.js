import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/CovidHome/Home';
import './App.css';
import { fetchCovidCases } from './redux/covid/covid';
import Headers from './components/headers/headers';
import CovidCases from './components/covidCaseHome/covidCase';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidCases());
  }, []);
  return (
    <div className="App">
      <Headers />
      <Home />
      <CovidCases />
    </div>
  );
}

export default App;
