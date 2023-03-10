import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Oytie.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";
import { Maps } from "./Maps";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Maps />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/oytie-private-limited-931b5b1b8/"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank" href="https://www.facebook.com/Oytie"><img src={navIcon2} alt="Icon" /></a>
              <a target="_blank" href="https://www.instagram.com/oytie_learning/"><img src={navIcon3} alt="Icon" /></a>
              <a target="_blank" href="https://www.youtube.com/channel/UC-u9TPF4IXvJ7uCKxf23pXQ/featured"><img style={{width:"20px"}} src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
