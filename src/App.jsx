import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Products from './components/Products/Products';

import Steps from './components/Steps';
import PricingCard from './components/PricingCard';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';


const productData = async () =>{
  const res = await fetch('/data.json')
  return res.json();
}

const productPromise = productData()

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <main>
        <Banner />
        <Stats />

        <Products productPromise={productPromise} />
  

        <Steps />
        <PricingCard />
        <Footer />
        
      </main>

<ToastContainer />

    </>
  );
};

export default App;