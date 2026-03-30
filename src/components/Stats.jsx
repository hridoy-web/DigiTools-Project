import React from 'react';

const Stats = () => {
    return (
        
        <div className='w-full h-auto py-6 md:h-40 bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-10 flex flex-wrap text-white justify-around items-center text-center overflow-hidden' >

           
            <div className='flex px-5 md:px-16 flex-col gap-1 md:gap-2 border-r border-white/70 transition-all md:hover:scale-105 duration-500'>
                <h2 className='text-2xl md:text-6xl font-bold'>50K+</h2>
                <p className='text-[10px] md:text-xl text-center md:text-left font-medium'>Active Users</p>
            </div>

            <div className='flex flex-col gap-2 transition-all md:hover:scale-105 duration-500'>
                <h2 className='text-2xl md:text-6xl font-bold'>200+</h2>
                <p className='text-[10px] md:text-xl text-center md:text-left font-medium'>Premium Tools</p>
            </div>

            <div className='flex px-5 md:px-16 flex-col gap-2 border-l border-white/70 transition-all md:hover:scale-105 duration-500'>
                <h2 className='text-2xl md:text-6xl font-extrabold'>4.9</h2>
                <p className='text-[10px] md:text-xl text-center font-medium'>Rating</p>
            </div>

        </div>
    );
};

export default Stats;