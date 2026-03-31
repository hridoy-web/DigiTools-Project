import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { use } from 'react';

const ProductCard = ({ productPromise }) => {

    const productList = use(productPromise)

    console.log(productList)

    return (
        <div className='w-full h-auto bg-white mb-10 md:mb-14'>

            <div className='w-11/12 mx-auto justify-center items-center'>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                    {
                        productList.map(product => <div key={product.id} className="bg-gray-100 p-6 rounded-3xl border border-gray-200 shadow-md transition-all hover:scale-105 duration-500">

                            {/* card first icon and btn controller */}
                            <div className='flex justify-between items-center mb-3'>

                                {/* Card Icon */}
                                <div className='w-16 min-h-16 bg-[#fbf8fe] rounded-full border border-gray-200 flex items-center justify-center'>
                                    <img
                                        src={product.icon}
                                        alt="Icon"
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>




                                {/* Card Badge Button */}
                                <button className={`badge badge-soft font-bold 
                                    ${product.tagType === 'best' ? 'badge-success' :
                                        product.tagType === 'popular' ? 'badge-warning' :
                                            'badge-info'} `}>{product.tag}</button>
                            </div>




                            {/* Card heading and paragraf*/}
                            <h3 className='text-left font-extrabold text-xl mb-1'>{product.name}</h3>
                            <p className='text-left text-gray-600 font-medium'>{product.description}</p>

                            <div className='flex items-baseline my-4 text-center'>
                                <h2 className='text-left text-2xl font-extrabold'>{`$${product.price}`}</h2>
                                <span className='text-lg text-gray-500 font-medium'>{`/${product.period}`}</span>
                            </div>

                            {/* Card Data */}
                            {
                                product.features.map((feature, index) => <div key={index} className='flex gap-1 items-center'>
                                    <IoMdCheckmark className='text-green-500' />
                                    <p className='text-gray-600 font-medium'>{feature}</p>
                                </div>)
                            }

                            {/* Btn */}
                            <div className='mt-5'>
                                <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full md:hover:scale-105 duration-500 transition-all  ease-in-out " >Buy Now</button>
                            </div>


                        </div>)
                    }

                    {/* Card container */}

                </div>
            </div>
        </div>
    );
};

export default ProductCard;