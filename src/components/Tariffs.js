import React from 'react';
import styles from './Tariffs.module.css';

const Tariffs = () => {
  const fillings = [
    {
      name: "Chocolate Filling",
      description: "Rich and creamy chocolate filling to enhance your desserts.",
    },
    {
      name: "Vanilla Cream",
      description: "Light and smooth vanilla cream filling for your treats.",
    },
    {
      name: "Fruit Jam",
      description: "Delicious fruit jam with fresh fruit pieces for a sweet touch.",
    },
    {
      name: "Lemon Curd",
      description: "Refreshing lemon curd to add a zesty twist to your sweets.",
    },
    {
      name: "Peanut Butter",
      description: "Rich and creamy peanut butter filling.",
    },
    {
      name: "Caramel Sauce",
      description: "Delectable caramel sauce filling for your desserts.",
    },
  ];

  return (
    <div className={styles.fillingsContainer}>
      <h2>Our Filling Options</h2>
      <div className={styles.fillingList}>
        {fillings.map((filling, index) => (
          <div
            key={index}
            className={styles.fillingItem}
            style={{
              backgroundColor: index % 2 === 0 ? '#fe5d9f' : '#ffe6e8',
              color: index % 2 === 0 ? 'white' : '#fe5d9f',
            }}
          >
            <h3  style={{
              
              color: index % 2 === 0 ? 'white' : '#fe5d9f',
            }}>{filling.name}</h3>
            <p style={{
              
              color: index % 2 === 0 ? 'white' : '#fe5d9f',
            }}>{filling.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tariffs;
