import React ,{useState,useEffect}from 'react';
import { useLocation,useNavigate,Link} from 'react-router-dom';
import fireDb from "../firebase";
import {toast} from 'react-toastify';
// import "./View.css";


const Search2=()=> {

    const [data,setData] = useState({});
    const navigate = useNavigate();

    const useQuery = ()=>{
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let search2 = query.get("name");
    console.log("search",search2);

    useEffect(()=>{
        searchData();
    },[search2])

    const searchData =()=>{
        fireDb
        .child("students")
        .orderByChild("fname")
        .equalTo(search2)
        .on("value",(snapshot)=>{
            if(snapshot.val()){
                const data = snapshot.val();
                setData(data);
            }
        });
    };

    const onDelete = (id) => {
    if(
      window.confirm("Are you sure you want to delete the course?")
      ) {
      fireDb.child(`students/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact Deleted Successfully");
        }
      });
    }
  };

  return (
    <div>
        <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btnc default" onClick={() => navigate("/")}>Back</button>
                <div />
            </div>
            <div style={{marginTop:"100px"}}>
            {Object.keys(data).length===0 ? (
                <h2>No search found : {query.get("name")}</h2>
            ):(
        <table className="styled-table"> 
        <thead>
            <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile no</th>
                <th>Applied Course</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {Object.keys(data).map((id,index)=>{
                return(
                    <tr key={id}>
                        <th scope="row">{index+1}</th>
                        <td>{data[id].fname}</td>
                        <td>{data[id].lname}</td>
                        <td>{data[id].email}</td>
                        <td>{data[id].phone}</td>
                        <td>{data[id].appliedcourse}</td>
                        <td>
                            <Link to={`/updateAd/${id}`}>
                                <button className="btn">Edit</button>
                            </Link>
                            <button
                            className="btn"
                            onClick={() => onDelete(id)}>Delete</button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
        </table>
            )}
       </div>
      
    </div>
  )
}

export default Search2;
