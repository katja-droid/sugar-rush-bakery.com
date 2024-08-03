import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Privacy.module.css'; // Assuming you have a CSS module for styling

const Privacy = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.privacyInfo}>
      <h1>GİZLİLİK POLİTİKASI</h1>
      <p>{siteName} olarak, gizliliğinize ve bilgilerinizin güvenliğine büyük önem veriyoruz. Bu doküman, <strong>Pin-Up.vekatextile.com.ua</strong> adresindeki hizmetlerimizi ve web sitemizi kullanarak kabul ettiğiniz gizlilik uygulamalarımızı açıklamakta ve verilerinizi nasıl koruduğumuzu ayrıntılarıyla belirtmektedir.</p>

      <h2>1. VERİ TOPLAMA</h2>
      <p><strong>Kişisel Bilgiler:</strong> Üyelik oluşturma ve ders rezervasyonları sırasında adınız, e-posta adresiniz, posta adresiniz ve ödeme bilgilerinizi toplarız.</p>
      <p><strong>Etkileşim Verileri:</strong> Çerezler gibi teknolojiler aracılığıyla sitemizle olan etkileşiminizi izleyerek IP adresiniz ve tarayıcı türünüz gibi bilgileri toplayarak kullanıcı deneyiminizi geliştiririz.</p>

      <h2>2. VERİ KULLANIMI</h2>
      <p><strong>Üyelik Yönetimi:</strong> Kişisel bilgileriniz, üyeliğinizi yönetmek, ders programlarını organize etmek ve sizinle iletişimde kalmak için kullanılır.</p>
      <p><strong>İletişim:</strong> Sınıf onayları, program değişiklikleri ve üyeliğinizle ilgili önemli duyuruları iletmek için iletişim bilgilerinizi kullanırız.</p>
      <p><strong>Özelleştirme:</strong> Onayınız doğrultusunda, geçmiş etkileşimleriniz ve tercihlerinize göre web sitesi deneyiminizi kişiselleştirir, size özel öneriler ve hizmetler sunarız.</p>
      <p><strong>Hizmet Geliştirme:</strong> Daha iyi bir kullanıcı deneyimi sağlamak için topladığımız verileri analiz ederek sitemizi ve hizmetlerimizi sürekli iyileştiririz.</p>

      <h2>3. VERİ PAYLAŞIMI</h2>
      <p><strong>İşletme Operasyonları:</strong> Verileriniz, ders yönetimi ve ödeme işlemleri gibi operasyonları kolaylaştırmak için katı gizlilik anlaşmaları altında üçüncü taraf hizmet sağlayıcılarla paylaşılabilir.</p>
      <p><strong>Yasal Yükümlülükler:</strong> Yasal yükümlülükler doğrultusunda veya haklarımızı ve kamu güvenliğini korumak için gerektiğinde bilgilerinizi açıklayabiliriz.</p>

      <h2>4. GÜVENLİK ÖNLEMLERİ</h2>
      <p>Güvenlik protokollerimiz, kişisel verilerinizi yetkisiz erişim ve kötüye kullanıma karşı korumak üzere tasarlanmıştır. Ancak, internet üzerindeki veri iletimlerinin doğası gereği bazı riskler taşıyabileceğini unutmayın.</p>

      <h2>5. GİZLİLİK TERCİHLERİ</h2>
      <p><strong>Tanıtım Mesajlarından Çıkış:</strong> Herhangi bir zamanda, e-posta iletişimlerimizdeki bağlantıları kullanarak veya doğrudan bize ulaşarak tanıtım mesajlarını almayı bırakabilirsiniz.</p>
      <p><strong>Çerezler:</strong> Etkileşim verilerinizin nasıl toplandığını kontrol etmek için çerez tercihlerinizi web tarayıcınızın ayarlarından değiştirebilirsiniz.</p>

      <h2>6. ÇOCUKLARIN GÜVENLİĞİ</h2>
      <p>16 yaş altındaki bireylerden bilerek veri toplamıyoruz. Yanlışlıkla toplandığını tespit ettiğimiz bilgileri sistemlerimizden derhal sileceğiz.</p>

      <h2>7. POLİTİKA GÜNCELLEMELERİ</h2>
      <p>Gizlilik politikamızı, yeni uygulamaları yansıtmak amacıyla düzenli olarak güncelliyoruz. Bu politikayı düzenli aralıklarla gözden geçirmenizi öneririz, çünkü hizmetlerimizi güncellemeler sonrasında kullanmaya devam etmeniz, yapılan değişiklikleri kabul ettiğiniz anlamına gelir.</p>

      <p>Gizlilik uygulamalarımız hakkında sorularınız veya daha fazla bilgi almak için lütfen <a href={`mailto:info@pin-up.vekatextile.com.ua`}>info@pin-up.vekatextile.com.ua</a> adresinden bizimle iletişime geçin. Sorularınızı hızlı bir şekilde yanıtlamak ve gizlilik haklarınızı korumaya kararlıyız.</p>
    </div>
  );
};

export default Privacy;
