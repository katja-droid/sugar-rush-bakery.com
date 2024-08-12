import React, { useState, useEffect } from 'react';
import styles from './CookieBar.module.css';
import { Link } from 'react-router-dom';

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (hasAcceptedCookies) {
      setIsVisible(false);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={styles.cookieBar}>
        <p>
          We use cookies to enhance your experience on our site. Please confirm your acceptance of cookie use. {' '}
          <Link to="/privacy">Learn more</Link>
        </p>
        <button onClick={handleConfirm} className={styles.confirmButton}>
          Accept
        </button>
      </div>
    )
  );
};

export default CookieBar;
