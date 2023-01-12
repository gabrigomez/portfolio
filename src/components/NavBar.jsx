import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/coding.png';
import './NavBar.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.screenY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      };
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href='/' >
          <img src={logo} alt="Logo" className='navbar-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link 
            href="#home" 
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('home')}>
              Home
          </Nav.Link>
          <Nav.Link 
            href="#skills" 
            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('skills')}>
              Skills
          </Nav.Link>
          <Nav.Link 
            href="#Projects" 
            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('projects')}>
              Projects
          </Nav.Link>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#">Link1</a>
              <a href="#">Link2</a>
              <a href="#">Link3</a>
            </div>
          </span>
        </Navbar.Collapse>        
      </Container>
    </Navbar>
  )
}