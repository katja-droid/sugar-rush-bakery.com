import React, { useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer}>
        <div className={styles.slide}>
          <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        <div className={styles.navigation}>
          <button className={styles.prev} onClick={prevSlide}>❮</button>
          <button className={styles.next} onClick={nextSlide}>❯</button>
        </div>
      </div>
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
