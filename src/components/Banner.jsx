import React from 'react';
import banner from '../assets/products/banner.png'


import { IoPlayOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-between items-center w-11/12 mx-auto py-10' >

            <div className='space-y-4 w-full md:w-1/2'>

                <button className='flex items-center gap-2 px-4 py-2 rounded-full border border-[#9514FA] bg-[#F3EEFF] text-[#6B21A8] text-sm font-medium transition-all md:hover:scale-105 duration-500 cursor-pointer'>
                    <span className='w-2 h-2 rounded-full bg-[#9514FA] inline-block cursor-pointer'></span>
                    New: AI-Powered Tools Available
                </button>

                <h1 className='text-4xl md:max-w-xl md:text-6xl font-extrabold leading-tight'>Supercharge Your Digital Workflow</h1>

                <p className='md:max-w-xl text-gray-600'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
                </p>
                <div className='flex  items-center text-center gap-4' >

                    <button className="btn font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full md:hover:scale-105 duration-500 transition-all  ease-in-out ">Explore Products</button>

                    <button className="btn font-bold rounded-full border-[#4F39F6]
                     text-[#9514FA] hover:border-[#9514FA] hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white md:hover:scale-105 transition-all duration-500 ease-in-out"> <IoPlayOutline size={20} />Watch Demo</button>
                </div>
            </div>


            <div className='mt-6 md:mt-0 w-full md:w-5/12 flex justify-center'>
                <img
                    className='rounded-3xl w-96 md:w-full h-auto object-contain transition-all md:hover:scale-105 duration-500 cursor-pointer'
                    src={banner}
                    alt="Banner"
                />
            </div>
        </div>
    );
};

export default Banner;