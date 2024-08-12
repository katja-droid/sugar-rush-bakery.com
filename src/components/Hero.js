import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useSite } from '../context/SiteContext';
import styles from './Hero.module.css';

const Hero = () => {
  const { slogan, info } = useSite();

  return (
    <section id="aboutus-section" className={styles.hero}>
      <div className={styles.slider}></div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <p className={styles.slogan}>{slogan}</p>
        <div className={styles.aboutUs}>
          <ScrollLink
            to="join-section"
            smooth={true}
            duration={500}
            offset={-calculateFixedHeaderHeight()}
            className={`${styles.orderButton}`}
          >
            ORDER NOW
          </ScrollLink>
          <h2 >About Sugar Rush Bakery</h2>
          <p className={styles.description}>
            Welcome to <strong>Sugar Rush Bakery</strong>, your go-to spot for irresistible pastries and artisanal breads located in the heart of Sydney. Our bakery is a sweet haven for both seasoned pastry enthusiasts and newcomers looking to indulge in delicious baked goods.
          </p>
          <p className={styles.description}>
            Situated in the vibrant center of Sydney, Sugar Rush Bakery combines modern baking techniques with traditional recipes to deliver an unforgettable taste experience. Our skilled bakers are dedicated to crafting treats that cater to all tastes and occasions, using only the finest ingredients.
          </p>
          <p className={styles.description}>
            Join our lively community and embrace a sweeter lifestyle. With flexible ordering options and a warm, welcoming atmosphere, our bakery is the perfect place to begin your culinary adventure. Visit us at <b>SugarRushBakery.com.au</b> and take a delicious step into a world of delightful possibilities!
          </p>
        </div>
        <div className={styles.buttons}></div>
      </div>
    </section>
  );
};

const calculateFixedHeaderHeight = () => {
  const headerHeight = 0.13 * window.innerHeight; // 13vh equivalent in pixels
  return headerHeight;
};

export default Hero;
