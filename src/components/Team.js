import React from 'react';
import styles from './Team.module.css';
import bakeryImage from '../assets/bg.webp'; // Replace with an appropriate image for your bakery

const Team = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.textSection}>
        <h2>Why Coose Rush Bakery?</h2>
        <p>
          <strong>Sugar Rush Bakery</strong> is your ultimate destination for freshly baked goods in the heart of Sydney. Our bakery offers a wide array of delectable pastries, breads, and cakes, all crafted with love and the finest ingredients.
        </p>
        <p>
          At Sugar Rush Bakery, we believe in the power of a good treat to bring joy and warmth to your day. Our dedicated team of bakers works tirelessly to create delicious and beautiful products that cater to every taste and occasion. Whether you're a pastry enthusiast or new to the world of baked goods, we have something for everyone.
        </p>
        <p>
          Our commitment to quality and freshness means that every item is baked on-site daily, ensuring you receive only the best. From classic croissants to unique custom cakes, our offerings are designed to delight and satisfy.
        </p>
        <p>
          Join our welcoming community and make Sugar Rush Bakery your go-to spot for indulgent treats. With a cozy atmosphere and friendly service, we aim to make your experience memorable and enjoyable. Visit us today and discover the sweet side of life!
        </p>
      </div>
      <div className={styles.imageSection}>
        <img src={bakeryImage} alt="Sugar Rush Bakery" className={styles.bakeryImage} />
      </div>
    </div>
  );
};

export default Team;
