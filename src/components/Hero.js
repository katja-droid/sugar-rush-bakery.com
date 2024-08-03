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
            KATIL
          </ScrollLink>
          <h2>Pin Up Fitness Hakkında</h2>
          <p>
            Başkent Ankara'da sağlık ve zindeliğinizi yeniden keşfetmek için ideal bir yer olan <strong>Pin Up Fitness</strong>'a hoş geldiniz. Son teknolojiye sahip spor salonumuz ve çeşitli fitness programlarımızla, ister yeni başlayın ister deneyimli bir sporcu olun, tüm hedeflerinize ulaşmanız için yanınızdayız.
          </p>
          <p>
            Ankara'nın merkezinde bulunan Pin Up Fitness, modern tesisleri ve destekleyici topluluk ortamını benzersiz bir şekilde bir araya getiriyor. Uzman eğitmenlerimiz, kişisel hedeflerinize ulaşmanıza yardımcı olmaya adanmıştır ve size özel antrenman planları sunma konusunda uzmandır.
          </p>
          <p>
            Türkiye'nin en etkileyici şehirlerinden birinde daha sağlıklı bir yaşam tarzı kazanmak için canlı topluluğumuza katılın. Esnek üyelik seçenekleri ve sıcak atmosferiyle fitness yolculuğunuza başlamak için harika bir yerdir. Bizi <b>Pin-Up.vekatextile.com.ua</b> adresinde ziyaret edin ve daha güçlü, sağlıklı bir hayata adım atın!
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
