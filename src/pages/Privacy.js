import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Privacy.module.css'; // Assuming you have a CSS module for styling

const Privacy = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.privacyInfo}>
      <h1>Privacy Policy</h1>
      <p>
        At {siteName}, we value your privacy and are committed to protecting your personal information. This document outlines our privacy practices and details how we safeguard your data when you use our services and website at <strong>sugar-rush-bakery.com</strong>.
      </p>

      <h2>1. Data Collection</h2>
      <p>
        <strong>Personal Information:</strong> We collect your name, email address, postal address, and payment information when you place an order or subscribe to our newsletter.
      </p>
      <p>
        <strong>Interaction Data:</strong> We use cookies and similar technologies to track your interactions with our site, collecting information such as your IP address and browser type to enhance your user experience.
      </p>

      <h2>2. Data Usage</h2>
      <p>
        <strong>Order Fulfillment:</strong> Your personal information is used to process orders, manage your account, and communicate with you regarding your purchases.
      </p>
      <p>
        <strong>Communication:</strong> We use your contact information to send order confirmations, delivery updates, and important announcements about our services.
      </p>
      <p>
        <strong>Customization:</strong> With your consent, we personalize your website experience based on your past interactions and preferences, providing tailored recommendations and services.
      </p>
      <p>
        <strong>Service Improvement:</strong> We analyze collected data to continuously improve our website and offerings, ensuring a better user experience.
      </p>

      <h2>3. Data Sharing</h2>
      <p>
        <strong>Business Operations:</strong> Your data may be shared with third-party service providers to facilitate operations such as order delivery and payment processing, under strict confidentiality agreements.
      </p>
      <p>
        <strong>Legal Obligations:</strong> We may disclose your information if required by law or to protect our rights and the safety of our customers.
      </p>

      <h2>4. Security Measures</h2>
      <p>
        Our security protocols are designed to protect your personal data from unauthorized access and misuse. However, please be aware that data transmission over the internet carries inherent risks.
      </p>

      <h2>5. Privacy Preferences</h2>
      <p>
        <strong>Opt-Out of Promotional Messages:</strong> You can opt out of receiving promotional messages at any time by following the links in our emails or contacting us directly.
      </p>
      <p>
        <strong>Cookies:</strong> You can control how your interaction data is collected by adjusting your cookie preferences in your web browser settings.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        We do not knowingly collect data from individuals under 16 years of age. If we become aware that such information has been inadvertently collected, we will promptly delete it from our systems.
      </p>

      <h2>7. Policy Updates</h2>
      <p>
        We regularly update our privacy policy to reflect new practices. We recommend reviewing this policy periodically, as continued use of our services following updates indicates acceptance of any changes.
      </p>

      <p>
        For questions or more information about our privacy practices, please contact us at <a href="mailto:info@sugar-rush-bakery.com">info@sugar-rush-bakery.com</a>. We are committed to answering your inquiries promptly and protecting your privacy rights.
      </p>
    </div>
  );
};

export default Privacy;
