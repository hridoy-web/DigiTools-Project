import React from 'react';
import { HiMiniDocumentCurrencyDollar, HiOutlineShoppingBag } from "react-icons/hi2";
import CartItem from './CartItem';

const Cart = ({ cart, handleDeleteCart }) => {
    return (
        <div className='w-11/12 mx-auto mt-10 pb-20'>
            {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-gray-50 border border-gray-200 rounded-3xl">
                    <HiOutlineShoppingBag size={50} className="text-gray-300 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
                    <p className="text-gray-500 mt-1">No products added.</p>

                    <button className="mt-6 px-8 py-2 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all">
                        Shop Now
                    </button>
                </div>
            ) : (
                <div className=" w-4xl mx-auto  text-center  p-8 bg-gray-50 border border-gray-200 rounded-3xl">

                    <h2 className='text-xl text-left font-extrabold mb-5 text-gray-800'>Your Cart ({cart.length})</h2>

                    <div className='flex flex-col gap-3'>
                        {cart.map((item, index) => (
                            <CartItem key={index} item={item} handleDeleteCart={handleDeleteCart} />
                        ))}
                    </div>
                    <div className="mt-8 p-7 bg-white border-t border-gray-100 flex justify-between rounded-3xl items-center shadow-lg">
                        <div className='flex gap-1 items-center'>
                            <span><HiMiniDocumentCurrencyDollar size={20} /></span>
                            <h3 className="font-extrabold text-xl">Total Price:</h3>
                        </div>
                        <span className="text-2xl font-black text-purple-600">
                            ${cart.reduce((total, p) => total + p.price, 0)}
                        </span>
                    </div>
                </div>

            )}

        </div>

    );
};

export default Cart;