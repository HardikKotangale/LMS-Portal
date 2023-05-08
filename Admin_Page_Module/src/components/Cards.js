import React from 'react';
import { useNavigate } from 'react-router-dom';
// import "./cards.css";




const Cards=()=> {
    const navigate = useNavigate();

  return (
    <div className="row">
       <div className="col-sm-6 mb-3 mb-sm-0 my-5 width ">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">COURSES</h5>
                <p className="card-text">Make changes in the Courses </p>
                
                <button type="button"  className="btnc default" onClick={()=>navigate("/addCourse")}>Add Courses</button><br></br>
                <button type="button"  className="btnc default my-3" onClick={()=>navigate("/viewCourses")}>View Courses</button><br></br>
                {/* <button type="button" className="btnc default my-3" onClick={()=>navigate("/viewCourses")}>VIEW PRE-EXISISTING COURSES</button> */}
            </div>
            </div>
        </div>

        <div className="col-sm-6 my-5 width ">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">ADMISSIONS</h5>
                <p className="card-text">Details about the new enrollments </p>
                <button type="button"  onClick={()=>navigate("/newAdmissionForm")} className="btnc default">ADD NEW ENTRY</button><br></br>


                <button type="button"  onClick={()=>navigate("/viewStudents")} className="btnc default my-3">View NEW ENTRY</button><br></br>
                </div>
            </div>  
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0 my-5 width ">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">REPORTS</h5>
                <p className="card-text">Details about enrollments.</p>
                <button type="button"  className="btnc default">Fee Details</button><br></br>
                <button type="button" className="btnc default my-3">XYZ</button>
            </div>
            </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0 my-5 width ">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Student Management</h5>
                <p className="card-text">..............</p>
                <button type="button" className="btnc default">xyz</button><br></br>
                <button type="button"className="btnc default my-3">xyz</button>
            </div>
            </div>
        </div>
        
</div>
)
}

export default Cards;


