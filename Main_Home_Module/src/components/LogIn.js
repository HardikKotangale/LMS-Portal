import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import logo from './assets/img/Oytie.png';


export default function LogIn() {
  const navigate = useNavigate();
  return (
    <div>

      {/* NavBar Section */}
      <div>
        <Navbar variant="dark" expand="md" >
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>

      {/* Banner Section */}
      <div>
        <section className="signINbanner" id="home" >
          <Container className=" signInbanner-text">
            <p className="fs-1" >SIGN IN AS</p>
            <span className="d-flex justify-content-center navbar-text">
              <button onClick={() => navigate("/logIn")} className="fs-5  vvd"><span>Admin</span></button>
              <button onClick={() => navigate("/logIn")} className="fs-5  vvd"><span>Student</span></button>
            </span>
          </Container>
        </section>
      </div>

    </div>
  );
}

