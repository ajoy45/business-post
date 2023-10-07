import React from 'react';
import '../shared/footer.css';
import facebook from '../assets/images/footer/facebook.png'
const Footer = () => {
    return (
        <footer>
            <section >
                <div className=''>
                    <div className='wrap'>
                        <div className='first flex justify-evenly items-center '>
                            <h1 className='px-10 lg:px-0 text-2xl text-white'>Do Business Where Business Is Done</h1>
                        </div>

                        <div className='second  flex justify-evenly items-center px-10 lg:px-0'>
                            <button className='bg-[#774e88] py-2 px-4 text-white text-xl mt-32  '> Sell Your Business </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#291958] py-6 px-10 lg:px-0'>
                <div className='container mx-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2'>
                    <div className='text-white'>
                        <h4 className='text-sm font-semibold mb-4 underline  decoration-[#83c3f0] decoration-1 underline-offset-[10px]'>Company</h4>

                        <li className='list-none text-sm font-normal my-4'><a href="">About Us</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Gallery</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Contact Us</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Terms of Services</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Privacy Policy</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Site Map</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">FAQ</a></li>

                    </div>
                    <div className='text-white'>
                        <h4 className='text-sm font-semibold mb-4 underline  decoration-[#83c3f0] decoration-1 underline-offset-[10px]'>Business Search</h4>

                        <li className='list-none text-sm font-normal my-4'><a href="">Business Opportunities</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Franchise Opportunities</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Partnership Opportunities</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Innovation Opportunities</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Internet Opportunities</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Migration Opportunities</a></li>

                    </div>
                    <div className='text-white'>
                        <h4 className='text-sm font-semibold mb-4 underline  decoration-[#83c3f0] decoration-1 underline-offset-[10px]'>Advertise </h4>

                        <li className='list-none text-sm font-normal my-4'><a href="">Advertise for Free</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Business Sales</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Franchise Sales </a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Partnership Sales</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Innovation Sales</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Websites Sales</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Business Migration</a></li>

                    </div>
                    <div className='text-white'>
                        <h4 className='text-sm font-semibold mb-4 underline  decoration-[#83c3f0] decoration-1 underline-offset-[10px]'>Marketplace</h4>

                        <li className='list-none text-sm font-normal my-4'><a href="">Business Market</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Business National</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">BInvest</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Immigration Post</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Franchise Post</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Biz search</a></li>

                    </div>
                    <div className='text-white'>
                        <h4 className='text-md font-semibold mb-d underline  decoration-[#83c3f0] decoration-1 underline-offset-[10px]'>Entrepreneur Center</h4>

                        <li className='list-none text-sm font-normal my-4'><a href="">Business Valuation</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Business Finance</a></li>
                        <li className='list-none list-none text-sm font-normal my-4'><a href="">Business Blog Posts</a></li>


                    </div>
                    <div className='text-white'>
                        <h4 className='text-md font-semibold mb-4 underline  decoration-[#83c3f0] decoration-1 underline-offset-[10px]'>Stay Connected</h4>
                        <li className='list-none text-sm font-normal my-4 flex'><a href=""><i className="fab fa-facebook "></i> Facebook</a></li>
                        <li className='list-none  text-sm font-normal my-4'><a href=""><i className="fab fa-linkedin me-1"></i>Linkedin</a></li>
                        <li className='list-none  text-sm font-normal my-4'><a href=""><i className="fab fa-instagram me-1"></i>Instagram</a></li>
                        <li className='list-none  text-sm font-normal my-4'><a href=""><i className="fab fa-pinterest-square me-1"></i>Pinterest</a></li>
                        <li className='list-none  text-sm font-normal my-4 '><a href=""><i className="fab fa-youtube me-1"></i>Youtube</a></li>

                    </div>

                </div>
                <div className="mb-3 justify-center flex my-12">
                    <div className="relative mb-4  flex  flex-wrap ">
                        <input
                            type="search"
                            className="w-96 p-2"
                            placeholder="Email-Address"
                            aria-label="Search"
                            aria-describedby="button-addon3" />
                            
                       
                        <button
                            className="py-4 px-8 text-white bg-[#774e88]"
                            type="button"
                            id="button-addon3"
                            data-te-ripple-init>
                            Submit
                        </button>
                    </div>
                </div>
                <p className='text-center text-white mb-11'>@ Business Media Group 2022</p>
            </section>

        </footer>
    );
};

export default Footer;