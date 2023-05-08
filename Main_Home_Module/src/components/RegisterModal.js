import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from './firebase' 

const auth = getAuth(app);

const RegisterModal = () => {
    const navigate = useNavigate();
    const initialValues = { firstName: "", lastName: "", email: "test@gmail.com", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const addData = (e) => {
        //e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        createUserWithEmailAndPassword(auth, formValues.email, formValues.password).then(value => alert(value));
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regexe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexp = RegExp(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        if (!values.firstName) {
            errors.firstName = "First name is required!";
        }
        if (!values.lastName) {
            errors.lastName = "Last name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regexe.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "password Required"
        }
        else if (!regexp.test(values.password)) {
            errors.password = "Password must contain at least 5 characters, 1 number, 1 upper and 1 lowercase!";
        }
        return errors;
    }

    return (
        <div id='loginModal'>
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                                <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                <p className="text-white-50 mb-5">Please enter your details to register!</p>

                                <MDBInput onChange={handleChange} labelClass='text-white' label='First Name' id='formControlLg' type='text' size="lg" />
                                <p style={{ color: "red", fontSize: '10px' }}>{formErrors.firstName}</p>

                                <MDBInput onChange={handleChange} labelClass='text-white' label='Last Name' id='formControlLg' type='text' size="lg" />
                                <p style={{ color: "red", fontSize: '10px' }}>{formErrors.lastName}</p>

                                <MDBInput onChange={handleChange} labelClass='text-white' label='Email Address' id='formControlLg' type='email' size="lg" />
                                <p style={{ color: "white", fontSize: '10px' }}>{formErrors.email}</p>

                                <MDBInput onChange={handleChange} labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />
                                <p style={{ color: "red", fontSize: '10px' }}>{formErrors.password}</p>

                                <br />
                                <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={() => {
                                    addData();
                                    navigate("/logIn");
                                    }
                                }> Register
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default RegisterModal



























{/* <br />
                                <p className="mb-0">Or regiter with </p>
                                <div className='d-flex flex-row mt-3 mb-5'>
                                    <MDBBtn tag='a' color='white' className='m-3' style={{ color: 'white' }}>
                                        <MDBIcon fab icon='facebook-f' size="lg" />
                                    </MDBBtn>
                                    <MDBBtn tag='a' color='white' className='m-3' style={{ color: 'white' }}>
                                        <MDBIcon fab icon='twitter' size="lg" />
                                    </MDBBtn>
                                    <MDBBtn tag='a' color='white' className='m-3' style={{ color: 'white' }}>
                                        <MDBIcon fab icon='google' size="lg" />
                                    </MDBBtn>
                                </div> */}