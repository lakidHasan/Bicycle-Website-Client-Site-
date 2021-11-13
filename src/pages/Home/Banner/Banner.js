import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../Images/Banner/Banner (1).jpg';
import slide2 from '../../../Images/Banner/Banner (2).jpg';
import slide3 from '../../../Images/Banner/Banner (3).jpg';

const Banner = () => {
    return (
        <>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Life is like riding a bicycle</h3>
      <p>To keep your balance, you must keep moving.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Life is like riding a bicycle</h3>
      <p>To keep your balance, you must keep moving.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Life is like riding a bicycle</h3>
      <p>To keep your balance, you must keep moving.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;