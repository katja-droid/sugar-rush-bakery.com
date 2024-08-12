import React from 'react';
import styles from './Home.module.css';
import Hero from '../components/Hero';
import Team from '../components/Team';

import Tariffs from '../components/Tariffs';
import JoinForm from '../components/JoinForm';
import ScrollableGoods from '../components/ScrollableGoods';
import Contacts from '../components/Contacts';
const Home = () => {
  return (<>
  <Hero/>
  <div id="gallery-section" className={styles.container}>
  <ScrollableGoods/>
    </div>
    <div id="tariffs-section" className={styles.container}>
      <Tariffs/>
    </div>
    <div id="team-section" className={styles.container}>
      <Team/>
      </div>
     
      <div id="join-section" className={styles.container}>
      <JoinForm/>
      </div>
      <div id="contacts-section" className={styles.container}>
     <Contacts/>
      </div>
    </>
  );
};

export default Home;
