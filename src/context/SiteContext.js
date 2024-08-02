import React, { createContext, useContext } from 'react';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const siteInfo = {
    siteName: "Pin-Upaz.podarunochky.com.ua",
    slogan: "Sağlığınız, Bizim Misyonumuz",
    info: "Antalya'nın Kalbindeki Fitness Sığınağınızı Keşfedin!",
    thankYouProduct: "Ürünümüze ilgi gösterdiğiniz için teşekkür ederiz. Fitness yolculuğunuzda size destek olmaktan heyecan duyuyoruz!",
    thankYouSubscription: "Bültenimize abone olduğunuz için teşekkür ederiz. Özel teklifler ve fitness ipuçları için bizi takip etmeye devam edin!",
    thankYouOrder: "Siparişiniz için teşekkür ederiz. Fitness mükemmelliği yolculuğunuz burada başlıyor!",
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
