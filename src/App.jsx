import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Steps from './components/Steps';
import PricingCard from './components/PricingCard';

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <main>
        <Banner />
        <Stats />
        <Steps />
        <PricingCard />
      </main>



    </>
  );
};

export default App;