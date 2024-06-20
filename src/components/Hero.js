import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useSite } from '../context/SiteContext';
import styles from './Hero.module.css';
import backgroundImage from '../assets/hero-background.webp'; // Ensure you have a background image

const Hero = () => {
  const { slogan, info } = useSite();

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.slogan}>{slogan}</h1>
        <p className={styles.description}>{info}</p>
        <ScrollLink
          to="products-section"
          smooth={true}
          duration={500}
          offset={-70}  // Adjust the offset as needed
          className={styles.orderButton}
        >
          Order Now
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
