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
        <h3>Bültenimize abone olun</h3>
        <input
          type="email"
          placeholder="E-posta adresinizi girin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          Abone Ol
        </button>
      </form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Teşekkürler!</h2>
        Abone olduğunuz için teşekkür ederiz!
      </Modal>
    </div>
  );
};

export default SubscriptionForm;
