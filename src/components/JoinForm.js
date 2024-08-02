import React, { useState } from 'react';
import Modal from './Modal';
import styles from './JoinForm.module.css';

const JoinForm = () => {
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
      <h3>E-posta adresinizi aşağıya girerek bize katılın:</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="E-posta adresinizi girin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          KATIL
        </button>
      </form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Katıldığınız için teşekkürler!</h2>
        Ekibimiz yakında sizinle iletişime geçecek!
      </Modal>
    </div>
  );
};

export default JoinForm;
