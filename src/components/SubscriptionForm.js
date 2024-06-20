import React, { useState } from 'react';
import Modal from './Modal';
import styles from './SubscriptionForm.module.css';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsModalOpen(true);
      setEmail('');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.subscriptionForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          Subscribe
        </button>
      </form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Thank you!</h2>
        Thank you for subscribing!
      </Modal>
    </div>
  );
};

export default SubscriptionForm;
