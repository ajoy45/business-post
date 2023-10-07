import React from 'react';
import '../carousel/Carousel.css'
import business from '../../assets/images/slider/business-sale-feature-img-1.jpg';
const Card = () => {
    return (
        <div>
            <div className=" w-full bg-white relative mr-4 shadow-xl">
                <figure><img src={business} alt="business" /></figure>
                <div className="">
                    <h2 className="bg-[#d4ccdd] text-center py-2">dDeccan light - Estb in 2016</h2>
                    <h1 className='text-xl font-semibold my-4 ms-3'>Business Sales</h1>
                    <p className='text-sm ms-3 text-[#3e3e3e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eaque, quis aspernatur libero distinctio eos quidem dolorum maiores! Doloremque, earum.</p>
                    <div className="flex justify-between ms-3 py-3">
                        <button className="bg-[#291958] text-white px-3 py-2 mt-3">View Profile</button>
                        <button className="bg-[#291958] text-white px-3 py-2 mt-3 me-3">View Profile</button>
                    </div>

                </div>
                <div className='ribbon text-white '>
                    <p className='font-medium text-sm rotted'>NSW</p>
                </div>
            </div>
        </div>
    );
};

export default Card;