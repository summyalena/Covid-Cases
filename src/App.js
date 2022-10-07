import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchCovidCases } from './redux/covid/covid';
import Headers from './components/headers/headers';
import CovidCases from './components/HomePage/Category';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidCases());
  }, []);
  return (
    <div className="App">
      <Headers />
      <HeroSection />
      <CovidCases />
    </div>
  );
}

export default App;
