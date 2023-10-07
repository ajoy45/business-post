import React from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import sidebarImage from'../assets/images/business/300x250.png'
import broker from '../assets/images/business/broker-img.jpg'
import Pagination from '../components/pagination/Pagination';
const BrokersDirector = () => {
    return (
        <>
            <PageHeader title='Business Directory' subHeading='Home' ></PageHeader>
            <section className='container mx-auto'>
                <div className='lg:flex justify-between'>

                    <div className='w-full'>
                        <div className=''>
                            <div className=' pt-8'>


                                <div className="w-20 h-1 bg-[#291958]"></div>
                                <h1 className='mb-4 text-3xl font-semibold pt-3'>Business Directory</h1>

                            </div>

                            <div className='border-dotted border border-[#b8b6b6] w-4/5 mb-6 bg-[#f8f8f8]'>

                                <div>
                                    <div className='lg:flex justify-start  items-center gap-10 p-6'>
                                        <div className=' lg:w-3/4 '>

                                            <img src={broker} alt="" />
                                        </div>
                                        <div
                                            className=" h-[300px] min-h-[1em] w-0.5 self-stretch bg-[#ccc] opacity-100 dark:opacity-50 hidden lg:block"></div>
                                        <div className='w-full '>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <h1 className='font-bold'>House Trusted</h1>
                                                    <p>Phone:0755843</p>
                                                    <p>Mobile:9884635722</p>
                                                    <p>Email:business@gmail.com</p>
                                                    <p>Skype:genius.business</p>
                                                </div>
                                                <div>
                                                    <h1 className='font-bold'>Address</h1>
                                                    <p><span className='font-bold'>House Trusted</span> Level 10, <br /> George Street Under this: <br /> Brisbane QLD 4000</p>
                                                </div>
                                            </div>
                                            <div>

                                                <div className="divider"></div>
                                                <div className='flex justify-start'>
                                                    <button className='bg-[#774e88] me-3 text-white px-3 py-3'>View Profile</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-dotted border border-[#b8b6b6] w-4/5 mb-6 bg-[#f8f8f8]'>

                                <div>
                                    <div className='lg:flex justify-start  items-center gap-10 p-6'>
                                        <div className=' lg:w-3/4 '>

                                            <img src={broker} alt="" />
                                        </div>
                                        <div
                                            className="hidden lg:block h-[300px] min-h-[1em] w-0.5 self-stretch bg-[#ccc] opacity-100 dark:opacity-50"></div>
                                        <div className='w-full '>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <h1 className='font-bold'>House Trusted</h1>
                                                    <p>Phone:0755843</p>
                                                    <p>Mobile:9884635722</p>
                                                    <p>Email:business@gmail.com</p>
                                                    <p>Skype:genius.business</p>
                                                </div>
                                                <div>
                                                    <h1 className='font-bold'>Address</h1>
                                                    <p><span className='font-bold'>House Trusted</span> Level 10, <br /> George Street Under this: <br /> Brisbane QLD 4000</p>
                                                </div>
                                            </div>
                                            <div>

                                                <div className="divider"></div>
                                                <div className='flex justify-start'>
                                                    <button className='bg-[#774e88] me-3 text-white px-3 py-3'>View Profile</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-dotted border border-[#b8b6b6] w-4/5 mb-6 bg-[#f8f8f8]'>

                                <div>
                                    <div className='lg:flex justify-start  items-center gap-10 p-6'>
                                        <div className=' lg:w-3/4 '>

                                            <img src={broker} alt="" />
                                        </div>
                                        <div
                                            className="hidden lg:block h-[300px] min-h-[1em] w-0.5 self-stretch bg-[#ccc] opacity-100 dark:opacity-50"></div>
                                        <div className='w-full '>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <h1 className='font-bold'>House Trusted</h1>
                                                    <p>Phone:0755843</p>
                                                    <p>Mobile:9884635722</p>
                                                    <p>Email:business@gmail.com</p>
                                                    <p>Skype:genius.business</p>
                                                </div>
                                                <div>
                                                    <h1 className='font-bold'>Address</h1>
                                                    <p><span className='font-bold'>House Trusted</span> Level 10, <br /> George Street Under this: <br /> Brisbane QLD 4000</p>
                                                </div>
                                            </div>
                                            <div>

                                                <div className="divider"></div>
                                                <div className='flex justify-start'>
                                                    <button className='bg-[#774e88] me-3 text-white px-3 py-3'>View Profile</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className='flex justify-center py-6'>
                                <Pagination></Pagination>
                            </div>


                        </div>
                    </div>

                    <div className=' w-80  mt-24  mb-6 '>
                        <div className='bg-[#774e88]  py-6'>
                            <h1 className='text-xl mb-4 px-4 text-white'>Refine Search</h1>
                            <div className='px-4'>
                                
                                <select className="select select-bordered w-full max-w-xs mb-4">
                                    <option selected>Select Industry</option>
                                    <option>Distribution</option>
                                    <option>Engineering</option>
                                    <option>Hospitality</option>
                                    <option>Manufacturing</option>
                                    <option>Retail</option>
                                    <option>Service</option>
                                    <option>Transport</option>
                                </select>
                                
                                <select className="select select-bordered w-full max-w-xs mb-4">
                                    <option selected>Select Country</option>
                                    <option>Australia</option>
                                    

                                </select>
                                <select className="select select-bordered w-full max-w-xs mb-4">
                                    <option selected>Select State</option>
                                    <option>QLD</option>
                                    <option>NSW</option>
                                    <option>VIC</option>
                                    <option>TAS</option>
                                    <option>WA</option>
                                    <option>NT</option>
                                    <option>ACT</option>
                                    <option>SA</option>

                                </select>

                                <select className="select select-bordered w-full max-w-xs mb-4">
                                    <option selected>Select City</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs mb-4">
                                    <option selected>Select Region</option>
                                    <option>Type1</option>
                                    <option>Type2</option>
                                    <option>Type3</option>
                                </select>
                            </div>
                            
                            
                            
                            <div className='text-center w-72 mx-auto mt-4 px-4 bg-[#1f3f81] py-3 '>
                                <button className='text-white '>Search Now</button>
                            </div>
                        </div>
                        <div className='mt-4 '>
                            <img className='' src={sidebarImage} alt="" />
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default BrokersDirector;