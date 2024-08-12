import React, { createContext, useContext } from 'react';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const siteInfo = {
    siteName: "sugar-rush-bakery.com", // Updated domain for the bakery
    slogan: "Indulge in Sweet Delights",
    info: "Join us at the heart of Sydney for a taste of freshly baked goods that delight the senses!",
    thankYouProduct: "Thank you for your interest in our delicious products. We are thrilled to sweeten your day!",
    thankYouSubscription: "Thank you for subscribing to our newsletter. Stay tuned for sweet offers and baking tips!",
    thankYouOrder: "Thank you for your order. Your delightful journey into sweetness begins here!",
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
