import React, { useState } from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import Register from '../components/register/Register';
import Login from '../components/login/Login';


const BusinessSells = () => {
    const [activeButton, setActiveButton] = useState(1);

    const handelLogin = () => {
        setActiveButton(1);
    };

    const handelRegister = () => {
        setActiveButton(2);
    };

    return (
        <>
            <PageHeader title='My Business' subHeading='Home' ></PageHeader>
            <section className='container mx-auto px-12 lg:px-0'>
                <div className='py-5'>
                    <div className="w-20 h-1 bg-[#291958]"></div>
                    <h1 className='mb-4 text-3xl font-semibold pt-3'>WELCOME, <span className='text-[#774e88]'>LOGIN / REGISTER</span> </h1>
                </div>
                <div className='lg:flex justify-between gap-6'>
                    <div className='w-1/2 '>
                        {/* button section */}
                        <div className=''>

                            <button style={{
                                backgroundColor: activeButton === 1 ? "white" : "#774e88",
                            }}
                                onClick={handelLogin} id='login'
                                type="button"
                                className={`inline mb-5    px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal w-1/2 border-2 border-[#774e88] ${activeButton === 1 ? 'text-[#774e88]' : 'text-white'}`}>
                                Login
                            </button>
                            <button style={{
                                backgroundColor: activeButton === 2 ? "white" : "#774e88",
                            }}
                                onClick={handelRegister} id='register'
                                type="button"
                                className={`inline  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal w-1/2  border-2 border-[#774e88] ${activeButton === 2 ? 'text-[#774e88]' : 'text-white'}`}>
                                Register
                            </button>
                            {activeButton === 1 && <Login></Login>}
                            {activeButton === 2 && <Register></Register>}
                        </div>

                    </div>
                    <div className='w-1/2 '>
                    <iframe className='w-full h-96' src="https://www.youtube.com/embed/zLCcLmm-0_U" title="Business Market HUB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BusinessSells;