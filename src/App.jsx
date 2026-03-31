import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Products from './components/Products/Products';
import ProductCard from './components/Products/ProductCard';
import Steps from './components/Steps';
import PricingCard from './components/PricingCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <main>
        <Banner />
        <Stats />

        <Products />
        <ProductCard/>

        <Steps />
        <PricingCard />
        <Footer />
      </main>



    </>
  );
};

export default App;