import React, { useState, useEffect, useRef } from 'react';
import fireDb from '../../firebase.js';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import emailjs, { init } from "@emailjs/browser";
import './css/PoratalBody.css';
import './css/studentPortal.css';
import PortalHeader from "./PortalHeader";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import { useParams } from 'react-router-dom';
// import "./View.css";

const AddCoursesStd = () => {


  init("user_lA8yQryRIxPgz4Vao");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_piyswu5",
        "template_m86eva5",
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



  const { id } = useParams();

  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fireDb.child(`courses/${id}`).on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);




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
                <NavLink to={`/UserProfile/${id}`} >
                  Profile
                </NavLink>
                <NavLink to={`/ChangePass/${id}`} >
                  Change Password
                </NavLink>
                <NavLink to='/' id='activeNav' >
                  Search Courses
                </NavLink>


              </NavMenu>
            </Nav>
          </div>



          {/* Body Container */}

          <div id='PorBody' className='ProfileBody container-xxl mt-4'>
            <div>
              <div className="d-flex my-5 justify-content-between">
                {/* <button type="button" className="btnc default" onClick={() => navigate("/")}>Back</button> */}
                <div />
              </div>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Course Duration</th>
                    <th>Course Fees</th>
                    <th>Course Description</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {Object.keys(data).map(() => {
            return ( */}
                  <tr >
                    {/* <th scope="row"></th> */}
                    <td>{data.cname}</td>
                    <td>{data.cduration}</td>
                    <td>{data.cfees}</td>
                    <td>{data.cdescription}</td>

                  </tr>
                  {/* );
          })} */}
                </tbody>
              </table>
              <br />
              <form className='mx-auto' ref={form} style={{ width: "25%", display: 'none' }}>
                <label htmlFor="cname">Course_name</label>
                <input
                  type="text"
                  id="cname"
                  name="cname"
                  className='form-control'
                  value={data.cname}
                ></input>
                <label htmlFor="cname">Course_duration</label>
                <input
                  type="text"
                  id="cduration"
                  name="cduration"
                  className='form-control'
                  value={data.cduration}
                ></input>
                <label htmlFor="cname">Course_fees</label>
                <input
                  type="text"
                  id="cfees"
                  name="cfees"
                  className='form-control'
                  value={data.cfees}
                ></input>
                <label htmlFor="cname">Course_description</label>
                <input
                  type="text"
                  id="cdescription"
                  name="cdescription"
                  className='form-control'
                  value={data.cdescription}
                ></input>

              </form>
              <div style={{display : 'flex',justifyContent:'center',alignItems : 'center'}}>
              <button className="btnc default" onClick={sendEmail}>Admin Valid</button>
              </div>
              
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>







  )
};

export default AddCoursesStd;