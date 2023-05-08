import React, { useState, useEffect } from 'react';
import fireDb from '../../firebase.js';
import { Link, useNavigate ,useParams} from "react-router-dom";
import { toast } from 'react-toastify';

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
// import "./View.css";

const CoursesStd = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const { id } = useParams();


  useEffect(() => {
    fireDb.child("courses").on("value", (snapshot) => {
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

  const onDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete the course?")
    ) {
      fireDb.child(`courses/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact Deleted Successfully");
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?name=${search}`);
    setSearch("");
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
                <NavLink to={`/UserProfile/${id}`} id='activeNav'>
                  Profile
                </NavLink>
                <NavLink to={`/ChangePass/${id}`} >
                  Change Password
                </NavLink>
                <NavLink to='/' >
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
                    <th>No.</th>
                    <th>Course Name</th>
                    <th>Course Duration</th>
                    <th>Course Fees</th>
                    <th>Course Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(data).map((id, index) => {
                    return (
                      <tr key={id}>
                        <th scope="row">{index + 1} </th>
                        <td>{data[id].cname}</td>
                        <td>{data[id].cduration}</td>
                        <td>{data[id].cfees}</td>
                        <td>{data[id].cdescription}</td>
                        <td>
                          <Link to={`/update/${id}`}>
                            <button className="btnv btnv-edit">Edit</button>
                          </Link>
                          <Link to={`/AddCoursesStd/${id}`}>
                            <button className="btnv btnv-edit">Add</button>
                          </Link>
                          <button
                            className="btnv btnv-delete"
                            onClick={() => onDelete(id)}>Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <br />
              <div>
                <form onSubmit={handleSubmit} style={{ display: "inline" }}>
                  <input type="text"
                    className='inputField'
                    placeholder='Search Name...'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default CoursesStd;