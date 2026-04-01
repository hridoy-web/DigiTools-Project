import React, { useState } from 'react';;
import { GiShoppingCart } from 'react-icons/gi';
import { MdClose, MdMenu } from 'react-icons/md';


const Navbar = ({ cart }) => {

    // hamburger menu state
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-md'>

            <div className='flex justify-between items-center w-11/12 mx-auto py-4 z-50'>

                <h2 className=' text-2xl md:text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer'>DigiTools</h2>

                {/* dekstop menu small device  hidden*/}
                <div className='hidden md:flex text-center gap-8'>
                    <a className=' font-semibold hover:text-[#9514FA] md:hover:scale-105 transition-all duration-500 cursor-pointer' href="#">Products</a>
                    
                    <a className=' font-semibold hover:text-[#9514FA] duration-500 md:hover:scale-105 transition-all cursor-pointer' href="#">Features</a>

                    <a className=' font-semibold hover:text-[#9514FA] md:hover:scale-105 transition-all duration-500 cursor-pointer' href="#">Pricing</a>

                    <a className=' font-semibold hover:text-[#9514FA] duration-500 cursor-pointer md:hover:scale-105 transition-all' href="#">Testimonials</a>

                    <a className=' font-semibold hover:text-[#9514FA] duration-500 cursor-pointer md:hover:scale-105 transition-all' href="#">FAQ</a>
                </div>

                <div className='flex gap-2 group md:gap-5 items-center'>

                    <div className='flex items-center'>
                        <GiShoppingCart className='cursor-pointer transition-colors duration-300 text-blue-600 group-hover:text-[#9514FA] group-hover:scale-105 text-[20px] md:text-[25px]' />

                        <span className='font-bold text-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent group-hover:text-[#9514FA] group-hover:scale-105 text-[12px] md:text-[14px] cursor-pointer'>({cart.length})</span>
                    </div>

                    <a className=' text-sm md:text-[16px] font-bold hover:text-blue-500  cursor-pointer md:hover:scale-105 duration-500 transition-all  ease-in-out' href="#">Login</a>

                    <button className='btn btn-sm md:btn-md font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full md:hover:scale-105 duration-500 transition-all  ease-in-out '>Get Started</button>

                    {/* small device show hamburger icons */}
                    <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen === true ? <MdClose size={30} /> : <MdMenu size={30} />
                        }
                    </div>
                </div>

                {/* mobile humburder menu showing */}
                {isOpen && (

                    <div className={`md:hidden absolute top-18 right-5 ease-in-out duration-500 bg-gray-200 border-2 border-blue-200 rounded-lg drop-shadow-2xl`} >

                        <div className='flex flex-col gap-1 text-center p-4'>
                            <a className=' font-medium hover:text-blue-500 duration-500 cursor-pointer' href="#">Products</a>
                            <a className=' font-medium hover:text-blue-500 duration-500 cursor-pointer' href="#">Features</a>
                            <a className=' font-medium hover:text-blue-500 duration-500 cursor-pointer' href="#">Pricing</a>
                            <a className=' font-medium hover:text-blue-500 duration-500 cursor-pointer' href="#">Testimonials</a>
                            <a className=' font-medium hover:text-blue-500 duration-500 cursor-pointer' href="#">FAQ</a>
                        </div>
                    </div>

                )}

            </div>
        </nav>
    );
};

export default Navbar;