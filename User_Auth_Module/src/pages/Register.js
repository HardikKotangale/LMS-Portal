import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerInitiate } from "../redux/actions";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
//import "./Register.css";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const { email, password, displayName, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div class='loginModal' id="register-form">
      <form className="form-signup" onSubmit={handleSubmit}>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-white-50 mb-5">Please enter your details to register!</p>

                  <MDBInput type="text"
                    id="displayName"
                    className="form-control"
                    placeholder="Full Name"
                    name="displayName"
                    onChange={handleChange}
                    value={displayName}
                    required
                    size="lg"
                  />
                  <br />


                  <MDBInput type="email"
                    id="user-email"
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

                  <MDBInput type="password"
                    id="passwordConfirm"
                    className="form-control formControlLg"
                    placeholder="Repeat Password"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={passwordConfirm}
                    required
                    size="lg"
                  />
                  <br />
                  <MDBBtn outline color='light' size='lg' onSubmit={handleSubmit}>
                    Register
                  </MDBBtn>
                  <br />
                  <MDBBtn rounded color='warning' style={{width:"100px"}}>
                  <Link to="/login">
                    <i style={{color:"black"}} className="fas fa-angle-left">Back</i> 
                  </Link>
                  </MDBBtn>
                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </div >
  );
};

export default Register;
