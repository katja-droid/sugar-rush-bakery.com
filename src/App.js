import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import './App.css';
import Delivery from './pages/Delivery';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Return from './pages/Return';
import ScrollToTop from './components/ScrollToTop'; 

const App = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="return" element={<Return />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
