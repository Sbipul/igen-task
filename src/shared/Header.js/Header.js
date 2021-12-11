import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {

    return (
        <Navbar className='shadow-lg' expand="lg">
          <Container>
            <Navbar.Brand className='fw-bold ff' style={{fontSize : '2rem'}} href="#home">
              {/* <img style={{height:'60px',width:'180px'}} src="https://www.metal-archives.com/images/1/9/4/1/19414_logo.gif" alt="" /> */}
              CRYPTIC<span style={{fontSize : '2.5rem'}} className='text-primary'>FATE</span>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={NavHashLink} to="#service">Services</Nav.Link>
                <Nav.Link as={NavHashLink} to="#about">About Us</Nav.Link>
                <Nav.Link as={NavHashLink} to="#review">Happy Clients</Nav.Link>
                <Nav.Link as={NavHashLink} to="#contact">Contact</Nav.Link>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/sign">Sign Up</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/log">Log in</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/dash">Dashboard</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default Header;