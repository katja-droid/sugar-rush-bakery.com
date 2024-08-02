import React from 'react';
import styles from './Home.module.css';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Sales from '../components/Sales';
import AboutUs from '../components/AboutUs';

import Tariffs from '../components/Tariffs';
const Home = () => {
  return (<>
  <Hero/>
  <div id="aboutus-section" className={styles.container}>
    <AboutUs></AboutUs>
    </div>
    <div id="tariffs-section" className={styles.container}>
      <Tariffs/>
    </div>
    <div id="team-section" className={styles.container}>
      <Team/>
      </div>
      <div id="sales-section" className={styles.container}>
      <Sales></Sales>
      </div>
    </>
  );
};

export default Home;
