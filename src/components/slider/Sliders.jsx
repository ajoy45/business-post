import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/images/slider/result-page-img.jpg'
const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000, // Adjust the autoplay interval as needed
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <img  src={slider1} alt="" />
                
            </div>
            <div>
                <img  src={slider1} alt="" />
                
            </div>
            <div>
                <img  src={slider1} alt="" />
                
            </div>
        </Slider>

    );
};

export default Sliders;