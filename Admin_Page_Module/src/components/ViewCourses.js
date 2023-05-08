import React, {useState, useEffect} from 'react';
import fireDb from '../firebase';
import{Link,useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
// import "./View.css";

const ViewCourses = () => {
  const [data,setData] = useState({});
  const navigate = useNavigate();
  const [search,setSearch] = useState("");

  useEffect(() => {
    fireDb.child("courses").on("value", (snapshot) => {
      if(snapshot.val()!==null) {
        setData({...snapshot.val()});
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  const onDelete = (id) => {
    if(
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

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/search?name=${search}`);
    setSearch("");
  };

  return (
    <div>
  <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btnc default" onClick={() => navigate("/")}>Back</button>
                <div/>
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
          <form onSubmit={handleSubmit} style={{display:"inline"}}>
            <input type="text" 
            className='inputField'
            placeholder='Search Name...'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />

          </form>
       </div>
    </div>
  )
};

export default ViewCourses;