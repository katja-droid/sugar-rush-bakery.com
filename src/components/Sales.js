import React, { useState, useRef } from 'react';
import styles from './Sales.module.css';
import offer1 from '../assets/sale1.webp';
import offer2 from '../assets/sale2.webp';
import offer3 from '../assets/sale3.webp';

const Sales = () => {
    const offers = [
        { image: offer1, text: "Yıllık üyelik alana bir ay ücretsiz kullanım hakkı!" },
        { image: offer2, text: "Hafta içi öğlen saatlerinde derslere katılanlara %40 indirim!" },
        { image: offer3, text: "Tüm yeni üyeler için kişisel antrenörle ilk ders ücretsiz!" }
    ];
    

    const [currentIndex, setCurrentIndex] = useState(0);
    const startXRef = useRef(null);

    const handleMouseDown = (e) => {
        startXRef.current = e.clientX;
        e.currentTarget.style.cursor = 'grabbing';
    };

    const handleMouseUp = (e) => {
        const diffX = e.clientX - startXRef.current;
        const threshold = 50; // Minimum drag distance to trigger a change
        e.currentTarget.style.cursor = 'grab';

        if (diffX > threshold) {
            // Dragged to the right
            setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
        } else if (diffX < -threshold) {
            // Dragged to the left
            setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
        }
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Özel Tekliflerimiz</h2>
            <div className={styles.offersContainer}>
                <div
                    className={styles.offer}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp} // Handle case where mouse leaves the component
                >
                    <img src={offers[currentIndex].image} alt="Sale" className={styles.offerImage} />
                    <p className={styles.offerText}>{offers[currentIndex].text}</p>
                </div>
            </div>
            <div className={styles.indicators}>
                {offers.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sales;
