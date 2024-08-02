import React from 'react';
import styles from './AboutUs.module.css';
import icon1 from '../assets/icon1.png'; // Example icon file path
import icon2 from '../assets/icon1.png'; // Example icon file path
import icon3 from '../assets/icon1.png'; // Example icon file path

const AboutUs = () => {
    return (
        <div className={styles.aboutUsContainer}>
            <h2>Pin-Up Fitness Hakkında</h2>
            <p>
                Güzel Antalya şehrinde sağlığını ve refahını dönüştürmek isteyenler için nihai hedef olan <strong>Pin-Up Fitness</strong>'e hoş geldiniz. Son teknoloji tesislerimiz ve geniş kapsamlı fitness programlarımız, ister acemi ister deneyimli bir sporcu olun, hedeflerinize ulaşmanıza yardımcı olmak için tasarlanmıştır.
            </p>
            <p>
                Antalya'nın kalbinde yer alan Pin-Up Fitness, modern olanaklar ve destekleyici bir topluluk atmosferinin benzersiz bir karışımını sunar. Sertifikalı eğitmenlerimiz başarıya ulaşmanıza yardımcı olmaktan tutkuyla yanar ve bireysel ihtiyaç ve tercihlere göre antrenman planları tasarlamak için donatılmıştır.
            </p>
            <p>
                Türkiye'nin en güzel şehirlerinden birinde daha sağlıklı bir yaşam tarzının faydalarını deneyimlemek için canlı topluluğumuza katılın. Esnek üyelik seçenekleri ve sıcak bir atmosfer ile fitness yolculuğunuza başlamak için daha iyi bir yer yok. Bizi <b>Pin-Upaz.podarunochky.com.ua</b> adresinden ziyaret edin ve daha güçlü, daha sağlıklı bir size giden ilk adımı atın!
            </p>
            
            <div className={styles.advantagesSection}>
                <h3>Bizimle Katılmanın Avantajları</h3>
                <div className={styles.advantages}>
                    <div className={styles.advantageItem}>
                        <img src={icon1} alt="Son Teknoloji Ekipmanlar" className={styles.icon} />
                        <p>Son Teknoloji Ekipmanlar</p>
                    </div>
                    <div className={styles.advantageItem}>
                        <img src={icon2} alt="Kişiselleştirilmiş Antrenmanlar" className={styles.icon} />
                        <p>Kişiselleştirilmiş Antrenman Programları</p>
                    </div>
                    <div className={styles.advantageItem}>
                        <img src={icon3} alt="Topluluk Desteği" className={styles.icon} />
                        <p>Canlı Topluluk Desteği</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
