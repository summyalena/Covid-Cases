import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Details.module.css';
import image from '../../images/pcr-test.png';

function DetailsHome() {
  const details = useSelector((state) => state.covidCases.country);
  return (
    <div>
      {details.map((detail, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={styles.Home}>
          <img className={styles.image} src={image} alt="home" />
          <div className={styles.name}>
            <h3>{detail.Country_Region}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailsHome;
