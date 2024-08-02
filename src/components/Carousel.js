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
      <button className={styles.prev} onClick={prevSlide}>❮</button>
      <div className={styles.slide}>
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className={styles.next} onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;