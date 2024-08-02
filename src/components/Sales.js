import React, { useState, useRef } from 'react';
import styles from './Sales.module.css';
import offer1 from '../assets/sale1.webp';
import offer2 from '../assets/sale2.webp';
import offer3 from '../assets/sale3.webp';

const Sales = () => {
    const offers = [
        { image: offer1, text: "Bir arkadaşınızla katılın ve ikiniz de %30 indirim kazanın!" },
        { image: offer2, text: "İlk ayınızda %50 indirim kazanın!" },
        { image: offer3, text: "Başlangıç Seviye Esneme Derslerinde %20 indirim" }
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
            <div className={styles.textSection}>
                <h2>Pin-Up Fitness'te Özel Teklifler</h2>
                <p>
                    Sağlık ve fitness için en iyi yeriniz olan <strong>pin-upaz.podarunochky.com.ua</strong>'ya hoş geldiniz! Pin-Up Fitness'te, üyelerimize hedeflerine ulaşmaları için üstün tesisler ve uzman rehberlik sunmaya kararlıyız. Özel tekliflerimiz, size en iyi değeri sunmak ve fitness yolculuğunuzu keyifli ve ödüllendirici hale getirmek için tasarlanmıştır.
                </p>
                <p>
                    Deneyimli eğitmenlerimiz, yeni başlıyor olsanız da ya da fitness seviyenizi bir üst seviyeye taşımak isteseniz de sizi desteklemek için burada. Herkesin ihtiyacına uygun mükemmel bir program bulabilmesini sağlamak için her seviyeye uygun çeşitli dersler sunuyoruz. Yoga ve pilatesten yüksek yoğunluklu interval antrenmanına kadar, Pin-Up Fitness'te herkes için bir şeyler var.
                </p>
                <p>
                    Bugün canlı topluluğumuza katılın ve özel promosyonlarımızdan yararlanın. Bireysel antrenman seansları veya grup dersleriyle ilgileniyorsanız, esnek üyelik planlarımız yaşam tarzınıza uygundur. Daha fazla detay ve özel tekliflerimize kaydolmak için web sitemizi ziyaret edin: <b>pin-upaz.podarunochky.com.ua</b>.
                </p>
            </div>
            <div className={styles.offersContainer}>
                <button className={styles.navButton} onClick={handlePrevClick}>&lt;</button>
                <div
                    className={styles.offer}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp} // Handle case where mouse leaves the component
                >
                    <img src={offers[currentIndex].image} alt="Sale" className={styles.offerImage} />
                    <p className={styles.offerText}>{offers[currentIndex].text}</p>
                </div>
                <button className={styles.navButton} onClick={handleNextClick}>&gt;</button>
            </div>
        </div>
    );
};

export default Sales;
