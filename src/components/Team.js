import React from 'react';
import styles from './Team.module.css';
import trainers1 from '../assets/trainers1.webp';
import trainers2 from '../assets/trainers2.webp';
import trainers3 from '../assets/trainers3.webp';
import Carousel from './Carousel';

const Team = () => {
    const slides = [
        trainers1,
        trainers2,
        trainers3,
    ];

    return (
        <div className={styles.aboutUs}>
            <div className={styles.imageSection}>
                <Carousel slides={slides} />
            </div>
            <div className={styles.textSection}>
                <h2>Pin-Up Fitness Ekibi</h2>
                <p>
                    Sağlığınızı ve refahınızı dönüştürmek için en iyi fitness destinasyonunuz olan pin-upaz.podarunochky.com.ua'daki Pin-Up Fitness'e hoş geldiniz. Kolayca ulaşılabilir konumda olan spor salonumuz, hedeflerinize ulaşmanıza yardımcı olacak son teknoloji tesisler ve geniş bir program yelpazesi sunar.
                </p>
                <p>
                    Pin-Up Fitness'te, başarınıza yardımcı olmaya adanmış olağanüstü eğitmen ekibimizle gurur duyuyoruz. Her bir eğitmenimiz sertifikalı olmanın yanı sıra, fitness endüstrisinde eşsiz bir beceri seti ve zengin bir deneyime sahiptir. Güç antrenmanı, kardiyovasküler egzersizler, esneklik ve fonksiyonel fitness gibi çeşitli disiplinlerde uzmanlaşmışlardır.
                </p>
                <p>
                    Eğitmenlerimiz, kişisel hedeflerinize ve ihtiyaçlarınıza göre kişiselleştirilmiş antrenman planları tasarlamaya tutkuyla bağlıdır, böylece her seans etkili, zorlayıcı ve keyifli olur. İster yeni başlayan ister deneyimli bir sporcu olun, eğitmenlerimiz her adımda size rehberlik ve motivasyon sağlar.
                </p>
                <p>
                    Pin-Up Fitness'in canlı topluluğuna katılın ve fitnessın sadece bir hedef değil, bir yaşam tarzı olduğu bir yeri deneyimleyin. Programınıza ve tercihlerinize uygun çeşitli dersler ve programlar keşfedin. Bugün fitness yolculuğunuza bizimle başlayın ve daha sağlıklı, daha güçlü bir size giden ilk adımı atın!
                </p>
            </div>
        </div>
    );
};

export default Team;
