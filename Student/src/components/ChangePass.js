import React, { useState } from "react";
import Profile from "./Profile";
import '../css/PoratalBody.css';
import '../css/studentPortal.css';
import PortalHeader from "./PortalHeader";
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
const ChangePass = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (oldPassword === "") toast.error("Old Password field is required", { autoClose: 100000 })
        else if (newPassword === "") toast.error("New Password field is required", { autoClose: 100000 })
        else if (confirmPassword === "") toast.error("Confirm Password field is required", { autoClose: 100000 })
        else {
            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user[0].password)
            if (user[0].password !== oldPassword) {
                toast.error("Old Password is incorrect", { autoClose: 100000 })
            }
            if (newPassword !== confirmPassword) {
                toast.error("New password do not match", { autoClose: 100000 })
            }
            // Update password in local storage
            user[0].password = newPassword;
            localStorage.setItem('user', JSON.stringify(user));
            toast.error("Password Updated Successfully", { autoClose: 100000 })
            // Clear form inputs
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }
    };


    return (
        <div>

            <div id="stdBody">
                <div className=''>
                    {<PortalHeader />}
                </div>
                <div id="PortalBodyMain" className='mx-auto'>
                    <div className='NavrBarMain' >
                        <Nav>
                            <Bars />

                            <NavMenu>
                                <NavLink to='/Profile'>
                                    Profile
                                </NavLink>
                                <NavLink to='/' id='activeNav'>
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
                    <div id='PorBody' className='ProfileBody container-xxl mt-4'>

                        {/* First row for diaplaying personal information */}
                        <div className='row py-3'>
                            <div className='col-4'>
                                <h3>Change Password</h3>
                                <BsFillPencilFill style={{
                                    color: '#0a1e7d',
                                    float: 'left',
                                    marginLeft: '2vh'
                                }} size="30px" />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='row container-md mx-auto py-3' id="perInfo">

                                <div className='row form-group'>
                                    <ToastContainer />
                                    <div className="row">
                                        <div className='col-3'>
                                            <label htmlFor='oldpassword'>Old Password :</label>
                                        </div>
                                        <div className="col-3">
                                            <input type={'password'} value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className='form-control' name="oldpassword" id="oldpassword" />
                                        </div>
                                    </div>
                                    <hr id="line" />
                                    <div className="row">
                                        <div className='col-3'>
                                            <label htmlFor='newpassword'>New Password :
                                            </label>
                                        </div>
                                        <div className="col-3">
                                            <input type={'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className='form-control' name="newpassword" id="newpassword" />

                                        </div>
                                    </div>

                                    <hr id="line" />
                                    <div className="row">
                                        <div className='col-3'>
                                            <label htmlFor='confirmpassword'>Confirm Password : </label><br /><br />
                                        </div>
                                        <div className="col-3">
                                            <input type={'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='form-control' name="confirmpassword" id="confirmpassword" />

                                        </div>
                                    </div>
                                    <hr id="line" />

                                    <button type="submit" className="btn btn-primary col-3" style={{ marginLeft: '3vh' }}>Submit</button>
                                    {/* {message && <div>{message}</div>} */}

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ChangePass;