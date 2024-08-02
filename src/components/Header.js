// src/components/Header.js
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png'; // Assume you have a logo.png in the assets folder

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -document.querySelector(`.${styles.header}`).offsetHeight; // Adjust for fixed header height
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (id, path) => {
    if (location.pathname === path) {
      scrollToSection(id);
    } else {
      navigate(path, { state: { scrollToSection: id } });
    }
  };

  const handleSubscribeClick = () => {
    scrollToSection('subscribe-section');
  };

  React.useEffect(() => {
    if (location.state?.scrollToSection) {
      scrollToSection(location.state.scrollToSection);
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <nav className={styles.navLinks}>
        <span onClick={() => handleLinkClick('aboutus-section', '/')} className={styles.navLink}>Hakkımızda</span>
        <span onClick={() => handleLinkClick('tariffs-section', '/')} className={styles.navLink}>Tarifeler</span>
        <span onClick={() => handleLinkClick('team-section', '/')} className={styles.navLink}>Ekibimiz</span>
        <span onClick={() => handleLinkClick('sales-section', '/')} className={styles.navLink}>Özel Teklifler</span>
      </nav>
    </header>
  );
};

export default Header;
