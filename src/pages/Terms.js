import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Terms.module.css'; // Assuming you have a CSS module for styling

const Terms = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.termsInfo}>
      <h1>Terms of Service</h1>
      <p>
        Welcome to {siteName}! By using our website at <strong>sugar-rush-bakery.com</strong>, you agree to the following terms and conditions. If you do not agree, please refrain from using our website.
      </p>

      <h2>1. Intellectual Property Rights</h2>
      <p>
        All content on our website, including text, graphics, logos, icons, images, and videos, is the property of {siteName} and is protected by copyright and intellectual property laws. Unauthorized use or reproduction is strictly prohibited.
      </p>

      <h2>2. Acceptable Use</h2>
      <p>
        Our website is intended for your personal use to explore our bakery products and services. You may not modify, distribute, or reproduce any content without our written consent. Activities such as introducing harmful software that threaten the functionality or security of our site are strictly prohibited.
      </p>

      <h2>3. Information Accuracy</h2>
      <p>
        We strive to ensure the accuracy of information related to our products, prices, and availability, but we cannot guarantee that all information is error-free. We reserve the right to correct any errors or inaccuracies without prior notice.
      </p>

      <h2>4. Pricing and Payment</h2>
      <p>
        Our product prices are subject to change and are displayed in the local currency. We offer secure payment options, and accepted payment methods are specified during the checkout process.
      </p>

      <h2>5. Orders and Cancellations</h2>
      <p>
        By placing an order with {siteName}, you are making an offer to purchase our products. We reserve the right to accept or reject your order. We may cancel orders for reasons such as stock unavailability or payment issues. Affected customers will be promptly notified and appropriately compensated.
      </p>

      <h2>6. Product Delivery and Returns</h2>
      <p>
        We offer delivery services for our products. Any cancellations or changes must be made in accordance with our delivery policy. We reserve the right to cancel or reschedule deliveries if necessary and will promptly notify customers of any changes.
      </p>

      <h2>7. External Links</h2>
      <p>
        Our website may contain links to external sites not operated by us. We are not responsible for the content or privacy practices of these external sites, so please exercise caution when accessing them.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        {siteName} and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our website or reliance on the information provided. Our liability is limited to the extent permitted by law.
      </p>

      <h2>9. Acceptance of Terms</h2>
      <p>
        These terms may be modified without prior notice. Continued use of our site following updates constitutes acceptance of the revised terms. If you have any questions about these terms, please contact us at <a href="mailto:info@sugar-rush-bakery.com">info@sugar-rush-bakery.com</a>.
      </p>
    </div>
  );
};

export default Terms;
