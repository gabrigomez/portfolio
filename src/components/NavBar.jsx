import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/coding.png';
import './NavBar.css';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';

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
      <Container className='navbar-container'>
        <Navbar.Brand href='/' >
          <img src={logo} alt="Logo" className='navbar-logo' />
        </Navbar.Brand>        
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='navbar-sections'>
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
              href="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('projects')}>
                Projects
            </Nav.Link>
          </div>
          <div className='navbar-social-icons'>
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/gabrielgomes93/"> <LinkedinLogo className='icon'/> </a>
              <a href="https://github.com/gabrigomez"> <GithubLogo className='icon'/> </a>
            </div>
          </div>
        </Navbar.Collapse>        
      </Container>
    </Navbar>
  )
}