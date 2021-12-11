import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className='fw-bold ff' style={{fontSize : '2rem'}} href="#home">CRYPTIC<span style={{fontSize : '2.5rem'}} className='text-primary'>FATE</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link as={NavHashLink} to="#service">Services</Nav.Link>
        <Nav.Link as={NavHashLink} to="#about">About Us</Nav.Link>
        <Nav.Link as={NavHashLink} to="#review">Happy Clients</Nav.Link>
        <Nav.Link as={NavHashLink} to="#contact">Contact</Nav.Link>
        <NavDropdown title="Profile" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Log in</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Dashboard</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;