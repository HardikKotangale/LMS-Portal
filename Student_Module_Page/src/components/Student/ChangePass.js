import React, { useState  } from "react";

import './css/PoratalBody.css';
import './css/studentPortal.css';
import PortalHeader from "./PortalHeader";
import { BsFillPencilFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import fireDb from '../../firebase.js';
import { app } from '../../firebase.js';
import { getAuth, reauthenticateWithCredential, EmailAuthProvider,updatePassword, } from "firebase/auth";

import 'firebase/auth';

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
    const [password, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const auth = getAuth(app);
    const navigate = useNavigate();
    const { id } = useParams();


    // const auth = getAuth(app);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (oldPassword === "") toast.error("Old Password field is required", { autoClose: 100000 })
        else if (password === "") toast.error("New Password field is required", { autoClose: 100000 })
        else if (confirmPassword === "") toast.error("Confirm Password field is required", { autoClose: 100000 })
        else {
            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user[0].password)
            // if (user[0].password !== oldPassword) {
            //     toast.error("Old Password is incorrect", { autoClose: 100000 })
            // }
            if (password !== confirmPassword) {
                toast.error("New password do not match", { autoClose: 100000 })
            }
            else {
                handlePasswordChange()

            }
            // // Update password in local storage
            // user[0].password = newPassword;
            // localStorage.setItem('user', JSON.stringify(user));
            // toast.error("Password Updated Successfully", { autoClose: 100000 })
            // // Clear form inputs
            // setOldPassword('');
            // setNewPassword('');
            // setConfirmPassword('');
        }
    };

    // function handlePasswordChange() {
    //     const auth = getAuth();
    //     const user = auth.currentUser;


    //     // Reauthenticate the user with their old password
    //     const credential = fireDb.auth.EmailAuthProvider.credential(user.email, oldPassword);
    //     user.reauthenticateWithCredential(credential)
    //       .then(() => {
    //         // The user is reauthenticated, now update their password
    //         if (oldPassword === newPassword) {
    //           console.log('New password cannot be the same as old password');
    //           return;
    //         }
    //         return user.updatePassword(newPassword);
    //       })
    //       .then(() => {
    //         // The password is updated, show a success message or redirect to a new page
    //         console.log('Password updated successfully');
    //       })
    //       .catch(error => {
    //         // Handle errors such as incorrect old password or weak new password
    //         console.error(error);
    //       });
    //   }

  
    function handlePasswordChange() {
       
        const auth = getAuth();
        const user = auth.currentUser;
        console.log(user);
        console.log(user.email);
        // Reauthenticate the user with their old password
        const credential = EmailAuthProvider.credential(user.email, oldPassword);
        reauthenticateWithCredential(user, credential)
            .then(() => {
                // The user is reauthenticated, now update their password
                if (oldPassword === password) {
                    console.log('New password cannot be the same as old password');
                    return;
                }
                // updatePassword(user, password)
                
                return fireDb.child(`user/${id}`).set({ password
                }, (err) => {
                    if (err) {
                        toast.error(err);
                    }
                    else {
                        // s
                    }
                });
                // return updatePassword(user, password);
            })
            .then(() => {
                // The password is updated, show a success message or redirect to a new page
                console.log('Password updated successfully');
                toast.success("Password Updated Successfully");
            })
            .catch(error => {
                // Handle errors such as incorrect old password or weak new password
                console.error(error);
                toast.error("Old Password is wrong");
            });
    }

    // function update(user, newPassword) {
    //     // return updatePassword(user, newPassword)
    //     // .then(() => {
    //     //   console.log('Password updated successfully');
    //     // })
    //     // .catch(error => {
    //     //   console.error(error);
    //     // });
    //    return 
    // }


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
                            <NavLink to={`/UserProfile/${id}`} id='activeNav'>
                                Profile
                            </NavLink>
                            <NavLink to='/' >
                                Change Password
                            </NavLink>
                            <NavLink to={`/CoursesStd/${id}`} >
                                Search Courses
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
                                            <label htmlFor='password'>New Password :
                                            </label>
                                        </div>
                                        <div className="col-3">
                                            <input type={'password'} value={password} onChange={(e) => setNewPassword(e.target.value)} className='form-control' name="password" id="password" />

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