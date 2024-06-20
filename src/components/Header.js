import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png'; // Assume you have a logo.png in the assets folder

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
