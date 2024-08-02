import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Privacy.module.css'; // Assuming you have a CSS module for styling

const Privacy = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.privacyInfo}>
      <h1>GİZLİLİK TAAHHÜDÜ</h1>
      <p>{siteName} olarak gizliliğinize ve bilgilerinizin güvenliğine öncelik veriyoruz. Bu belge, verilerinizi koruma taahhüdümüzü ortaya koyar ve <strong>pin-upaz.podarunochky.com.ua</strong> adresindeki hizmetlerimizi ve web sitemizi kullanarak kabul ettiğiniz uygulamaları açıklar.</p>

      <h2>1. BİLGİ TOPLAMA</h2>
      <p><strong>Kişisel Veriler:</strong> Üyelik kaydı ve ders rezervasyonları sırasında adınız, e-posta adresiniz, posta adresiniz ve ödeme bilgileriniz gibi gerekli detayları toplarız.</p>
      <p><strong>Etkileşim Verileri:</strong> Çerezler gibi teknolojiler kullanarak web sitemizle olan etkileşiminizi izleriz ve kullanıcı deneyimini geliştirmek için IP adresiniz ve tarayıcı türünüz gibi bilgileri kaydederiz.</p>

      <h2>2. BİLGİ KULLANIMI</h2>
      <p><strong>Üyelik Yönetimi:</strong> Kişisel verileriniz, üyeliğinizi yönetmek, ders programlarını düzenlemek ve bizimle olan etkileşiminiz boyunca iletişimi sürdürmek için kullanılır.</p>
      <p><strong>İletişim:</strong> Sınıf onaylarını, program güncellemelerini ve üyeliğinizle ilgili önemli duyuruları göndermek için iletişim bilgilerinizi kullanırız.</p>
      <p><strong>Özelleştirme:</strong> Onayınızla, geçmiş etkileşimleriniz ve tercihlerinize göre web sitesi deneyiminizi kişiselleştirir ve size özel öneriler ve hizmetler sunarız.</p>
      <p><strong>Hizmet Geliştirme:</strong> Tüm üyeler için daha iyi bir deneyim sağlamak amacıyla toplanan verileri analiz ederek web sitemizi ve hizmetlerimizi sürekli olarak iyileştiririz.</p>

      <h2>3. BİLGİ AÇIKLAMASI</h2>
      <p><strong>İşletme Operasyonları:</strong> Verileriniz, sınıf yönetimi ve ödeme işlemleri gibi operasyonlara yardımcı olmak için katı gizlilik anlaşmaları altında üçüncü taraf hizmet sağlayıcılarla paylaşılabilir.</p>
      <p><strong>Yasal Yükümlülükler:</strong> Haklarımızı korumak, hizmetlerimizin güvenliğini sağlamak veya kamu güvenliğini sağlamak amacıyla yasal gereklilik durumunda bilgilerinizi açıklayabiliriz.</p>

      <h2>4. GÜVENLİK ÖNLEMLERİ</h2>
      <p>Güvenlik protokollerimiz, kişisel bilgilerinizi yetkisiz erişim ve kötüye kullanımdan korumak için tasarlanmıştır. Ancak, bilgilerin çevrimiçi iletilmesinin doğasında var olan riskler olduğunu lütfen unutmayın.</p>

      <h2>5. GİZLİLİK TERCİHLERİNİZ</h2>
      <p><strong>Tanıtım Mesajlarından Çıkış:</strong> Herhangi bir zamanda, iletişimlerimizde sağlanan bağlantıları kullanarak veya doğrudan bizimle iletişime geçerek tanıtım mesajlarını almayı durdurabilirsiniz.</p>
      <p><strong>Çerezler:</strong> Etkileşim verilerinizin nasıl toplandığını kontrol etmek için çerez tercihlerinizi web tarayıcı ayarlarınızdan yönetebilirsiniz.</p>

      <h2>6. ÇOCUK GÜVENLİĞİ</h2>
      <p>16 yaş altındaki bireylerden bilerek veri toplamıyoruz. Yanlışlıkla toplanan herhangi bir bilgi sistemlerimizden derhal silinecektir.</p>

      <h2>7. POLİTİKA GÜNCELLEMELERİ</h2>
      <p>Gizlilik Politikamızı yeni uygulamaları yansıtacak şekilde periyodik olarak güncelliyoruz. Politikayı düzenli olarak gözden geçirmenizi öneririz, çünkü hizmetlerimizi güncellemeler sonrasında kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz anlamına gelir.</p>

      <p>Gizlilik uygulamalarımız hakkında sorularınız veya daha fazla bilgi almak için lütfen <a href={`mailto:info@pin-upaz.podarunochky.com.ua`}>info@pin-upaz.podarunochky.com.ua</a> adresinden bizimle iletişime geçin. Sorularınızı hızlı bir şekilde yanıtlamak ve gizlilik haklarınızı korumaya kararlıyız.</p>
    </div>
  );
};

export default Privacy;
