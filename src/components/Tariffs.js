import React from 'react';
import styles from './Tariffs.module.css';

const Tariffs = () => {
    const tariffs = [
        {
            name: "Temel Plan",
            description: "Yoğun olmayan saatlerde tüm spor salonu ekipmanlarına ve tesislerine erişim. Fitness yolculuğuna başlamak isteyenler için mükemmel."
        },
        {
            name: "Standart Plan",
            description: "Spor salonu tesislerine, grup derslerine ve kişisel antrenman planlarına tam erişim. Çeşitlilik ve esneklik arayan fitness tutkunları için ideal."
        },
        {
            name: "Premium Plan",
            description: "Tüm tesislere sınırsız erişim, premium dersler ve uzman eğitmenlerimizle bire bir antrenman seansları. En üst düzeyde fitness deneyimi isteyenler için tasarlandı."
        }
    ];

    return (
        <div className={styles.tariffsContainer}>
            <h2>Tarifelerimiz</h2>
            <div className={styles.tariffList}>
                {tariffs.map((tariff, index) => (
                    <div key={index} className={styles.tariffItem}>
                        <h3>{tariff.name}</h3>
                        <p>{tariff.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tariffs;
