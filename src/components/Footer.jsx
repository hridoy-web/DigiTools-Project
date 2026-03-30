import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { ImInstagram } from 'react-icons/im';

const Footer = () => {
    return (
        // main container
        <div className=' w-full bg-[#101727] text-white py-8 md:py-14'>

            {/* items align container */}
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 md:justify-items-center items-start'>

                <div>
                    <h2 className='text-2xl font-extrabold md:text-3xl mb-3  w-fit bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
                    <p className='text-sm text-gray-400 whitespace-normal break-word w-fit'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <div className='flex flex-col gap-1 w-fit'>
                    <p className='font-bold text-lg mb-3'>Product</p>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="#">Features</a>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="#">Pricing</a>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="#">Templates</a>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Integrations</a>
                </div>
                <div className='flex flex-col gap-1 w-fit'>
                    <p className='font-bold text-lg mb-3'>Company</p>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">About</a>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Blog</a>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Careers</a>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Press</a>
                </div>

                <div className='flex flex-col gap-1 w-fit'>
                    <p className='font-bold text-lg mb-3'>Resources</p>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Documentation</a>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Help Center</a>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Community</a>
                    <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Contact</a>
                </div>


                <div className='flex flex-col w-fit'>
                    <p className='font-bold text-lg mb-3 w-fit'>Social Links</p>

                    <div className='flex gap-4'>
                        <a className=' text-gray-400 hover:text-[#9514FA]' href=""><ImInstagram /></a>
                        <a className=' text-gray-400 hover:text-[#9514FA]' href=""><FaFacebook /></a>
                        <a className=' text-gray-400 hover:text-[#9514FA]' href=""> <FaSquareXTwitter /> </a>
                    </div>
                </div>

            </div>

            <div className='w-11/12 mx-auto border-t border-gray-700 mt-10 '>

                <div className='flex flex-col md:flex-row md:justify-between items-center  md:mt-5'>

                    <p className=' mt-4 md:mt-0 text-lg text-gray-400'>© 2026 Digitools. All rights reserved.</p>

                    <div className='flex mt-3 md:mt-0 gap-7'>
                        <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Privacy Policy</a>
                        <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Terms of Service</a>
                        <a className='text-sm text-gray-400 hover:text-[#9514FA]' href="">Cookies</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;