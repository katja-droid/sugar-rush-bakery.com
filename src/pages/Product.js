// Product.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/productsData';
import Modal from '../components/Modal'; // Import the Modal component
import styles from './Product.module.css';
import { useSite } from '../context/SiteContext';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { thankYouProduct, thankYouOrder } = useSite();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const productData = products.find(product => product.id === parseInt(id, 10));
    setProduct(productData);
  }, [id]);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setEmail(''); // Clear the email input field
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.productContainer}>
      <h1>THANK YOU FOR YOUR INTEREST</h1>
      <p>{thankYouProduct}</p>
      <div className={styles.productDetails}>
        <div className={styles.productImage}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.productInfo}>
          <h2>{product.name}</h2>
          <p className={styles.price}>€ {product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <form className={styles.orderForm} onSubmit={handleOrderSubmit}>
            <input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <button type="submit">Order</button>
          </form>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Thank You!</h2>
        <p>{thankYouOrder}</p>
      </Modal>
    </div>
  );
};

export default Product;
