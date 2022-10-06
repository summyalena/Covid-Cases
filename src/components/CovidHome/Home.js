import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import home from '../../images/petri-dish-removebg-preview.png';
import styles from './Home.module.css';
import { fetchCovidCases } from '../../redux/covid/covid';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidCases());
    console.log(fetchCovidCases());
  }, [dispatch]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.text}>
        <h3> A STATISTICS OF COVID CASES IN THE WORLD</h3>
      </div>
      <div className={styles.picture}>
        <img src={home} className={styles.img} alt="covid" />
      </div>
    </div>
  );
}

export default Home;
