import React, { useRef } from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';

import Sign_img from './Sign_img';
import { NavLink } from 'react-router-dom';

import emailjs, { init } from "@emailjs/browser";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Home = () => {

    init("user_lA8yQryRIxPgz4Vao");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_yrz86mr", "template_qs1d84e", form.current, "lA8yQryRIxPgz4Vao").then(
          (result) => {
            alert("Message Sent Successfully");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      };
  
    const [inpval, setInpval] = useState({
        fname: "",
        lname:"",
        mobile:"",
        address:"",
        degree:"",
       // gender:"",
        email: "",
        password: ""
    })

    const [data, setData] = useState([])
   
   

    // console.log(inpval);
    const getData = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        const { value, name } = e.target;   
        // const name=e.target.value;
        // console.log(value,name);


        //CallBack function
       console.log(inpval);
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
    


    const addData = (e) => {   
         
       // const { fname,lname,address,mobile,degree,email, password } = inpval;

        validate1()

        // if (fname === "")  toast.error("First name field is required",{autoClose:100000})
        // else if (lname === "") toast.error("Last name field is required",{autoClose:100000})
        // else if (address === "") toast.error("Address field is required",{autoClose:100000})
        // else if (mobile === "") toast.error("Mobile field is required",{autoClose:100000})
        // else if (degree === "") toast.error("Degree field is required",{autoClose:100000})
        // else if (email === "") toast.error("Email field is required",{autoClose:100000})
        // else if (!email.includes("@")) toast.error("Pls enter valid email address",{autoClose:100000})
        // else if (password === "") toast.error("Password field is required",{autoClose:100000})
        // else {
        //     localStorage.setItem("user", JSON.stringify([...data, inpval]))
        // }

    // emailjs.sendForm('service_yrz86mr', 'template_qs1d84e', form.current, 'lA8yQryRIxPgz4Vao')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
        
    }

     
    function validate1(){
        var phoneNumber = document.getElementById('mobile').value;
        var email = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var address = document.getElementById('address').value;
        var degree = document.getElementById('degree').value;

        var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        var emailREX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passREX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        
        var phoneResult = phoneRGEX.test(phoneNumber);
        var emailResult = emailREX.test(email);
        var passResult  = passREX.test(pass)

        if (fname === "")  toast.error("First name field is required",{autoClose:100000})
        else if (lname === "") toast.error("Last name field is required",{autoClose:100000})
        else if (address === "") toast.error("Address field is required",{autoClose:100000})
        else if (phoneNumber === "") toast.error("Mobile field is required",{autoClose:100000})
        else if (degree === "") toast.error("Degree field is required",{autoClose:100000})
        else if (email === "") toast.error("Email field is required",{autoClose:100000})
        else if (!email.includes("@")) toast.error("Pls enter valid email address",{autoClose:100000})
        else if (pass === "") toast.error("Password field is required",{autoClose:100000})

        else if(phoneResult == false)
        {
            toast.error("Please enter a valid phone number",{autoClose:5000000});
          return false;
        }
      
        else if(emailResult == false)
        {
            toast.error("Please enter a valid email number",{autoClose:5000000});
          return false;
        }

        else if(passResult ==  false)
        {
            toast.error("Please enter a valid password ",{autoClose:5000000});
          return false;
        }

        else {
            localStorage.setItem("user", JSON.stringify([...data, inpval]))
        }
      
       
      }

    return (
        <>
        <Header/>
        <div className=' container my-5' >
            <section className='d-flex justify-content-between'>

                <div className='left_data mt-3 ' style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6' >Registeration</h3>  
                    
                    <Form  onSubmit={sendEmail} ref={form} >

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control 
                           id='fname' name="fname" onChange={getData} type="text" placeholder="Enter First Name" />
                            <ToastContainer />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control id='lname' name="lname" onChange={getData} type="text" placeholder="Enter Last Name" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control id='address' name="address" onChange={getData} type="text" placeholder="Enter Address" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control id='mobile'  name="mobile" onChange={getData} type="number" placeholder="Enter Mobile Number" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control id='degree' name="degree" onChange={getData} type="text" placeholder="Enter Latest Degree" />
                        </Form.Group>

                        {/* <Form.Select name="gender" onChange={getData} className=" mt-3 mb-3 w-50 col-lg-6" >
                                <option>Gender</option>
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                                <option value="3">Other</option>
                         </Form.Select> */}

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control  id='email' name="email" onChange={getData} type="email" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Control id='password' name="password" onChange={getData} type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>

                        <Button variant="primary" className='col-lg-6' onClick={addData}  type="submit">
                            Submit
                        </Button>
                        {/* <a  onClick={sendEmail}>Done with Registeration</a> */}
                    </Form>
                    <p>Already have an Account <span><NavLink to="/Login">SignIn</NavLink></span></p>

                </div>
                 <Sign_img /> 

            </section>
        </div>
        </>
    )
}

