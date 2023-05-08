import { Navbar, Container } from "react-bootstrap";
import logo from '../assets/img/Oytie.png';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  return (
    <Router>
      <Navbar  variant="dark" expand="md" >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Router>
  )
}
