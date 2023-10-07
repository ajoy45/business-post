import React from 'react';
import './banner.css'
import Video from './Video';
const Banner = () => {
    return (
        <div className=' relative'>
            <Video></Video>
            <div className='lg:flex lg:flex-col  justify-center items-center absolute top-0 h-full w-full'>
                <h1 className='text-4xl text-center text-heading  text-white lg:mt-5 lg:mb-5 '>Find Business Opportunities for Sale</h1>
                <div className='flex select-bg lg:bg-gray-400 lg:bg-opacity-50 rounded-full lg:px-12 lg:py-12 relative '>
                    <div className='lg:mr-4 w-4/12 select-item'>
                        <select className='px-4 py-2 '>
                            <option value="Opportunity Type">Opportunity Type</option>
                            <option value="Business For Sale">Business For Sale</option>
                        </select>
                    </div>
                    <div className='lg:mr-4 w-4/12 select-item'>
                        <select className='px-4 py-2'>
                            <option value="Opportunity Type">Opportunity Type</option>
                            <option value="Business For Sale">Business For Sale</option>
                        </select>
                    </div>
                    <div className='lg:mr-4 w-4/12 select-item'>
                        <select className='px-4 py-2'>
                            <option value="Opportunity Type">Opportunity Type</option>
                            <option value="Business For Sale">Business For Sale</option>
                        </select>
                    </div>
                    <div className='w-9/12 mx-auto text-center  lg:px-12 lg:py-2 search-btn bg-[#291958] text-white '>
                        <button className='py-3 lg:p-0 text-xl '>SEARCH</button>
                    </div>
                    
                    <h1 className='absolute bottom-2 advance-search right-12 text-white hover:text-[#0dcaf0] cursor-pointer'>Advance Search</h1>
                </div>
                
            </div>

        </div>

    );
};

export default Banner;