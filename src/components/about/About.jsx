import React from 'react';
import about from '../../assets/images/welcome/about-us-img.png'
const About = () => {
    return (
        <div className='container mx-auto lg:flex justify-between items-center my-20 px-10 lg:px-0'>
            <div className='mb-4 lg:mb-0'>
                <div className="w-20 h-1 bg-[#291958]"></div>
                <h1 className='mb-4 text-3xl font-semibold pt-3'>Welcome To Business Post</h1>
                <p className='text-sm font-normal leading-loose mb-8 '>Business Post is a one-stop shop for aspiring entrepreneurs. Whether you are looking to buy a business, sell a business,<br /> or acquire a franchise, the Business Post is your Business Opportunities Hub. Get on <br /> board with the best business marketplace portal and find your dream business!</p>
                <button className='px-6 py-2 border me-3 border-[#291958] text-[#291958] text-sm font-semibold hover:bg-[#291958] hover:text-white mb-3 lg:mb-0'>Buy a Business</button>
                <button  className='px-6 py-2 border me-3 border-[#291958] text-[#291958] text-sm font-semibold hover:bg-[#291958] hover:text-white'>Sell a Business</button>
            </div>
            <div className=''>
                <img className='w-full' src={about} alt="" />
            </div>
        </div>
    );
};

export default About;