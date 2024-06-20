import React, { createContext, useContext } from 'react';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const siteInfo = {
    siteName: "MyAwesomeSite.Com",
    slogan: "Your success, our commitment",
    info: "We provide the best services.",
    thankYouProduct: "Thank you for the interest in product.",
    thankYouSubscription: "Thank you for subscribing",
    thankYouOrder: "Thank you for your order.",
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
