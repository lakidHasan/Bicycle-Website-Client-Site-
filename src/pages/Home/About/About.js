import React from 'react';
import mainBuilding from '../../../Images/MainBuilding/file.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container>
          <h2>ABOUT US</h2>
  <Row className='about'>
    <Col className="details">
        
        <p>With so many different types of bikes and brands available nowadays, all the information can be overwhelming, leaving you feeling confused and unsure where to start. Whether you want to buy a road, mountain, or hybrid bike, we’ve created a list of the best bike brands so you can shop for your new bike with confidence.

</p>
    </Col>
    <img src={mainBuilding} alt="" />
  </Row>
</Container>
    );
};

export default About;