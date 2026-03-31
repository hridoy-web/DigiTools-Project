import React from 'react';
import writingPng from '../../assets/products/writing_2327400 1.png'
import { IoMdCheckmark } from 'react-icons/io';

const ProductCard = () => {
    return (
        <div className='w-full h-auto bg-white md:mb-14'>

            <div className='w-11/12 mx-auto justify-center items-center'>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                    {/* Card container */}
                    <div className="bg-gray-100 p-6 rounded-3xl border border-gray-200 shadow-xl transition-all hover:scale-105 duration-500">

                        {/* card first icon and btn controller */}
                        <div className='flex justify-between items-center mb-3'>

                            {/* Card Icon */}
                            <div className='w-16 min-h-16 bg-[#fbf8fe] rounded-full border border-gray-200 flex items-center justify-center'>
                                <img
                                    src={writingPng}
                                    alt="User Icon"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>

                            {/* Card Badge Button */}
                            <button className='badge badge-soft badge-info font-bold'>Best Seller</button>
                        </div>

                        {/* Card heading and paragraf*/}
                        <h3 className='text-left font-extrabold text-xl mb-1'>Starter</h3>
                        <p className='text-left text-gray-600 font-medium'>Perfect for getting started</p>

                        <div className='flex items-baseline my-4 text-center'>
                            <h2 className='text-left text-2xl font-extrabold'>$0 </h2>
                            <span className='text-sm text-gray-500 font-medium'>/Month</span>
                        </div>

                        {/* Card Data */}
                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-green-500' />
                            <p className='text-gray-600 font-medium'>Access to 10 free tools</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-green-500' />
                            <p className='text-gray-600 font-medium'>Basic templates</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-green-500' />
                            <p className='text-gray-600 font-medium'>Community support</p>
                        </div>

                        {/* Btn */}
                        <div className='mt-5'>
                            <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full md:hover:scale-105 duration-500 transition-all  ease-in-out " >Get Started Free</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;