import React, { useRef } from 'react';
import styles from './ScrollableGoods.module.css';

// Importing images from the ./assets directory
import good1 from '../assets/good1.webp';
import good2 from '../assets/good2.webp';
import good3 from '../assets/good3.webp';
import good4 from '../assets/good4.webp';
import good5 from '../assets/good5.webp';
import good6 from '../assets/good6.webp';

const bakeryGoods = [
  {
    name: 'Chocolate Croissant',
    description: 'A buttery, flaky pastry filled with rich chocolate.',
    image: good1,
  },
  {
    name: 'Blueberry Muffin',
    description: 'A soft muffin bursting with fresh blueberries.',
    image: good2,
  },
  {
    name: 'Cinnamon Roll',
    description: 'A sweet roll with a cinnamon-sugar filling and icing.',
    image: good3,
  },
  {
    name: 'Lemon Tart',
    description: 'A tangy lemon tart with a buttery crust.',
    image: good4,
  },
  {
    name: 'Chocolate Biscotti',
    description: 'A crunchy, chocolate-flavored Italian biscuit.',
    image: good5,
  },
  {
    name: 'Raspberry Macaron',
    description: 'A delicate macaron filled with raspberry cream.',
    image: good6,
  },
];

const ScrollableGoods = () => {
  const containerRef = useRef(null);

  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    isDragging = false;
    containerRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDragging = false;
    containerRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Controls scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={styles.bakeryGoodsContainer}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.bakeryGoods}>
        {bakeryGoods.map((item, index) => (
          <div
            style={{
              backgroundColor: index % 2 === 0 ? 'white' : '#fe5d9f',
            }}
            className={styles.bakeryItem}
            key={index}
          >
            <img src={item.image} alt={item.name} className={styles.bakeryImage} />
            <div
              className={styles.bakeryDescription}
              style={{
                color: index % 2 === 0 ? '#fe5d9f' : 'white',
              }}
            >
              <h2
                style={{
                  color: index % 2 === 0 ? '#fe5d9f' : 'white',
                }}
              >
                {item.name}
              </h2>
              <p style={{
                  color: index % 2 === 0 ? '#fe5d9f' : 'white',
                }} >{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableGoods;
