/* eslint-disable global-require */
import React from 'react';
import { useSelector } from 'react-redux';
import DetailsHome from '../DetailsHeroSection/DetailsHeroSection';
import styles from './detailsCategory.module.css';

function Details() {
  const covidCases = useSelector((state) => state.covidCases.country);
  const Images = {
    lat: require('../../images/compass.png'),
    confirmed: require('../../images/confirmation.png'),
    deaths: require('../../images/black-ribbon.png'),
    incidentRate: require('../../images/health-report.png'),
    case_Fatality: require('../../images/file-case.png'),
  };

  return (
    <div>
      <DetailsHome />
      <div className={styles.breakdown}>
        <h4>Country Breakdown</h4>
        { covidCases.map((covid, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ul key={index} className={styles.apiList}>
            { typeof covid.provinceState === 'string' && covid.provinceState.length === 0 ? (
              <li>
                Country_Region:
                {' '}
                {covid.Country_Region}
              </li>
            )
              : (
                <>
                  <li>
                    Country_Province State:
                    {covid.provinceState}
                  </li>
                  <li>
                    Country_Region:
                    {covid.Country_Region}
                  </li>
                </>
              ) }
            <li>
              Lat:
              {' '}
              {covid.Lat}
              <img src={Images.lat} alt="" />
            </li>
            <li>
              Confirmed:
              {' '}
              {covid.Confirmed}
              <img src={Images.confirmed} alt="" />
            </li>
            <li>
              Deaths:
              {' '}
              {covid.Deaths}
              <img src={Images.deaths} alt="" />
            </li>
            <li>
              Incident_Rate:
              {' '}
              {covid.Incident_Rate}
              <img src={Images.incidentRate} alt="" />
            </li>
            <li>
              Case_Fatality_Ratio:
              {' '}
              {covid.Case_Fatality_Ratio}
              <img src={Images.case_Fatality} alt="" />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Details;
