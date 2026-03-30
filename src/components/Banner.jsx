import React from 'react';
import banner from '../assets/products/banner.png'
import figBtn from '../assets/products/Frame 2087326311.png'

const Banner = () => {
    return (
        <div className='flex justify-between  items-center w-11/12 mx-auto' >

            <div className=' space-y-4'>
                <img src={figBtn} alt="button" />
                <h1 className='text-6xl font-extrabold'>Supercharge Your <br/> Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today. Explore Products
                </p>
<div className='flex gap-4' >
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-3 rounded-full font-bold hover:scale-105 duration-300 shadow-lg">Explore Products</div>
    <div className="">Watch Demo</div>
</div>

            </div>


            <div className=''>
                <img className='' src={banner} alt="" />
            </div>

        </div>
    );
};

export default Banner;