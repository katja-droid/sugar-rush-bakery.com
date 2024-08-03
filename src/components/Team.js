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
        <div className={styles.teamContainer}>
            <div className={styles.textSection}>
                <h2>Pin-Up Fitness Ekibi</h2>
                <p>
                    <strong>Pin-Up.vekatextile.com.ua</strong> adresinde yer alan Pin-Up Fitness'e hoş geldiniz. Sağlık ve zindeliğinizi artırmak için en iyi yerdesiniz. Ankara'daki spor salonumuz, hedeflerinizi gerçekleştirmenize yardımcı olacak en son teknolojiye sahip tesisler ve geniş bir program yelpazesi sunmaktadır.
                </p>
                <p>
                    Pin-Up Fitness olarak, başarı yolculuğunuzda yanınızda olmaya kararlı, olağanüstü bir eğitmen kadrosuna sahibiz. Her bir eğitmenimiz, fitness alanında geniş bir deneyime sahip ve çeşitli disiplinlerde uzmanlaşmış sertifikalı profesyonellerdir. Güç antrenmanı, kardiyo, esneklik ve fonksiyonel fitness gibi birçok alanda size en iyi hizmeti sunmaktadırlar.
                </p>
                <p>
                    Eğitmenlerimiz, kişisel hedeflerinize ve ihtiyaçlarınıza uygun özel antrenman planları hazırlama konusunda tutkuludur. Bu sayede her antrenman seansınız hem etkili hem de eğlenceli geçer. İster yeni başlayan ister deneyimli bir sporcu olun, eğitmenlerimiz her adımda size rehberlik ve motivasyon sağlar.
                </p>
                <p>
                    Pin-Up Fitness'in enerjik topluluğuna katılın ve fitnessı sadece bir hedef değil, bir yaşam biçimi haline getirin. Programınıza ve tercihinize uygun çeşitli dersler ve programlar arasından seçim yapabilirsiniz. Bugün fitness yolculuğunuza bizimle başlayarak daha sağlıklı ve güçlü bir yaşam için ilk adımı atın!
                </p>
            </div>
            <div className={styles.imageSection}>
                <Carousel slides={slides} />
            </div>
        </div>
    );
};

export default Team;
