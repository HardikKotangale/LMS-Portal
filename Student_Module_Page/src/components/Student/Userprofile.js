import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './css/studentPortal.css';
import PortalHeader from "./PortalHeader";
import Button from 'react-bootstrap/Button';
import './css/PoratalBody.css';
import { BsFillPencilFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';


import fireDB from '../../firebase.js';


const initialState = {
    uid: '',
    fname: "",
    mname: '',
    lname: "",
    email: "",
    // photo: '',
    dob: '',
    age: '',
    gender: '',
    address: "",
    city: '',
    user_state: '',
    zipcode: '',
    mobno: "",
    parentmob: ''
}


const UserProfile = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
    const { uid, fname, mname, lname, email, dob, age, gender, address, city, user_state, zipcode, mobno, parentmob } = state;
    const { id } = useParams();

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    
const navigate = useNavigate();
useEffect(() => {
    fireDB.child("user").on("value", (snapshot) => {
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




const handleSubmit = (e) => {
    e.preventDefault();
    var uid = document.getElementById('uid').value;
    var fname = document.getElementById('fname').value;
    var mname = document.getElementById('mname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('mobno').value;
    var dob = document.getElementById('dob').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var user_state = document.getElementById('user_state').value;
    var zipcode = document.getElementById('zipcode').value;
    var mobno = document.getElementById('mobno').value;
    var parentmob = document.getElementById('parentmob').value;


    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var emailREX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneResult2 = phoneRGEX.test(parentmob);
    var emailResult = emailREX.test(email);
    if (dob === "") toast.error("Date of Birth field is required", { autoClose: 100000 })
    else if (gender === "") toast.error("Gender field is required", { autoClose: 100000 })
    else if (parentmob === "") toast.error("Parent Mobile Number field is required", { autoClose: 100000 })
    // else if (degree === "") toast.error("Degree field is required",{autoClose:100000})
    else if (email === "") toast.error("Email field is required", { autoClose: 100000 })
    else if (!email.includes("@")) toast.error("Pls enter valid email address", { autoClose: 100000 })
    // else if (pass === "") toast.error("Password field is required",{autoClose:100000})

    else if (phoneResult2 == false) {
        toast.error("Please enter a valid phone number", { autoClose: 5000000 });
        return false;
    }


    else if (emailResult == false) {
        toast.error("Please enter a valid email number", { autoClose: 5000000 });
        return false;
    }
    else {
        if (!id) {
            fireDB.child("user").push(state, (err) => {
                if (err) {
                    toast.error(err);
                }
                else {
                    toast.success("Added Successfully");
                }
            });
        } else {
            fireDB.child(`user/${id}`).set(state, (err) => {
                if (err) {
                    toast.error(err);
                }
                else {
                    toast.success("student updated successfully");
                }
            });
        }
        // sendEmail(e);
        // setTimeout(() => navigate(`/UserProfile/${email}`), 500);
    }

};
return (
    <div>
        <div id="stdBody">
            <div className=''>
                {<PortalHeader />}
            </div>


            {/* //Poratl Body */}
            <div id="PortalBodyMain" className='mx-auto'>
                <div className='NavrBarMain' >
                    <Nav>
                        <Bars />

                        <NavMenu>
                            <NavLink to='/' id='activeNav'>
                                Profile
                            </NavLink>
                            <NavLink to={`/ChangePass/${id}`} >
                                Change Password
                            </NavLink>
                            <NavLink to={`/CoursesStd/${id}`} >
                                Search Courses
                            </NavLink>
                            

                        </NavMenu>
                    </Nav>
                </div>



                {/* Body Container */}

                <div id='PorBody' className='ProfileBody container-xxl mt-4'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <ToastContainer />
                            {/* First row for diaplaying personal information */}
                            <div className='row py-3'>
                                <div className='col-4'>
                                    <h3>Personal Information</h3>
                                    <BsFillPencilFill style={{
                                        color: '#0a1e7d',
                                        float: 'left',
                                        marginLeft: '2vh'
                                    }} size="30px" />
                                </div>

                                <div className='col-8'></div>
                            </div>



                            {/* Second row for diaplaying personal information form*/}
                            <div className='row container-xl mx-auto py-3' id="perInfo">

                                <div className='row container-md mx-auto form-group'>
                                    <div className='col-3'>
                                        <label htmlFor='uid'>Id</label><br />
                                        <input type="text" value={uid || ""} onChange={handleInputChange} disabled className='form-control' name="uid" id="uid" />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='fname'>First Name</label><br />
                                        <input type="text" className='form-control' value={fname || ""} onChange={handleInputChange} name="fname" id="fname" />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='mname'>Middle Name</label><br />
                                        <input type="text" className='form-control' value={mname || ""} onChange={handleInputChange} name="mname" id="mname" />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='lname'>Last Name</label><br />
                                        <input type="text" className='form-control' value={lname || ""} onChange={handleInputChange} name="lname" id="lname" />
                                    </div>
                                </div>
                                <hr id="line" />
                                <div className='row container-md mx-auto form-group'>

                                    <div className='col-3'>
                                        <label htmlFor='email'>Email</label><br />
                                        <input type="email" className='form-control' onChange={handleInputChange} value={email || ""} name='email' id="email" />
                                    </div>
                                    <div className='col-3'>
                                        {/* <label htmlFor="photo">Profile Photo</label><br />
                                        <input type="File" onChange={handleInputChange} value={photo || ""} name="photo" accept="image/png,image/jpeg" id="photo" multiple={false} />
                                    </div> */}
                                    </div>
                                </div>
                                <hr id="line" />
                                <div className='row container-md mx-auto py-3 form-group'>
                                    <div className='col-3'>
                                        <label htmlFor='dob'>Date of Birth</label><br />
                                        <input type="date" className='form-control' onChange={handleInputChange} value={dob || ""} name='dob' id='dob' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='age'>Age</label><br />
                                        <input type="number" min={1} max={100} className='form-control' onChange={handleInputChange} value={age || ""} name='age' id='age' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='gender'>Gender</label><br />
                                        <input type="text" className='form-control' name='gender' id='gender' onChange={handleInputChange} value={gender || ""} accept='Male,Female,male,female' />
                                    </div>
                                </div>
                            </div>



                            {/* third row for Contact Info */}
                            <div className='row py-3 mt-3'>
                                <div className='col-4'>
                                    <h3>Contact Information</h3>
                                    <BsFillPencilFill style={{
                                        color: '#0a1e7d',
                                        float: 'left',
                                        marginLeft: '2vh'
                                    }} size="30px" />
                                </div>
                            </div>


                            {/* //Fourth row forcontact info form */}
                            <div className='row container-xl py-3 mx-auto' id="perInfo">

                                <div className='row container-md mx-auto form-group'>
                                    <div className='col-2'>
                                        <label htmlFor='address'>Address</label><br />
                                        <input type="text" className='form-control' onChange={handleInputChange} value={address || ""} id='address' name="address" />
                                    </div>
                                    <div className='col-2'>
                                        <label htmlFor='city'>City</label><br />
                                        <input type='text' className='form-control' onChange={handleInputChange} value={city || ""} id='city' name='city' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='zipcode'>Zipcode</label><br />
                                        <input type="number" className='form-control' onChange={handleInputChange} value={zipcode || ""} id='zipcode' name='zipcode' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='user_state'>State</label><br />
                                        <input type="text" className='form-control' onChange={handleInputChange} value={user_state || ""} id='user_state' name='user_state' />
                                    </div>
                                </div>

                                <hr id='line' />

                                <div className='row container-md py-3 mx-auto form-group'>
                                    <div className='col-3'>
                                        <label htmlFor='mobno'>Mobile No</label><br />
                                        <input type="tel" className='form-control' onChange={handleInputChange} value={mobno || ""} id='mobno' name='mobno' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='parentmob'>Parents Mobile No</label><br />
                                        <input type="tel" className='form-control' onChange={handleInputChange} value={parentmob || ""} id='parentmob' name='parentmob' />
                                    </div>
                                </div>

                            </div>
                            <div style={{
                                margin: '4vh',
                                paddingBottom: '4vh',
                                marginBottom: '4vh'
                            }}>
                                <Button variant="primary" className='col-sm-2' type="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>


        </div>

    </div>
);
}

export default UserProfile;