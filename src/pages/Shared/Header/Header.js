import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <>
           <Navbar sticky="top" bg="light" variant="light" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Faster</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/services">Top Bycicle</Nav.Link>
      <Nav.Link as={HashLink} to="/moreItems">More Item</Nav.Link>
      <Nav.Link as={HashLink}k to="/dashboard">DashBoard</Nav.Link>
      {
        user?.email ? 
        <Button onClick={logOut}>Logout</Button>
        :
        <Nav.Link as={HashLink}k to="/login">Login</Nav.Link>
      }
      <Navbar.Text>
        Login User: <a href="#login">{user.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>  
        </>
    );
};

export default Header;