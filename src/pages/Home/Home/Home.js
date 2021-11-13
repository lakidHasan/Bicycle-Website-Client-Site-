import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallary/Gallery';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="Home">
             <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>

        </div>
    );
};

export default Home;