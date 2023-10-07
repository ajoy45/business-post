import React from 'react';
import Banner from '../components/Banner';
import About from '../components/about/About';
import Feature from '../components/feature/Feature';
import Details from '../components/details/Details';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Feature></Feature>
            <Details></Details>
        </div>
    );
};

export default Home;