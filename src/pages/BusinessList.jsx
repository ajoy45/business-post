import React from 'react';
import img1 from '../assets/images/business/baner.jpg'
import Sliders from '../components/slider/Sliders';
import Pagination from '../components/pagination/Pagination';
import PageHeader from '../components/pageHeader/PageHeader';

const BusinessList = () => {
    return (
        <>
            {/* header section */}
            <PageHeader title='Business Listings' subHeading='Home'></PageHeader>
            {/* slider section */}
            <section className='container mx-auto'>
                <div className='lg:flex justify-between'>

                    <div>
                        <div className=''>
                            <div className=' pt-4'>
                                <select className="select select-bordered w-full max-w-xs me-6 mb-5 lg:mb-0 ">
                                    <option>Price Low to High</option>
                                    <option>Price High to Low</option>
                                    <option>Listing Date</option>
                                </select>

                                <select className="select select-bordered w-full max-w-xs">

                                    <option >Please Select industry</option>
                                    <option value="Agriculture/Primary">Agriculture/Primary</option>
                                    <option value="Business For Sale">Engineering</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Hospitality">Hospitality</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Service">Service</option>
                                    <option value="Transport">Transport/Distribution</option>
                                </select>

                            </div>

                            <div className='border-dotted border-2 border-[#b8b6b6] w-4/5 my-6'>
                                <div className='flex justify-between  bg-[#4f287b] py-5 px-3 text-white w-full'>
                                    <h1>Outdor Italian Desk - 100% Wood material</h1>
                                    <p>saved <i class="fa-regular fa-star"></i></p>
                                </div>
                                <div>
                                    <div className='lg:flex justify-start  items-center gap-10 p-6'>
                                        <div className='lg:w-96 odd:'>

                                            <Sliders></Sliders>
                                        </div>
                                        <div className=''>
                                            <div className='flex justify-between'>
                                                <h1 className='font-bold'>BUSINESS CONTENT</h1>
                                                <p className='font-bold'>$1,849</p>
                                            </div>
                                            <div>
                                                <div className="divider"></div>
                                                <p>Traditional Country Style 8 Drawer Coffee Table Good Condition. Just dont have the room for it at Ormeau Call Peter, so this product really best for you Garden Dining Sets, Garden Sofa Sets, Garden Corner Sofas</p>
                                                <div className="divider"></div>
                                                <div className='flex justify-end'>
                                                    <button className='bg-[#5cb85c] me-3 text-white px-3 py-3'>Contact
                                                        Seller</button>
                                                    <button className=' me-3 bg-[#4f287b] px-3 py-3 text-white'>View Biz Profile</button>
                                                    <button className='bg-[#2457cf] px-3 py-3 text-white'>Submit Offer</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-dotted border-2 border-[#b8b6b6] w-4/5 my-6'>
                                <div className='flex justify-between  bg-[#4f287b] py-5 px-3 text-white w-full'>
                                    <h1>Outdor Italian Desk - 100% Wood material</h1>
                                    <p>saved <i class="fa-regular fa-star"></i></p>
                                </div>
                                <div>
                                    <div className='lg:flex justify-start  items-center gap-10 p-6'>
                                        <div className='lg:w-96 odd:'>

                                            <Sliders></Sliders>
                                        </div>
                                        <div className=''>
                                            <div className='flex justify-between'>
                                                <h1 className='font-bold'>BUSINESS CONTENT</h1>
                                                <p className='font-bold'>$1,849</p>
                                            </div>
                                            <div>
                                                <div className="divider"></div>
                                                <p>Traditional Country Style 8 Drawer Coffee Table Good Condition. Just dont have the room for it at Ormeau Call Peter, so this product really best for you Garden Dining Sets, Garden Sofa Sets, Garden Corner Sofas</p>
                                                <div className="divider"></div>
                                                <div className='flex justify-end'>
                                                    <button className='bg-[#5cb85c] me-3 text-white px-3 py-3'>Contact
                                                        Seller</button>
                                                    <button className=' me-3 bg-[#4f287b] px-3 py-3 text-white'>View Biz Profile</button>
                                                    <button className='bg-[#2457cf] px-3 py-3 text-white'>Submit Offer</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-dotted border-2 border-[#b8b6b6] w-4/5 my-6'>
                                <div className='flex justify-between  bg-[#4f287b] py-5 px-3 text-white w-full'>
                                    <h1>Outdor Italian Desk - 100% Wood material</h1>
                                    <p>saved <i class="fa-regular fa-star"></i></p>
                                </div>
                                <div>
                                    <div className='lg:flex justify-start  items-center gap-10 p-6'>
                                        <div className='lg:w-96 '>

                                            <Sliders></Sliders>
                                        </div>
                                        <div className=''>
                                            <div className='flex justify-between'>
                                                <h1 className='font-bold'>BUSINESS CONTENT</h1>
                                                <p className='font-bold'>$1,849</p>
                                            </div>
                                            <div>
                                                <div className="divider"></div>
                                                <p>Traditional Country Style 8 Drawer Coffee Table Good Condition. Just dont have the room for it at Ormeau Call Peter, so this product really best for you Garden Dining Sets, Garden Sofa Sets, Garden Corner Sofas</p>
                                                <div className="divider"></div>
                                                <div className='flex justify-end'>
                                                    <button className='bg-[#5cb85c] me-3 text-white px-3 py-3'>Contact
                                                        Seller</button>
                                                    <button className=' me-3 bg-[#4f287b] px-3 py-3 text-white'>View Biz Profile</button>
                                                    <button className='bg-[#2457cf] px-3 py-3 text-white'>Submit Offer</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-dotted border-2 border-[#b8b6b6] w-4/5 my-6'>
                                <div className='flex justify-between  bg-[#4f287b] py-5 px-3 text-white w-full'>
                                    <h1>Outdor Italian Desk - 100% Wood material</h1>
                                    <p>saved <i class="fa-regular fa-star"></i></p>
                                </div>
                                <div>
                                    <div className='lg:flex justify-start  items-center gap-10 p-6'>
                                        <div className='lg:w-96 '>

                                            <Sliders></Sliders>
                                        </div>
                                        <div className=''>
                                            <div className='flex justify-between'>
                                                <h1 className='font-bold'>BUSINESS CONTENT</h1>
                                                <p className='font-bold'>$1,849</p>
                                            </div>
                                            <div>
                                                <div className="divider"></div>
                                                <p>Traditional Country Style 8 Drawer Coffee Table Good Condition. Just dont have the room for it at Ormeau Call Peter, so this product really best for you Garden Dining Sets, Garden Sofa Sets, Garden Corner Sofas</p>
                                                <div className="divider"></div>
                                                <div className='flex justify-end'>
                                                    <button className='bg-[#5cb85c] me-3 text-white px-3 py-3'>Contact
                                                        Seller</button>
                                                    <button className=' me-3 bg-[#4f287b] px-3 py-3 text-white'>View Biz Profile</button>
                                                    <button className='bg-[#2457cf] px-3 py-3 text-white'>Submit Offer</button>
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

                    <div className=' w-96 mt-12  mb-6 '>
                        <div className='bg-[#774e88] px-3 py-6'>
                            <h1 className='text-xl mb-4 text-white'>Refine Search</h1>
                            <div className=''>
                                <input type="text" placeholder="Keyword" className="input input-bordered w-full max-w-xs mb-4" />
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
                                    <option selected>Select Business Type</option>
                                    <option>Business for Sale</option>
                                    <option>Business Opportunities</option>
                                    <option>Franchise Opportunities</option>
                                    <option>Innovation Opportunities</option>
                                    <option>Internet opportunities</option>
                                    <option>License opportunities</option>

                                </select>
                                <select className="select select-bordered w-full max-w-xs mb-4">
                                    <option selected>Select Business Premises </option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs mb-4">
                                    <option selected>Select Category</option>
                                    <option>Building Industry</option>
                                    <option>Delivery Runs / Distribution</option>
                                    <option>Ice Cream Store</option>
                                    <option>School Bus Service</option>
                                    <option>Tree Services</option>

                                </select>
                                <select className="select select-bordered w-full max-w-xs mb-4">
                                    <option selected>Select Country</option>
                                    <option>Country-1</option>
                                    <option>Country-2</option>
                                    <option>Country-3</option>
                                    <option>Country-4</option>

                                </select>
                                <select className="select select-bordered w-full max-w-xs mb-4">
                                    <option selected>Select City/Town</option>
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
                                    <option selected>Select Region</option>
                                </select>
                            </div>
                            <h1 className='text-xl mb-4 text-white'>Prince Range</h1>
                            <div className='flex justify-between mb-5'>
                                <div className=" w-full max-w-xs flex">
                                    <label className="label">
                                        <span className="label-text">Min$</span>
                                    </label>
                                    <input type="text" placeholder="2500" className="input input-bordered w-full max-w-xs" />

                                </div>
                                <div className=" w-full max-w-xs flex me-2">
                                    <label className="label">
                                        <span className="label-text">Max$</span>
                                    </label>

                                    <input type="text" placeholder="7500" className="input input-bordered w-full max-w-xs" />

                                </div>

                            </div>
                            <div className='flex '>
                                <input
                                    type="range"
                                    class="transparent h-[4px] w-full cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-[#5cb85c]"
                                    min="0"
                                    max="10000"
                                    value='2500'
                                    id="customRange2" />
                                <input
                                    type="range"
                                    class="transparent h-[4px] w-full cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-[#5cb85c]"
                                    min="0"
                                    max="10000"
                                    value='7500'
                                    id="customRange2" />

                            </div>
                            <div className='text-center mt-4 w-full bg-[#1f3f81] py-3'>
                                <button className='text-white'>Search Now</button>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <img src={img1} alt="" />
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default BusinessList;