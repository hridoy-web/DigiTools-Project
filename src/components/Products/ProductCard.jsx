import React from 'react';

import { use } from 'react';
import Card from './Card';

const ProductCard = ({ productPromise, addToCartHandle }) => {

    const productList = use(productPromise)

    console.log(productList)

    return (
        <div className='w-full h-auto bg-white mb-10 md:mb-14'>

            <div className='w-11/12 mx-auto justify-center items-center'>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                    {
                        productList.map(product => <Card key={product.id} product={product} addToCartHandle={addToCartHandle}  ></Card> )
                    }

                </div>
            </div>
        </div>
    );
};

export default ProductCard;