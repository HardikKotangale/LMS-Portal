import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";
import navIcon5 from "../assets/img/nav-icon5.png";
import navIcon6 from "../assets/img/nav-icon6.png";

import { Maps } from "./Maps";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="d-flex justify-content-start">
          <Maps  />
          </Col>
          <Col>
          <div className="d-flex flex-column text-center text-sm-start " >
            <p>Contacts</p>
            <a target="_blank" href='tel:917030200057'><img className="text-white zoom me-1" style={{width:"20px",height:"20px"}} src={navIcon5}/><div className='text-white hover-underline-animation'>+ 91-7030-20-0057</div></a>
            <br/>
            <a target="_blank" href='mailto:enquiry@oytie.com'><img className="zoom me-1" style={{width:"30px",height:"20px"}} src={navIcon6}/><div className='text-white hover-underline-animation'>enquiry@oytie.com</div></a>
            </div>
          </Col>
          <Col className="text-center ">
          <p style={{marginRight:"8rem"}}>Social</p>
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/oytie-private-limited-931b5b1b8/"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank" href="https://www.facebook.com/Oytie"><img src={navIcon2} alt="Icon" /></a>
              <a target="_blank" href="https://www.instagram.com/oytie_learning/"><img src={navIcon3} alt="Icon" /></a>
              <a target="_blank" href="https://www.youtube.com/channel/UC-u9TPF4IXvJ7uCKxf23pXQ/featured"><img style={{width:"20px"}} src={navIcon4} alt="Icon" /></a>
            </div>
            <p style={{marginLeft:"4.1rem"}}>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
