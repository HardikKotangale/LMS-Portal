import React ,{useState,useEffect}from 'react';
import { useLocation,useNavigate,Link} from 'react-router-dom';
import fireDb from "../firebase";
import {toast} from 'react-toastify';
// import "./View.css";


const Search = ()=> {

    const [data,setData] = useState({});
    const navigate = useNavigate();

    const useQuery = ()=>{
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let search = query.get("name");
    console.log("search",search);

    useEffect(()=>{
        searchData();
    },[search])

    const searchData =()=>{
        fireDb
        .child("courses")
        .orderByChild("cname")
        .equalTo(search)
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
      fireDb.child(`courses/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact Deleted Successfully");
        }
      });
    }
  };

    
  return (
    <>

     <div className="d-flex my-5 justify-content-between">
                 <button type="button" className="btnc default" onClick={() => navigate("/")}>Back</button>
                 <div/>
          </div>
        <div style={{marginTop:"100px"}}>
            {Object.keys(data).length===0 ? (
                <h2>No search found : {query.get("name")}</h2>
            ):(
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
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button 
                   className="btn btn-delete" 
                    onClick={() => onDelete(id)}>Delete</button>
                </td>

                </tr>
              );
            })}
          </tbody>
         </table>
                
                
            )}
        </div>
    
         
      </>
  )
}

export default Search;
