import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module for styling
import SubscriptionForm from './SubscriptionForm'; // Import the SubscriptionForm component
import { useSite } from '../context/SiteContext';
import socials from '../data/socialsData'; // Import the socials array
import { Link } from 'react-router-dom';

const Footer = () => {
  const { siteName } = useSite();
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className={styles.footer}>
      <div className={styles.linksRow}>
        <Link to="/terms" className={styles.footerLink}>Şartlar ve Koşullar</Link>
        <Link to="/privacy" className={styles.footerLink}>Gizlilik Politikası</Link>
      </div>
       {/* Add the SubscriptionForm component here */}
      <div className={styles.socialIconsRow}>
        {socials.map(social => (
          <a key={social.id} href={social.link} className={styles.socialIcon}>
            <img src={social.image} alt={`Sosyal ikon ${social.id}`} />
          </a>
        ))}
      </div>
     
      <div className={styles.footerCopyright}>
        {siteName} &copy; {currentYear} <br/> Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
