import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.badge}>{product.badge} </div>
      <div className={styles['image-container']}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>€ {product.price}</p>
        <Link to={`/product/${product.id}`} className={styles.button}>View Product</Link>
      </div>
    </div>
  );
};

export default ProductCard;
