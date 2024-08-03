import React from 'react';
import styles from './Tariffs.module.css';

const Tariffs = () => {
    const tariffs = [
        {
            name: "Pin Up Temel Plan",
            description: "Pin Up ile fitness serüveninize başlamak için mükemmel bir fırsat. Spor salonunun tüm ekipman ve tesislerine belirli saatlerde erişim sağlanır."
        },
        {
            name: "Pin Up Standart Plan",
            description: "Pin Up'da grup dersleri ve kişisel antrenman programlarına tam erişim sunar. Çeşitlilik ve esneklik arayan spor tutkunları için idealdir."
        },
        {
            name: "Pin Up Premium Plan",
            description: "Pin Up tesislerine sınırsız erişim ve uzman eğitmenlerle bire bir özel antrenman seansları. En üst düzey fitness deneyimini arayanlar için tasarlanmıştır."
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
