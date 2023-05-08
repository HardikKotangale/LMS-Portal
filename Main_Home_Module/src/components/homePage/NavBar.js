import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/img/Oytie.png";
import { Link } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
       
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar  variant="dark" expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className={activeLink === 'aboutUs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutUs')}>About Us</Nav.Link> 
              <Nav.Link as={Link} to="/lmsPortal" className={activeLink === 'lmsPortal' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('lmsPortal')} >LMS Portal</Nav.Link>
              <Nav.Link as={Link} to="/jobportal" className={activeLink === 'jobPortal' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('jobPortal')}>Job Portal</Nav.Link>
              <Nav.Link as={Link} to="/services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to='#connect'>
                <button className="fs-5  vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

//