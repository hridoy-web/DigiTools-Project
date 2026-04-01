import React, { Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Products from './components/Products/Products';
import Steps from './components/Steps';
import PricingCard from './components/PricingCard';
import Footer from './components/Footer';
import { toast, ToastContainer } from 'react-toastify';



const productData = async () => {
  const res = await fetch('./data.json')
  return res.json();
}

const productPromise = productData()

const App = () => {


  const [cart, setCart] = useState([])

  const addToCartHandle = (addProduct) => {

    const clone = cart.find(value => value.id === addProduct.id)

    if (!clone) {
      const newCart = [...cart, addProduct]
      setCart(newCart)
      toast.success(`${addProduct.name} added to cart`,);
    } else {
      toast.warn('Already added this product')
    }
  }

  const handleDeleteCart = (id) => {
    const removeCart = cart.filter(item => item.id !== id);
    setCart(removeCart)
    toast.warn(`product removed from cart`)
  }


  const handleCart = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty")
      return;
    }
    setCart([]);
    toast.success("Order Placed Successfully")
  }


  return (
    <div className='min-h-screen w-full overflow-x-hidden relative'>
      <Navbar cart={cart} ></Navbar>

      <main className='pt-14 md:pt-16'>

        <Banner />
        <Stats />

        <Suspense fallback={<div className='w-11/12 flex gap-4 justify-center items-center py-10 '>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>
          <span className="loading loading-dots loading-xl"></span>
        </div>}>
          <Products productPromise={productPromise} addToCartHandle={addToCartHandle} handleDeleteCart={handleDeleteCart} cart={cart} handleCart={handleCart} />
        </Suspense>


        <Steps />
        <PricingCard />


      </main>


      <footer>
        <Footer />
      </footer>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        toastStyle={{
          backgroundColor: "#fff",
          color: "#333",
          width: "90%",
          margin: "10px auto",
          borderRadius: "12px",
          fontSize: "14px"
        }}

        style={{
          width: "100%",
          maxWidth: "450px",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />
    </div>
  );
};

export default App;