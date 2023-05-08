import 'animate.css';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();
  return (
      <div>
        <section className="signINbanner" id="home" >
          <Container className=" signInbanner-text">
            <p className="fs-1" >SIGN IN AS</p>
            <span className="d-flex justify-content-center navbar-text">
                <button onClick={() => navigate("/admin")} className="fs-5  vvd"><span>Admin</span></button>
                <button onClick={() => navigate("/student")} className="fs-5  vvd"><span>Student</span></button>
            </span>
          </Container>
        </section>
      </div>
  )
}
