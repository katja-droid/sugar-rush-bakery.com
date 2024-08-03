import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Terms.module.css'; // Assuming you have a CSS module for styling

const Terms = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.termsInfo}>
      <h1>HİZMET ŞARTLARI</h1>
      <p>{siteName}'a hoş geldiniz! <strong>Pin-Up.vekatextile.com.ua</strong> adresindeki web sitemizi kullanarak, aşağıda belirtilen şart ve koşulları kabul etmiş oluyorsunuz. Kabul etmiyorsanız, lütfen web sitemizi kullanmaktan kaçının.</p>
      
      <h2>1. FİKRİ MÜLKİYET HAKLARI</h2>
      <p>Web sitemizde yer alan tüm içerik, metin, grafik, logo, simge, resim ve videolar dahil olmak üzere {siteName}'a aittir ve telif hakkı ve fikri mülkiyet yasalarıyla korunmaktadır. Yetkisiz kullanım veya çoğaltma kesinlikle yasaktır.</p>
      
      <h2>2. KABUL EDİLEBİLİR KULLANIM</h2>
      <p>Web sitemiz, fitness hizmetlerimizi ve olanaklarımızı keşfetmeniz için kişisel kullanımınıza yönelik tasarlanmıştır. Herhangi bir içeriği yazılı iznimiz olmadan değiştiremez, dağıtamaz veya çoğaltamazsınız. Sitemizin işlevselliğini veya güvenliğini tehdit edebilecek zararlı yazılımlar gibi faaliyetler kesinlikle yasaktır.</p>
      
      <h2>3. BİLGİ DOĞRULUĞU</h2>
      <p>Fitness programlarımız, derslerimiz ve üyelik seçeneklerimizle ilgili bilgilerin doğruluğunu sağlamaya çalışıyoruz, ancak tüm bilgilerin hatasız olduğunu garanti edemeyiz. Ders programları, fiyatlar ve kullanılabilirlikteki hataları önceden bildirimde bulunmaksızın düzeltme hakkını saklı tutarız.</p>
      
      <h2>4. FİYATLAR VE ÖDEME İŞLEMLERİ</h2>
      <p>Üyelik ve hizmet fiyatlarımız değişebilir ve yerel para biriminde gösterilmektedir. Güvenli ödeme seçenekleri sunuyoruz ve kabul edilen ödeme yöntemleri ödeme veya üyelik kaydı sırasında belirtilmektedir.</p>
      
      <h2>5. ÜYELİKLER VE İPTALLER</h2>
      <p>Bir üyelik satın alarak {siteName}'a katılma teklifinde bulunuyorsunuz, bu teklifi kabul etme veya reddetme hakkımızı saklı tutarız. Kulüp kurallarına uymama veya ödeme sorunları gibi nedenlerle üyelikleri iptal etme hakkını saklı tutarız. Etkilenen üyeler hızlı bir şekilde bilgilendirilir ve uygun şekilde tazmin edilir.</p>
      
      <h2>6. DERS REZERVASYONLARI VE İPTALLER</h2>
      <p>Üyeler dersleri web sitemiz üzerinden rezerve edebilirler. İptaller, ders iptali politikamıza uygun olarak yapılmalıdır. Gerektiğinde dersleri iptal etme veya yeniden planlama hakkını saklı tutarız ve üyeleri bu tür değişikliklerden hızlı bir şekilde haberdar ederiz.</p>
      
      <h2>7. DIŞ BAĞLANTILAR</h2>
      <p>Web sitemiz, tarafımızdan işletilmeyen harici sitelere bağlantılar içerebilir. Bu harici sitelerin içeriğinden veya gizlilik uygulamalarından sorumlu değiliz, bu nedenle bu sitelere erişirken dikkatli olun.</p>
      
      <h2>8. SORUMLULUĞUN SINIRLANDIRILMASI</h2>
      <p>{siteName} veya bağlı kuruluşları, web sitemizi kullanmanızdan veya sağlanan bilgilere güvenmenizden doğabilecek doğrudan, dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu değildir. Sorumluluğumuz, yasaların izin verdiği ölçüde sınırlıdır.</p>
      
      <h2>9. ŞARTLARIN KABULÜ</h2>
      <p>Bu şartlar, önceden bildirimde bulunulmaksızın değiştirilebilir. Sitemizi güncellemeleri takip ederek kullanmaya devam etmeniz, revize edilmiş şartları kabul ettiğiniz anlamına gelir. Bu şartlar hakkında herhangi bir sorunuz varsa, lütfen <a href={`mailto:info@pin-up.vekatextile.com.ua`}>info@pin-up.vekatextile.com.ua</a> adresinden bizimle iletişime geçin.</p>
    </div>
  );
};

export default Terms;
