import React from 'react';
import home from '../../images/petri-dish-removebg-preview.png';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.text}>
        <h3> A Statistics of covid cases in the world</h3>
      </div>
      <div className={styles.picture}>
        <img src={home} className={styles.img} alt="covid" />
      </div>
    </div>
  );
}

export default HeroSection;
