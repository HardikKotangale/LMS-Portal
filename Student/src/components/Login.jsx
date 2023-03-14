import React from 'react'
import Header from './Header';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate,useNavigate  } from "react-router-dom";



function Login() {

    const navigate = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const[data,setData]=useState([])

    console.log(inpval);
    const getData = (e) => {
        // console.log(e.target.value);
        const { value, name } = e.target;
        // const name=e.target.value;
        // console.log(value,name);


        //CallBack function

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
    const addData=(e)=>{
        e.preventDefault();

        const getuserArr=localStorage.getItem("user")
        console.log(getuserArr);


        console.log(inpval);
        const {email,password}=inpval;

        if(email==="") alert("email field is required")
        else if(!email.includes("@")) alert("Pls enter valid email address")
        else if(password==="") alert("password field is required")
        else{
            if(getuserArr && getuserArr.length )
            {
                const userdata=JSON.parse(getuserArr)
                console.log(userdata );
                const userlogin=userdata.filter((el,k)=>{
                    return (el.email===email && el.password===password)
                });
                // console.log(userlogin);
                if(userlogin.length===0)
                alert("Not authenticated user")
                else{
                alert("Hello user")
                navigate('/Profile');
                }
            }
        }
         
    }


  return (
<>
<Header/>
<div className='container my-5'>
            <section className='d-flex justify-content-between'>

                <div className='left_data mt-3 ' style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6' >Sign In</h3>
                    <Form>
        
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control name="email" onChange={getData} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">


                            <Form.Control name="password" onChange={getData} type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                        </Form.Group>
                        <Button variant="primary" className='col-lg-6' onClick={addData} type="submit">
                            Submit
                        </Button>
                    </Form>
                    
                </div>
                <Sign_img />
            </section>
        </div>
</>
  )
}

export default Login;