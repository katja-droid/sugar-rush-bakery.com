import React from 'react';
import styles from './Home.module.css';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Sales from '../components/Sales';

import Tariffs from '../components/Tariffs';
import JoinForm from '../components/JoinForm';
const Home = () => {
  return (<>
  <Hero/>
  <div id="join-section" className={styles.container}>
  <JoinForm/>
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
