import React, { useState, useEffect ,useRef } from 'react';
// import { View } from 'react-native';
// import { RadioButton } from 'react-native-paper';
import { NavLink } from 'react-router-dom';
import emailjs, { init } from "@emailjs/browser";

import { useNavigate, useParams } from 'react-router-dom';
import fireDb from '../../firebase.js';
import {app} from '../../firebase.js';
import { toast } from 'react-toastify';
// import "./fromStyles.css"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const initialState = {
    uid :"",
    fname: "",
    mname: "",
    lname: "",
    mobile: "",
    address: "",
    degree: "",
    gender: "",
    email: "",
    password: ""
};



const HomeStudent = () => {
    init("user_lA8yQryRIxPgz4Vao");
    const form = useRef();

const auth = getAuth(app);


    const navigate = useNavigate();
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_yrz86mr",
            "template_qs1d84e",
            form.current,
            "lA8yQryRIxPgz4Vao"
          )
          .then(
            (result) => {
              alert("Message Sent Successfully");
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

    const { uid, fname, mname, lname, mobile, address,
        degree, gender, email, password } = state;

    const { id } = useParams();



    useEffect(() => {
        fireDb.child("user").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
        });

        return () => {
            setData({});
        };
    }, [id]);

    useEffect(() => {
        if (id) {
            setState({ ...data[id] })
        } else {
            setState({ ...initialState })
        }

        return () => {
            setState({ ...initialState })
        }
    }, [id, data])

    // const [email, setEmail] = useState('');
    // const [error, setError] = useState(null);

    // function isValidEmail(email) {
    //   return /\S+@\S+\.\S+/.test(email);
    // }

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        // if (!isValidEmail(e.target.value)) {
        //   setError('Email is invalid');
        // } else {
        //   setError(null);
        // }
        // setData("email",e.target.value);


        setState({ ...state, [name]: value });


    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fname || !mname || !lname || !email || !mobile) {
            toast.error("Please provide value in each input feild")
            console.log("error")
            alert("Please provide value in each input feild")
        }
        else if (mobile.length > 10 || mobile.length < 10) {
            console.log("error")
            alert("Please provide valid 10 digit mobile no.")
        }

        else if (!email.includes("@") || !email.includes(".")) {
            alert("Please provide valid email id")
        }
        else {
            setState({ ...state, [uid]: id });
            // localStorage.setItem("user", JSON.stringify([...data,state]));
            if (!id) {
                fireDb.child("user").push(state, (err) => {
                    if (err) {
                        toast.error(err);
                    }
                    else {
                        toast.success("Added Successfully");
                    }
                });
            } else {
                fireDb.child(`user/${id}`).set(state, (err) => {
                    if (err) {
                        toast.error(err);
                    }
                    else {
                        toast.success("student added successfully");
                    }
                });
            }
            sendEmail(e);
            // setTimeout(() => navigate(`/UserProfile/${id}`), 500);
        }
    };

    const signupUser = () => {
        createUserWithEmailAndPassword(
          auth,
          state.email,
          state.password
        ).then((value) => alert("Success"))
          .catch((err) => alert(err.message))
      };


    return (

        <div className='wrapper'>
            <div className='header'>
                <h1>Admission</h1>
                {/* <p>Add New Student</p> */}
            </div>


            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btnc default " onClick={() => navigate("/")}>Back</button>
                <div />
            </div>
            <div className="main">
                <div className='form-container'>
                {/* onSubmit={sendEmail} */}
                    <form className="form-group"  ref={form}>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="fname">Enter first name:-</label>
                            <input
                                name='fname'
                                className="form-control"
                                type="text"
                                placeholder="first name"
                                id="fname"
                                value={fname}
                                onChange={handleInputChange}

                            />
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="mname">Enter Middle name:-</label>
                            <input
                                name='mname'
                                className="form-control"
                                type="text"
                                placeholder="middle name"
                                id="mname"
                                value={mname}
                                onChange={handleInputChange}

                            />

                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="lname">Enter last name:-</label>
                            <input
                                type="text"
                                id='lname'
                                name='lname'
                                placeholder="last name"
                                value={lname}
                                onChange={handleInputChange}
                                className="form-control"

                            />

                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="address">Enter Address:-</label>
                            <input
                                id="address"
                                name="address"
                                value={address}
                                className="form-control"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Enter Address"
                            />

                            {/* {error && <h2 style={{color:'red'}}></h2>} */}
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="mobile">Enter Mobile no:-</label>
                            <input
                                type="number"
                                id='mobile'
                                name='mobile'
                                placeholder="enter Mobile number"
                                value={mobile}
                                onChange={handleInputChange}
                                className="form-control"
                            />

                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="degree">Enter Degree</label>
                            <input
                                type="text"
                                id='degree'
                                name='degree'
                                placeholder="enter Degree:"
                                value={degree}
                                onChange={handleInputChange}
                                className="form-control"

                            />

                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="gender">Select Gender:</label>
                            <select
                                // type="select"
                                id='gender'
                                name='gender'
                                onChange={handleInputChange}
                                className="form-control"

                            >
                                <option>Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>

                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="email">Enter email:-</label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder="Enter email"
                                value={email}
                                onChange={handleInputChange}
                                className="form-control"

                            />
                            {/* {error && <h2 style={{color:'red'}}></h2>} */}
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="password">Enter password:-</label>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                placeholder="Enter password"
                                value={password}
                                onChange={handleInputChange}
                                className="form-control"

                            />
                            {/* {error && <h2 style={{color:'red'}}></h2>} */}
                        </div>








                        <button className="btnc  default btn-outline-light" type="submit" onClick={handleSubmit} value="save">Sign up
                        <br></br>
                        <span> <a onClick={signupUser}>Done with Registeration click here !!</a></span></button>
                        {/* <button className="btnc default btn-outline-light" type="submit" onClick={() => navigate("/")}>Back</button> */}
                       
                        <p>
                            Already have an Account{" "}
                            <span>
                                <NavLink to="/LoginStudent">SignIn</NavLink>
                            </span>
                        </p>
                    </form>
                </div>

            </div>

        </div >
    );
};

export default HomeStudent;