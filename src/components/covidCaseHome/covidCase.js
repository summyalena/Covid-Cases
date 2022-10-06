import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './covidCases.module.css';
import { actions } from '../../redux/covid/covid';
import IMAGES from '../../images/images';
import loader from '../../images/1492.gif';

function CovidCase() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.covidCases.loading);
  const handleCovidClick = (name) => {
    dispatch(actions.filterCases(name));
  };

  if (loading) {
    return (
      <div className={styles.loader}>
        <img src={loader} alt=" " />
      </div>
    );
  }

  const data = [
    {
      id: 1,
      name: 'Afghanistan',
      image: IMAGES.Afghanistan,
    },
    {
      id: 2,
      name: 'Albania',
      image: IMAGES.albania,
    },
    {
      id: 3,
      name: 'Algeria',
      image: IMAGES.algeria,
    },
    {
      id: 4,
      name: 'Andorra',
      image: IMAGES.andorra,
    },
    {
      id: 5,
      name: 'Angola',
      image: IMAGES.angola,
    },
    {
      id: 6,
      name: 'Antarctica',
      image: IMAGES.antarctica,
    },
    {
      id: 7,
      name: 'Antigua and Barbuda',
      image: IMAGES.antigua,
    },
    {
      id: 8,
      name: 'Argentina',
      image: IMAGES.argentina,
    },
    {
      id: 9,
      name: 'Armenia',
      image: IMAGES.armenia,
    },
    {
      id: 10,
      name: 'Australia',
      image: IMAGES.australia,
    },
  ];
  return (
    <div className={styles.covidCase}>
      <div className={styles.heading}>
        <h3>Stats of Cases by Countries</h3>
      </div>
      <div className={styles.container}>
        {data.map((one) => (
          <div key={one.id} className={styles.covidHome}>
            <ul className={styles.div}>
              <img src={one.image} className={styles.img} alt={one.name} />
              <Link to={`/details:${one.name}`}>
                <FontAwesomeIcon
                  className={styles.font}
                  icon={faCircleArrowRight}
                  onClick={() => handleCovidClick(one.name)}
                />
              </Link>
            </ul>
            <h2>{one.name}</h2>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CovidCase;
