import React, { createContext, useContext } from 'react';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const siteInfo = {
    siteName: "Pin-Up.vekatextile.com.ua", // Domain remains unchanged
    slogan: "Zindeliğe Adım Atın, Sağlığınızı Güçlendirin",
    info: "Ankara'nın kalbinde bulunan fitness merkezimize katılın ve sağlığınızı yeni bir seviyeye taşıyın!",
    thankYouProduct: "Ürünümüze olan ilginiz için teşekkür ederiz. Fitness yolculuğunuzda size rehberlik etmekten mutluluk duyuyoruz!",
    thankYouSubscription: "Bültenimize abone olduğunuz için teşekkür ederiz. Özel teklifler ve fitness ipuçları için takipte kalın!",
    thankYouOrder: "Siparişiniz için teşekkürler. Fitness başarı yolculuğunuz burada başlıyor!",
  };

  return (
    <SiteContext.Provider value={siteInfo}>
      {children}
    </SiteContext.Provider>
  );
};

// Create a custom hook to use the SiteContext
export const useSite = () => {
  return useContext(SiteContext);
};
