import React from 'react';
import './carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import Card from '../card/Card';

const Carousel = () => {
    
    return (
        <div className='my-12 px-10 lg:px-0'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                spaceBetween={5}
                slidesPerView={4}
                autoplay={true}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
               
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card></Card>
                </SwiperSlide>
            </Swiper>

            {/* <div className="carousel w-full">
                <div id="item1" className="carousel-item flex">
                    <div className=" w-96 bg-white relative mr-2 shadow-xl">
                        <figure><img src={business} alt="business" /></figure>
                        <div className="">
                            <h2 className="bg-[#d4ccdd] text-center py-2">dDeccan light - Estb in 2016</h2>
                            <h1 className='text-xl font-semibold my-4 ms-3'>Business Sales</h1>
                            <p className='text-sm ms-3 text-[#3e3e3e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eaque, quis aspernatur libero distinctio eos quidem dolorum maiores! Doloremque, earum.</p>
                            <div className="flex justify-between ms-3">
                                <button className="bg-[#291958] text-white px-3 py-2 mt-3">View Profile</button>
                                <button className="bg-[#291958] text-white px-3 py-2 mt-3 me-3">View Profile</button>
                            </div>
                            
                        </div>
                        <div className='ribbon text-white '>
                            <span className='flex justify-center items-center h-full text-3xl'>NEW</span>
                        </div>
                    </div>
                    
                    
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="">
                    <div className="w-6 h-1 bg-[#291958]"></div>
                </a>
                <a href="#item2" className="">
                    <div className="w-6 h-1 bg-[#291958]"></div>
                </a>

            </div> */}
        </div>
    );
};

export default Carousel;