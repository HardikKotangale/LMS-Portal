import React, { Component } from 'react'
import '../css/PoratalBody.css';
import '../css/studentPortal.css';
import PortalHeader from './PortalHeader';
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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

export class StudentPortal extends Component {
  
  render() {
    return (
      <div id="stdBody">
        <div className='pt-2 mt-2'>
          <PortalHeader />
        </div>
        {/* <PortalBody/> */}
        <div id="PortalBodyMain" className='mx-auto'>
          <div className='NavrBarMain' >
            <Nav>
              <Bars />

              <NavMenu>
                <NavLink to='/about' id='activeNav'>
                  Profile
                </NavLink>
                <NavLink to='/events' >
                  Change Password
                </NavLink>
                <NavLink to='/events' >
                  My Courses
                </NavLink>
                <NavLink to='/events' >
                  Attendance
                </NavLink>
                <NavLink to='/events' >
                  Chat
                </NavLink>

              </NavMenu>
            </Nav>
          </div>

          <div id='PorBody' className='ProfileBody container-xxl mt-4'>
            <div className='pt-2 pb-4'>


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

              <div className='row container-xl mx-auto py-3' id="perInfo">
                <div className='py-3 my-3'>
                  <div className='row container-md mx-auto form-group'>
                    <div className='col-3'>
                      <label htmlFor='id'>Id</label><br />
                      <input type="text" className='form-control' name="id" id="id" />
                    </div>
                    <div className='col-3'>
                      <label htmlFor='fname'>First Name</label><br />
                      <input type="text" className='form-control' name="fname" id="fname" />
                    </div>
                    <div className='col-3'>
                      <label htmlFor='mname'>Middle Name</label><br />
                      <input type="text" className='form-control' name="mname" id="mname" />
                    </div>
                    <div className='col-3'>
                      <label htmlFor='lname'>Last Name</label><br />
                      <input type="text" className='form-control' name="lname" id="lname" />
                    </div>
                  </div>

                  <hr id='line'/>
                  <div className='row container-md mx-auto py-3 form-group'>
                    <div className='col-3'>
                      <label htmlFor='email'>Email</label><br />
                      <input type="email" className='form-control' name='email' id="email" />
                    </div>

                    <div className='col-3'>
                      <label htmlFor='profile'>Profile Photo</label><br />
                      <input type="file" className='form-control' name="profile" ref="imageInput" accept="image/png, image/jpeg" id="profile" multiple={false} />
                    </div>
                    <div className='col-6'>

                    </div>
                  </div>

                  <hr id='line'/>
                  <div className='row container-md mx-auto py-3 form-group'>
                    <div className='col-3'>
                      <label htmlFor='dob'>Date of Birth</label><br />
                      <input type="date" className='form-control' name='dob' id='dob' />
                    </div>
                    <div className='col-3'>
                      <label htmlFor='age'>Age</label><br />
                      <input type="number" min={1} max={100} className='form-control'  name='age' id='age' />
                    </div>
                    <div className='col-3'>
                      <label htmlFor='gender'>Gender</label><br />
                      <input type="text" className='form-control' onChange={this.getGender} name='gender' id='gender' accept='Male,Female,male,female' />
                    </div>
                    <div className='col-3'>

                    </div>
                  </div>
                </div>
              </div>
              <div className='row py-3 mt-3'>
                <div className='col-4'>
                  <h3>Contact Information</h3>
                  <BsFillPencilFill style={{
                    color: '#0a1e7d',
                    float: 'left',
                    marginLeft: '2vh'
                  }} size="30px" />
                </div>

                <div className='col-8'></div>
              </div>

              <div className='row container-xl py-3 mx-auto' id="perInfo">
                <div className='py-3 my-3'>
                  <div className='row container-md mx-auto form-group'>
                    <div className='col-2'>
                      <label htmlFor='address'>Address</label><br />
                      <input type="text" className='form-control' onChange={this.getAddress} id='address' name="address"/>
                    </div>
                    <div className='col-2'>
                      <label htmlFor='city'>City</label><br />
                      <input type='text' className='form-control' onChange={this.getCity} id='city' name='city' />
                    </div>
                    <div className='col-3'>
                      <label htmlFor='zipcode'>Zipcode</label><br />
                      <input type="number" className='form-control' onChange={this.getZipcode} id='zipcode' name='zipcode' />
                    </div>
                    <div className='col-3'>
                      <label htmlFor='state'>State</label><br />
                      <input type="text" className='form-control' id='state' onChange={this.getState} name='state' />
                    </div>
                  </div>

                  <hr id='line'/>
                  <div className='row container-md py-3 mx-auto form-group'>
                    <div className='col-3'>
                      <label htmlFor='mob1'>Mobile No</label><br />
                      <input type="tel" className='form-control'onChange={this.getMob1} id='mob1' name='mob1' />
                    </div>
                    <div className='col-3'>
                      <label htmlFor='mob2'>Parents Mobile No</label><br />
                      <input type="tel" className='form-control' onChange={this.getMob2} id='mob2' name='mob2' />
                    </div>
                    <div className='col-6'></div>
                  </div>
                  <div>
                  
                  </div>
                  
                </div>
               
              </div>
              <div style={{margin : '4vh',paddingBottom:'4vh'}}>
              <Button variant="primary" className='col-sm-2' onClick={this.handleOnSubmit} type="submit">
                  Submit
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StudentPortal;
