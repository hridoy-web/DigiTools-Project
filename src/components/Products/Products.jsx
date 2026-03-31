import React from 'react';

const Products = () => {
    return (
        <div className='bg-white w-full mb-10 md:mb-0 md:py-10'>

{/* Align Container */}
            <div className='w-11/12 mx-auto flex justify-center items-center text-center'>

<div className='flex flex-col space-y-5'>

    <h2 className='text-3xl md:text-5xl font-extrabold'>Premium Digital Tools</h2>
    <p className='text-sm md:text-lg text-gray-600 w-xs md:w-xl mx-auto text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

<div className="flex justify-center gap-0">

<button className='btn font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-l-full md:hover:scale-105 duration-500 transition-all  ease-in-out '>Products</button>

<button className='btn font-bold rounded-r-full md:hover:scale-105 duration-500 transition-all ease-in-out '>Cart (2)</button>

</div>

</div>


            </div>
            
        </div>
    );
};

export default Products;