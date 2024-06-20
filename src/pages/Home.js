import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/productsData';
import styles from './Home.module.css';
import Hero from '../components/Hero';

const Home = () => {
  return (<>
  <Hero/>
    <div id="products-section" className={styles.container}>
      <h1 className={styles.heading}>Products</h1>
      <div  className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
