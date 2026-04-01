import React from 'react';
import userIcon from '../assets/products/user.png'
import packagePng from '../assets/products/package.png'
import rocketPng from '../assets/products/rocket.png'

const Steps = () => {
    return (
        <div className='w-full h-auto py-10 md:py-16 bg-neutral-content/90 '>

            <div className='w-11/12 mx-auto justify-center items-center text-center'>

                <div className='space-y-3'>
                    <h2 className='text-3xl md:text-4xl font-extrabold'>Get Started In 3 Steps</h2>
                    <p className='text-xs font-medium text-gray-600'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* Card container */}
                <div className=' flex flex-col md:flex-row justify-center items-center gap-5 md:gap-7 mt-8'>

                    {/* Card---- 1 */}
                    <div className='relative p-10 w-80 h-72 bg-neutral-50 flex flex-col gap-4 items-center text-center rounded-3xl  transition-all md:hover:scale-105 duration-500 cursor-pointer'  >

                        <div className="absolute top-5 right-5 w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ">
                            01
                        </div>

                        <div className='w-16 min-h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center'>
                            <img
                                src={userIcon}
                                alt="User Icon"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className='font-bold text-xl'>Create Account</h3>
                        <p className='text-gray-800 text-sm font-medium'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    {/* Card---- 2 */}
                    <div className='relative p-10 w-80 h-72 bg-neutral-50 flex flex-col items-center text-center gap-4 rounded-3xl transition-all md:hover:scale-105 duration-500  cursor-pointer' >

                        <div className="absolute top-5 right-5 w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ">
                            02
                        </div>

                        <div className='w-16 min-h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center'>
                            <img
                                src={packagePng}
                                alt="User Icon"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className='font-bold text-xl'>Choose Products</h3>
                        <p className='text-gray-800 font-medium text-sm'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    {/* Card---- 3 */}
                    <div className='relative p-10 w-80 h-72 bg-neutral-50 flex flex-col items-center text-center gap-4 rounded-3xl transition-all md:hover:scale-105 duration-500  cursor-pointer'>

                        <div className="absolute top-5 right-5 w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ">
                            03
                        </div>

                        <div className='w-16 min-h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center'>
                            <img
                                src={rocketPng}
                                alt="User Icon"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className='font-bold text-xl'>Start Creating</h3>
                        <p className='text-gray-800 font-medium text-sm'>Download and start using your premium tools immediately.</p>
                    </div>


                </div>

            </div>



        </div>
    );
};

export default Steps;