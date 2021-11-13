import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallary/Gallery';
import Services from '../Services/Services';
import UserReviews from '../UserReviews/UserReviews';

const Home = () => {
    return (
        <div id="Home">
             <Banner></Banner>
            <Services></Services>
            <UserReviews></UserReviews>
            <Gallery></Gallery>
            <About></About>

        </div>
    );
};

export default Home;