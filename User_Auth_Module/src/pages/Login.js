import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  fbSignInInitiate,
  googleSignInInitiate,
  loginInitiate,
} from "../redux/actions";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import "./Login.css"

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  };
  const handleFBSignIn = () => {
    dispatch(fbSignInInitiate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div class='loginModal' id="logreg-forms">
      <form className="form-signup" onSubmit={handleSubmit}>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your details to register!</p>

                  <MDBInput type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    required
                    size="lg"
                  />
                  <br />

                  <MDBInput type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    required
                    size="lg"
                  />
                  <br />
                  <p>OR</p>


                  <div className="social-login">
                    <MDBBtn color='danger' size='md' onSubmit={handleGoogleSignIn}>
                      <span>
                        <i className="fab fa-google-plus-g"></i> Sign in with Google
                      </span>
                    </MDBBtn>
                  </div>
                  <br />
                  <br />

                  <MDBBtn outline color='light' size='lg' onSubmit={handleSubmit}>
                    Login
                  </MDBBtn>
                  <br />
                  <div>
                    <p className="mb-0">Don't have an account? <Link to={"/register"} class="text-white-50 fw-bold">Register</Link></p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Login;
