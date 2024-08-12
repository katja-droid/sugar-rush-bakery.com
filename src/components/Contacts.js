import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <h2>Contacts</h2>
      <p>Contact us to order your perfect cake</p>
      <div className={styles.contactInfo}>
        <p>123 Baker Street, Sydney, Australia</p>
        <p>+61234567890</p>
        <p>info@sugarrushbakery.com</p>
      </div>
    </div>
  );
};

export default Contacts;
