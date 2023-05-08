import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import './css/studentPortal.css';
import { BsArrowRight } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import userlogo from './images/userlogo.png';
function PortalHeader(props) {
    let userData = localStorage.getItem("user");
    userData = JSON.parse(userData);
    
    const getUSerName = () => {
       
        console.log(userData);
        let name = userData[0].fname + " " + userData[0].lname;
        console.log(name);
        return <label>{name}</label>

    }
    return <>
        <div id="stdbody">
            <div id="header" className="row">
                {/* <div className="col-2 my-auto" style={{
                    float: 'left',
                    display : 'flex',
                    justifyContent : 'space-evenly'
                }}>
                    <BsPersonCircle style={{
                        color: 'white'
                    }} size="30px" />

                    <h3 className="my-auto">Student</h3>

                    <BsArrowRight style={{
                        color: 'white'
                    }} size="30px" />
                </div> */}

                <div className="col-4 my-auto" style={{
                    border: '2px solid white',
                    color: 'white',
                    borderRadius: '50px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    display: 'inline',
                    padding : '2vh'
                }}>
                    <div>
                        <h3 style={{color :'white'}}>{getUSerName()}</h3>
                    </div>

                </div>
                <div className="col-4" style={{
                    float : 'left'
                }}>
                    <img src={userlogo} alt="user Image" />
                </div>

                <div className="col-4 my-auto">
                    <Button variant="primary" type="button" className="log-btn">Log Out</Button>
                </div>
            </div>
        </div>
    </>

}
export default PortalHeader;