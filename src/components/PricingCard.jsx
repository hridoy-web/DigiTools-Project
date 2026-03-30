import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const PricingCard = () => {
    return (
        // main container
        <div className='w-full h-auto py-20  bg-white '>

            {/* layout container */}
            <div className='w-11/12 mx-auto  justify-center items-center text-center'>

                {/* heading text */}
                <div className='space-y-4 mb-10'>
                    <h2 className='text-2xl md:text-5xl font-extrabold'>Simple, Transparent Pricing</h2>
                    <p className='text-gray-600 text-sm text-wrap md:text-lg'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>


                {/* card container */}
                <div className='flex flex-col md:flex-row gap-7 justify-center items-center'>


                    {/* card--- 1 */}
                    <div className="w-80 h-auto bg-primary-content/30 p-6 rounded-3xl border border-gray-200 shadow-xl transition-all hover:scale-105 duration-500">

                        <h3 className='text-left font-extrabold text-xl mb-1'>Starter</h3>
                        <p className='text-left text-gray-600 font-medium'>Perfect for getting started</p>

                        <div className='flex items-baseline my-6 text-center'>
                            <h2 className='text-left text-3xl font-extrabold'>$0 </h2>
                            <span className='text-xl text-gray-500 font-medium'>/Month</span>
                        </div>

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

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-green-500' />
                            <p className='text-gray-600 font-medium'>1 project per month</p>
                        </div>

                        {/* Btn */}

                        <div className='mt-16'>
                            <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full md:hover:scale-105 duration-500 transition-all  ease-in-out " >Get Started Free</button>
                        </div>

                    </div>


                    {/* card--- 2 */}
                    <div className="relative w-80 h-auto bg-primary p-6 rounded-3xl border border-gray-200 shadow-xl transition-all hover:scale-105 duration-500">

                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD782] px-5 py-1.5 rounded-full shadow-md">

                            <span className="text-[#8B4513] text-sm font-bold whitespace-nowrap">Most Popular </span>
                        </div>

                        <h3 className='text-left text-white font-extrabold text-xl mb-1'>Pro</h3>
                        <p className='text-left text-gray-300 font-medium'>Best for professionals</p>

                        <div className='flex items-baseline my-6 text-center'>
                            <h2 className='text-left text-white text-3xl font-extrabold'>$29 </h2>
                            <span className='text-xl text-gray-200 font-medium'>/Month</span>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-white' />
                            <p className='text-white font-medium'>Access to all premium tools</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-white' />
                            <p className='text-white font-medium'>Unlimited templates</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-white' />
                            <p className='text-white font-medium'>Priority support</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-white' />
                            <p className='text-white font-medium'>Unlimited projects</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-white' />
                            <p className='text-white font-medium'>Cloud sync</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-white' />
                            <p className='text-white font-medium'>Advanced analytics</p>
                        </div>

                        {/* Btn */}

                        <div className='mt-5'>
                            <button className="btn w-full  bg-white rounded-full md:hover:scale-105 duration-500 transition-all  ease-in-out " ><span className=" font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                                Start Pro Trial
                            </span></button>
                        </div>

                    </div>


                    {/* card--- 3 */}
                    <div className="w-80 h-auto bg-primary-content/30 p-6 rounded-3xl border border-gray-200 shadow-xl transition-all hover:scale-105 duration-500">

                        <h3 className='text-left font-extrabold text-xl mb-1'>Enterprise</h3>
                        <p className='text-left text-gray-600 font-medium'>For teams and businesses</p>

                        <div className='flex items-baseline my-6 text-center'>
                            <h2 className='text-left text-3xl font-extrabold'>$99 </h2>
                            <span className='text-xl text-gray-500 font-medium'>/Month</span>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-green-500' />
                            <p className='text-gray-600 font-medium'>Everything in Pro</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-green-500' />
                            <p className='text-gray-600 font-medium'>Team collaboration</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-green-500' />
                            <p className='text-gray-600 font-medium'>Custom integrations</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-green-500' />
                            <p className='text-gray-600 font-medium'>Dedicated support</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-green-500' />
                            <p className='text-gray-600 font-medium'>SLA guarantee</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoMdCheckmark className='text-green-500' />
                            <p className='text-gray-600 font-medium'>Custom branding</p>
                        </div>


                        {/* Btn */}

                        <div className='mt-5'>
                            <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full md:hover:scale-105 duration-500 transition-all  ease-in-out ">Contact Sales</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default PricingCard;