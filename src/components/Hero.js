import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useSite } from '../context/SiteContext';
import styles from './Hero.module.css';

import image1 from '../assets/slider1.webp';
import image2 from '../assets/slider2.webp';
import image3 from '../assets/slider3.webp';
import JoinForm from './JoinForm';

const Hero = () => {
  const { slogan, info } = useSite();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className={styles.hero}>
   
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.slogan}>{slogan}</h1>
        <p className={styles.description}>{info}</p>
        <div className={styles.buttons}>
          <JoinForm/>
         
        </div>
        
      </div>
    </section>
  );
};

const calculateFixedHeaderHeight = () => {
  const headerHeight = 0.13 * window.innerHeight; // 13vh equivalent in pixels
  return headerHeight;
};

export default Hero;