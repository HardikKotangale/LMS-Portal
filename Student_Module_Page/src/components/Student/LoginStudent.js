import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate,useNavigate  } from "react-router-dom";

import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {app} from '../../firebase.js';

import {useParams } from 'react-router-dom';
function LoginStudent() {

   const auth=getAuth(app);
   const { id } = useParams();

    const navigate = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    

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
                // alert("Hello user")
                // navigate(`/UserProfile/${email}`);
                }
            }
            
        }         
    }
    const signinUser=()=>{
        signInWithEmailAndPassword(auth,inpval.email,inpval.password).then((value)=>{alert("sign in success");
        setTimeout(() => navigate(`/UserProfile/${id}`), 500)})
        .catch((err)=>alert(err.message));
       
    }
   
  return (
<>
{/* <Header/> */}
<div className='container container-fluid my-5'>
            <section className='row d-flex justify-content-between w-100 ' style={{height: '55vh'}}>

                <div className='col-6 align-items-center'>
                    <h3 style={{ textAlign:'center', marginRight :'8vw'}}>Sign In</h3>
                    <Form>
        
                        <Form.Group  controlId="formBasicEmail">

                            <Form.Control className='w-75 m-3' name="email" onChange={getData} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group  controlId="formBasicPassword">


                            <Form.Control name="password" className='w-75 m-3' onChange={getData} type="password" placeholder="Password" />
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">

                        </Form.Group> */}
                        <Button variant="primary" className='w-75 m-3'  onClick={addData} >
                            Submit  <a onClick={signinUser}>.....</a>
                        </Button>
                      
                    </Form>
                    
                </div>
                <div className='col-6' style={{ marginBottom : 0}}>
                {/* <Sign_img  /> */}
                </div>
            </section>
        </div>
</>
  )
}

export default LoginStudent;