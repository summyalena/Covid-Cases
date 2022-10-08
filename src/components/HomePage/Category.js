import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Category.module.css';
import { actions } from '../../redux/covid/covid';
import data from '../../data';
import loader from '../../images/1492.gif';

function CovidCase() {
  const [Filter, setFilter] = useState('');
  const [Items, setItems] = useState(data);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = Filter[0].toUpperCase() + Filter.slice(1);
    const values = data.filter((item) => item.name === input);
    setItems(values);
    setFilter('');
  };
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.covidCase}>
      <div className={styles.heading}>
        <h3>Stats of Cases by Countries</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={Filter} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.container}>
        {Items.map((one) => (
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
