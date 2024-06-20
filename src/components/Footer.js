import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module for styling
import SubscriptionForm from './SubscriptionForm'; // Import the SubscriptionForm component
import { useSite } from '../context/SiteContext';
import socials from '../data/socialsData'; // Import the socials array

const Footer = () => {
  const { siteName } = useSite();

  return (
    <footer className={styles.footer}>
      <div className={styles.linksRow}>
        <a href="/return" className={styles.footerLink}>Return Policy</a>
        <a href="/delivery" className={styles.footerLink}>Delivery Policy</a>
      </div>
      <div className={styles.linksRow}>
        <a href="/terms" className={styles.footerLink}>Terms and Conditions</a>
        <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
      </div>
      <SubscriptionForm /> {/* Add the SubscriptionForm component here */}
      <div className={styles.socialIconsRow}>
        {socials.map(social => (
          <a key={social.id} href={social.link} className={styles.socialIcon}>
            <img src={social.image} alt={`Social icon ${social.id}`} />
          </a>
        ))}
      </div>
      <div className={styles.footerCopyright}>
        {siteName} &copy; <br/> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
