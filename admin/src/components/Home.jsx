import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { NavLink } from 'react-router-dom';
import Footer from "./Footer"

// export const Home = () => {

//     const [inpval, setInpval] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })

//     const [data, setData] = useState([])

//     // console.log(inpval);
//     const getData = (e) => {
//         // console.log(e.target.value);
//         const { value, name } = e.target;
//         // const name=e.target.value;
//         // console.log(value,name);


//         //CallBack function
//         setInpval((prevValue) => {
//             console.log(name);
//             console.log(value);
//             if (name === "name") {
//                 return {
//                     name: value,
//                     email: prevValue.email,
//                     password: prevValue.password
//                 }
//             }
//             else if (name === "email") {
//                 return {
//                     name: prevValue.name,
//                     email: value,
//                     password: prevValue.password
//                 }
//             }

//             else if (name === 'password') {
//                 return {
//                     name: prevValue.name,
//                     email: prevValue.email,
//                     password: value
//                 }
//             }

//         })

//     }
//     const addData = (e) => {
//         // e.preventDefault();
//         console.log(inpval);
//         const { name, email, password } = inpval;

//         if (name === "") alert("name field is required")
//         else if (email === "") alert("email field is required")
//         else if (!email.includes("@")) alert("Pls enter valid email address")
//         else if (password === "") alert("password field is required")
//         else {
//             console.log(...data);
//             localStorage.setItem("user", JSON.stringify([...data, inpval]))

//         }

//     }

//     return (
//         <div className='container my-5'>
//             <section className='d-flex justify-content-between'>

//                 <div className='left_data mt-3 ' style={{ width: "100%" }}>
//                     <h3 className='text-center col-lg-6' >Sign UP</h3>
//                     <Form>
//                         <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                             <Form.Control name="name" onChange={getData} type="text" placeholder="Enter Name" />
//                         </Form.Group>
//                         <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                             <Form.Control name="email" onChange={getData} type="email" placeholder="Enter email" />
//                         </Form.Group>

//                         <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">


//                             <Form.Control name="password" onChange={getData} type="password" placeholder="Password" />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicCheckbox">

//                         </Form.Group>
//                         <Button variant="primary" className='col-lg-6' onClick={addData} type="submit">
//                             Submit
//                         </Button>
//                     </Form>
//                     <p>Already have an Account <span><NavLink to="/Login">SignIn</NavLink></span></p>
//                 </div>
//                 <Sign_img />
//             </section>
//         </div>
//     )
// }















































































export const Home = () => {

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [data, setData] = useState([])

    // console.log(inpval);
    const getData = (e) => {
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
        // e.preventDefault();
        // console.log(inpval);
        const { name, email, password } = inpval;

        if (name === "") alert("name field is required")
        else if (email === "") alert("email field is required")
        else if (!email.includes("@")) alert("Pls enter valid email address")
        else if (password === "") alert("password field is required")
        else {
            localStorage.setItem("user", JSON.stringify([...data, inpval]))

        }

    }

    return (
        <div className='container my-5'>
            <section className='d-flex justify-content-between'>

                <div className='left_data mt-3 ' style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6' >Sign UP</h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control name="name" onChange={getData} type="text" placeholder="Enter Name" />
                        </Form.Group>
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
                    <p>Already have an Account <span><NavLink to="/Login">SignIn</NavLink></span></p>
                </div>
                <Sign_img />

            </section>
        </div>
    )
}