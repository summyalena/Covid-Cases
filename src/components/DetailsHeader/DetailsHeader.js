import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faGear, faMicrophone, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './DetailsHeaders.module.css';
// import { useSelector } from 'react-redux';

function DetailsHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.backIcon}>
        <Link to="/">
          <FontAwesomeIcon className={styles.icon} icon={faCircleArrowLeft} />
        </Link>
      </div>
      <ul className={styles.navName}>
        <Link to="/">
          <li>Country</li>
        </Link>
        <li>Name</li>
      </ul>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
}

export default DetailsHeader;
