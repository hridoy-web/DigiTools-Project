import React, { useState } from 'react';
import Card from './Card';
import Cart from '../Cart/Cart';
import ProductCard from './ProductCard';

const Products = ({ productPromise, addToCartHandle, handleDeleteCart, cart, handleCart }) => {

    const [selectedBtn, setSelectedBtn] = useState('Products')

    return (
        <div className='bg-white w-full mb-10 md:mb-0 md:py-10'>

            {/* Align Container */}
            <div className='w-11/12 mx-auto flex justify-center items-center text-center'>

                <div className='flex flex-col space-y-5'>

                    <h2 className='text-3xl md:text-5xl font-extrabold'>Premium Digital Tools</h2>
                    <p className='text-sm md:text-lg text-gray-600 w-xs md:w-xl mx-auto text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

                    <div className="flex justify-center gap-0">

                        <button onClick={() => setSelectedBtn('Products')} className={`btn font-bold rounded-l-full md:hover:scale-105 duration-500 transition-all  ease-in-out 
                        ${selectedBtn === "Products" ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : "bg-white"}    `}>Products</button>

                        <button onClick={() => setSelectedBtn('Cart')} className={`btn font-bold rounded-r-full md:hover:scale-105 duration-500 transition-all ease-in-out ${selectedBtn === "Cart" ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : "bg-white"} `}>Cart ({cart.length})</button>

                    </div>

                </div>
            </div>
            <div className='mt-10'>
                {
                    selectedBtn === 'Products' ? <ProductCard productPromise={productPromise} addToCartHandle={addToCartHandle} /> : <Cart cart={cart} handleDeleteCart={handleDeleteCart} handleCart={handleCart} setSelectedBtn={setSelectedBtn} />
                }
            </div>
        </div>
    );
};

export default Products;