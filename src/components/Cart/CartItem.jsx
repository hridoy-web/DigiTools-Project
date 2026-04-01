import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

const CartItem = ({ item, handleDeleteCart }) => {
    return (
        <div className=' flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl shadow-md transition-all hover:scale-105 duration-500 cursor-pointer' >

            <div className='flex items-center gap-4'>

                <div className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center'>
                    <img
                        src={item.icon}
                        alt={item.name}
                        className="object-cover"
                    />
                </div>

                <div>
                    <h4 className='font-bold text-left text-gray-800 text-xs text-wrap md:text-base'>{item.name}</h4>
                    <p className='text-gray-500 text-left text-xs md:text-sm font-medium'>${item.price}</p>
                </div>
            </div>

            <button onClick={() => handleDeleteCart(item.id)} className='text-red-400 hover:text-red-600 text-xl p-2 transition-colors'>
                <MdDeleteOutline />
            </button>



        </div>
    );
};

export default CartItem;