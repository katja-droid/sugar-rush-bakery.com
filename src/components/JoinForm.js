import React, { useState } from 'react';
import Modal from './Modal';
import styles from './JoinForm.module.css';

const JoinForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cakeDetails, setCakeDetails] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && cakeDetails) {
      setIsModalOpen(true);
      setName('');
      setEmail('');
      setPhone('');
      setCakeDetails('');
      setSpecialInstructions('');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
     
      <div className={styles.orderForm}>
        <h2>Order Your Cake</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
            required
          />
          <textarea
            placeholder="Cake Details (e.g., flavor, size)"
            value={cakeDetails}
            onChange={(e) => setCakeDetails(e.target.value)}
            className={styles.textarea}
            required
          />
          <textarea
            placeholder="Special Instructions"
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            className={styles.textarea}
          />
          <button type="submit" className={styles.orderButton}>
            Place Order
          </button>
        </form>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>Thank you for your order!</h2>
          <p>We will contact you soon to confirm your cake details.</p>
        </Modal>
      </div>
    </div>
  );
};

export default JoinForm;
