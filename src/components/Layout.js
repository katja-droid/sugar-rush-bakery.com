import React, {useEffect} from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import CookieBar from './CookieBar';
import { useSite } from '../context/SiteContext';

const Layout = () => {
  const {siteName} = useSite();
  useEffect(() => {
    document.title = siteName;
  }, [siteName]);
  return (
    <div >
      <Header />
    
      <main style={{paddingTop: '13vh'}}>
        <Outlet />
      </main>
      <Footer />
      <CookieBar/>
    </div>
  );
};

export default Layout;
