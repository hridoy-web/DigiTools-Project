import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <main>
        <Banner />
        <Stats />

      </main>



    </>
  );
};

export default App;