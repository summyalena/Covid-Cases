import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faGear, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './headers.module.css';

function Headers() {
  return (
    <div className={styles.headersHome}>
      <div className={styles.backIcon}>
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </div>
      <div className={styles.fonts}>
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
}

export default Headers;
