import React from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import Pricing from '../components/pricing/Pricing';

const Sell = () => {
    return (
        <>
             {/* header section */}
            
            <PageHeader title='Pricing Plans' subHeading='Home'></PageHeader>
            <section className='text-center py-12'>
                <h1 className='text-2xl pb-4'>CHOOSE YOUR PLAN</h1>
                <div className='pb-4'>
                    <button className='bg-[#774e88] me-4 px-4 py-3 text-white'>Monthly</button>
                    <button className='bg-[#073855] px-4 py-3 text-white'>Annually</button>
                </div>
                <p className=''>Save Up to 50% with Annual Subscriptions</p>
            </section>
            <section>
                <Pricing></Pricing>
            </section>
        </>
    );
};

export default Sell;