import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FinnTheHuman, GithubLogo, LinkedinLogo } from 'phosphor-react';
import './NavBar.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
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
    <nav expand="md" className={scrolled ? 'apply-bg' : ""}>
      <Container>
        <Navbar.Brand href='/' >
          <FinnTheHuman className='navbar-logo' />
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
            <Nav.Link 
              href="#contact" 
              className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('contact')}>
                Contact
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
    </nav>
  )
}