import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return <>
        <Navbar  className="Header" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Student Registeration</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                 
                </Nav>
            </Container>
        </Navbar>
    </>
}
export default Header;


