import React, { useState,useEffect } from "react";
import '../css/studentPortal.css';
import PortalHeader from "./PortalHeader";
import '../css/PoratalBody.css';
import { BsFillPencilFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ChangePass from "./ChangePass";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Profile() {
    const userData = JSON.parse(localStorage.getItem('user'));
            
    
    const [inpval, setInpval]=useState({
        uid:'',
        fname: userData.fname,
        mname:'',
        lname: userData.mname,
        email: userData.email,
        photo:'',
        dob: '',
        age :'',
        gender :'',
        address : userData.address,
        city :'',
        state :'',
        zipcode:'',
        mobno: userData.mobile,
        parentmob :''

    })
    const [data, setData] = useState([])
    useEffect(() => {
        const storedData = localStorage.getItem('user');
        if (storedData) {
          setData(JSON.parse(storedData));
        }
    }, []);

    const getData =(e)=>{
        console.log(inpval);
        const { value, name } = e.target;   
        setInpval(() => {
            return {
                ...inpval,
                [name]:value
            }
        })

    }
    const addData =(e)=>{
        validate1()
    }


    function validate1(){
        var uid = document.getElementById('uid').value;
        var fname = document.getElementById('fname').value;
        var mname= document.getElementById('mname').value;
        var lname = document.getElementById('lname').value;
        var email = document.getElementById('email').value;
        var phoneNumber = document.getElementById('mobno').value;
        var photo = document.getElementById('photo').value;
        var dob = document.getElementById('dob').value;
        var age = document.getElementById('age').value;
        var gender = document.getElementById('gender').value;
        var address = document.getElementById('address').value;
        var city = document.getElementById('city').value;
        var state = document.getElementById('state').value;
        var zipcode = document.getElementById('zipcode').value;
        var mobno = document.getElementById('mobno').value;
        var parentmob = document.getElementById('parentmob').value;

        
        var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        var emailREX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        // var phoneResult1 = phoneRGEX.test(mobno);
        var phoneResult2 = phoneRGEX.test(parentmob);
        var emailResult = emailREX.test(email);
        // var passResult  = passREX.test(pass)

        if (dob === "")  toast.error("Date of Birth field is required",{autoClose:100000})
        else if (gender === "") toast.error("Gender field is required",{autoClose:100000})
        else if (parentmob === "") toast.error("Parent Mobile Number field is required",{autoClose:100000})
        // else if (degree === "") toast.error("Degree field is required",{autoClose:100000})
         else if (email === "") toast.error("Email field is required",{autoClose:100000})
        else if (!email.includes("@")) toast.error("Pls enter valid email address",{autoClose:100000})
        // else if (pass === "") toast.error("Password field is required",{autoClose:100000})

        else if(phoneResult2 == false)
        {
            toast.error("Please enter a valid phone number",{autoClose:5000000});
          return false;
        }
        
      
        else if(emailResult == false)
        {
            toast.error("Please enter a valid email number",{autoClose:5000000});
          return false;
        }

        // else if(passResult ==  false)
        // {
        //     toast.error("Please enter a valid password ",{autoClose:5000000});
        //   return false;
        // }

        else {
            setData[age] = {calculateAge}
            console.log('hello')
            const updatedData = { ...data, 'uid' : {uid}, 'mname' : {mname} , 'photo' : {photo} , 'dob' : {dob} , 'age': {age} , 'gender' : {gender},'city': {city}, 'state': {state} , 'zipcode' : {zipcode} , 'parentmob' : {parentmob}};
            // console.log(updatedData)
            setData(updatedData);
            localStorage.setItem('user[0]', JSON.stringify(updatedData));

            // console.log(uid);
            // userData.id = uid;
            // userData.mname = mname;
            // console.log(mname);
            // userData.photo = photo;
            // userData.address= address;
            // // userData= [...data, inpval];
            // localStorage.setItem('user', JSON.stringify(userData));
            // localStorage.setItem("user", JSON.stringify([...data, inpval]))
        }
      
       
      }

      function calculateAge() {
        const birthDate = new Date(dob);
        const today = new Date();
        const diffInMs = today.getTime() - birthDate.getTime();
        const ageDate = new Date(diffInMs);
        let age = Math.abs(ageDate.getUTCFullYear() - 1970);
        return age;
      }

    return (
        <div>
            <div id="stdBody">
                <div className=''>
                    {<PortalHeader/>}
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
                                <NavLink to='/ChangePass' >
                                    Change Password
                                </NavLink>
                                <NavLink to='/' >
                                    My Courses
                                </NavLink>
                                <NavLink to='/' >
                                    Attendance
                                </NavLink>
                                <NavLink to='/' >
                                    Chat
                                </NavLink>

                            </NavMenu>
                        </Nav>
                    </div>



                    {/* Body Container */}

                    <div id='PorBody' className='ProfileBody container-xxl mt-4'>

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
                                        <input type="text" onChange={getData}  className='form-control' name="uid" id="uid" />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='fname'>First Name</label><br />
                                        <input type="text" className='form-control' value={userData.fname} onChange={getData}  name="fname" id="fname" />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='mname'>Middle Name</label><br />
                                        <input type="text" className='form-control'  onChange={getData} name="mname" id="mname" />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='lname'>Last Name</label><br />
                                        <input type="text" className='form-control'value={userData.lname} onChange={getData} name="lname" id="lname" />
                                    </div>
                                </div>
                                <hr id="line" />
                                <div className='row container-md mx-auto form-group'>

                                    <div className='col-3'>
                                        <label htmlFor='email'>Email</label><br />
                                        <input type="email" className='form-control'  onChange={getData} name='email' id="email" />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor="photo">Profile Photo</label><br />
                                        <input type="file" className='form-control' onChange={getData}  name="photo" accept="image/png, image/jpeg" id="photo" multiple={false} />
                                    </div>
                                </div>
                                <hr id="line" />
                                <div className='row container-md mx-auto py-3 form-group'>
                                    <div className='col-3'>
                                        <label htmlFor='dob'>Date of Birth</label><br />
                                        <input type="date" className='form-control'  onChange={getData} name='dob' id='dob' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='age'>Age</label><br />
                                        <input type="number" min={1} max={100}  className='form-control' disabled={true} name='age' id='age' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='gender'>Gender</label><br />
                                        <input type="text" className='form-control'  name='gender' id='gender' onChange={getData} accept='Male,Female,male,female' />
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
                                        <input type="text" className='form-control' onChange={getData} id='address' name="address" />
                                    </div>
                                    <div className='col-2'>
                                        <label htmlFor='city'>City</label><br />
                                        <input type='text' className='form-control' onChange={getData} id='city' name='city' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='zipcode'>Zipcode</label><br />
                                        <input type="number" className='form-control' onChange={getData} id='zipcode' name='zipcode' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='state'>State</label><br />
                                        <input type="text" className='form-control' onChange={getData} id='state' name='state' />
                                    </div>
                                </div>

                                <hr id='line' />

                                <div className='row container-md py-3 mx-auto form-group'>
                                    <div className='col-3'>
                                        <label htmlFor='mobno'>Mobile No</label><br />
                                        <input type="tel" className='form-control' onChange={getData} id='mobno' name='mobno' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='parentmob'>Parents Mobile No</label><br />
                                        <input type="tel" className='form-control' onChange={getData} id='parentmob' name='parentmob' />
                                    </div>
                                </div>
                                
                            </div>
                            <div style={{
                                    margin: '4vh',
                                    paddingBottom: '4vh',
                                    marginBottom: '4vh'
                                }}>
                                    <Button variant="primary" onClick={addData} className='col-sm-2' type="submit">
                                        Submit
                                    </Button>
                                </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default Profile;