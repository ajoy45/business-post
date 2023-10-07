import React from 'react';
import Carousel from '../carousel/Carousel';

const Feature = () => {
    return (
        <div className='bg-[#e9e9e9] py-6'>
            <div className='container mx-auto'>
                <div className=''>
                    <div className="w-20 h-1 mb-6  bg-[#291958]"></div>
                    <h1 className='text-xl font-semibold mb-2'>Featured <span className='text-[#774e88]'>Business Sales</span></h1>
                    <div className="w-full h-[1px] bg-[#ccc]"></div>
                    <Carousel></Carousel>
                </div>
                <div>
                    <div className="w-20 h-1 mb-6  bg-[#291958]"></div>
                    <h1 className='text-xl font-semibold mb-2'>Featured <span className='text-[#774e88]'>Franchise Sales</span></h1>
                    <div className="w-full h-[1px] bg-[#ccc]"></div>
                    <Carousel></Carousel>
                </div>

            </div>
        </div>
    );
};

export default Feature;