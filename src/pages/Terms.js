import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Terms.module.css'; // Assuming you have a CSS module for styling

const Terms = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.termsInfo}>
      <h1>HİZMET KOŞULLARI</h1>
      <p>{siteName}'a hoş geldiniz! <strong>pin-upaz.podarunochky.com.ua</strong> adresindeki web sitemize erişerek ve kullanarak aşağıdaki şart ve koşullara uymayı kabul etmiş olursunuz. Kabul etmiyorsanız, lütfen sitemizi kullanmayın.</p>
      
      <h2>1. FİKRİ MÜLKİYET HAKLARI</h2>
      <p>Web sitemizdeki tüm içerikler, metinler, grafikler, logolar, simgeler, resimler ve videolar dahil olmak üzere {siteName}'a aittir ve telif hakkı ve fikri mülkiyet yasaları ile korunmaktadır. Yetkisiz kullanım veya çoğaltma kesinlikle yasaktır.</p>
      
      <h2>2. İZİN VERİLEN KULLANIM</h2>
      <p>Web sitemiz, fitness hizmetlerimizi ve olanaklarımızı keşfetmek için kişisel kullanım amaçlı tasarlanmıştır. Herhangi bir içeriği yazılı izin almadan değiştiremez, dağıtamaz veya çoğaltamazsınız. Zararlı yazılımlar gibi sitemizin işlevselliğini veya güvenliğini tehlikeye atabilecek faaliyetler yasaktır.</p>
      
      <h2>3. BİLGİ DOĞRULUĞU</h2>
      <p>Fitness programlarımız, derslerimiz ve üyelik seçeneklerimizle ilgili tüm bilgilerin doğru olmasını sağlamaya çalışıyoruz. Ancak, tüm bilgilerin hatasız olduğunu garanti edemeyiz. Ders programları, fiyatlar ve kullanılabilirlikteki hataları önceden bildirimde bulunmaksızın düzeltme hakkını saklı tutarız.</p>
      
      <h2>4. FİYATLAR VE İŞLEMLER</h2>
      <p>Üyelik ve hizmet fiyatları değişebilir ve yerel para biriminde gösterilir. Güvenli ödeme seçenekleri sunuyoruz ve kabul edilen ödeme yöntemleri ödeme veya üyelik kaydı sırasında belirtilir.</p>
      
      <h2>5. ÜYELİKLER VE İPTALLER</h2>
      <p>Bir üyelik satın almak {siteName}'a katılma teklifinde bulunur ve bu teklifi kabul edebilir veya reddedebiliriz. Kulüp kurallarına uymama veya ödeme sorunları gibi nedenlerle üyelikleri iptal etme hakkını saklı tutarız. Etkilenen üyeler hızla bilgilendirilir ve uygun şekilde tazmin edilir.</p>
      
      <h2>6. DERS REZERVASYONLARI VE İPTALLER</h2>
      <p>Üyeler dersleri web sitemizden rezerve edebilirler. İptaller, ders iptali politikamıza uygun olarak yapılmalıdır. Gerektiğinde dersleri iptal etme veya yeniden planlama hakkını saklı tutarız ve üyeleri bu tür değişikliklerden hızlı bir şekilde haberdar ederiz.</p>
      
      <h2>7. DIŞ BAĞLANTILAR</h2>
      <p>Web sitemiz, tarafımızdan işletilmeyen harici sitelere bağlantılar içerebilir. Bu harici sitelerin içeriği veya gizlilik uygulamalarından sorumlu değiliz, bu nedenle bu sitelere erişirken dikkatli olun.</p>
      
      <h2>8. SORUMLULUK SINIRLAMASI</h2>
      <p>{siteName} veya bağlı kuruluşları, web sitemizi kullanmanızdan veya sağlanan bilgilere güvenmenizden kaynaklanan doğrudan, dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu değildir. Sorumluluğumuz, yasaların izin verdiği azami ölçüde sınırlıdır.</p>
      
      <h2>9. ŞARTLARIN KABULÜ</h2>
      <p>Bu şartlar, önceden bildirimde bulunulmaksızın değiştirilebilir. Sitemizi güncellemeleri takiben kullanmaya devam etmeniz, revize edilmiş şartları kabul ettiğiniz anlamına gelir. Bu şartlar hakkında herhangi bir sorunuz varsa, lütfen <a href={`mailto:info@pin-upaz.podarunochky.com.ua`}>info@pin-upaz.podarunochky.com.ua</a> adresinden bizimle iletişime geçin.</p>
    </div>
  );
};

export default Terms;
