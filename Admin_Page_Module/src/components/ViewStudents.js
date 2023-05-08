import React,{useState,useEffect} from 'react';
import fireDb from '../firebase';
import {Link,useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
// import "./View.css";



const ViewStudents = () => {

    const [data,setData] = useState({});
    const navigate = useNavigate();
    const [search2,setSearch2] = useState("");
    const [sortedData,setSortedData] = useState([]);
    const [sort,setSort] = useState(false);

    useEffect(()=>{
        fireDb.child("students").on("value",(snapshot) => {
            if(snapshot.val()!==null){
                setData({...snapshot.val()});
            } else {
                setData({});
            }
        });

        return () => {
            setData({});
        };
    },[]);

    const onDelete = (id) =>{
        if(
            window.confirm("Are  you sure tou want to delete?")
        ) {
            fireDb.child(`students/${id}`).remove((err) => {
                if(err){
                    toast.error(err);
                }
                else{
                    toast.success("Deleted sucessfully");
                }
            });
        }
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`/search2?name=${search2}`);
        setSearch2("");
    };

    const handleChange = (e)=>{
        setSort(true);
        fireDb.child("students").orderByChild(`${e.target.value}`).on("value",(snapshot)=>{
            let sortedData = [];
            snapshot.forEach((snap)=>{
                sortedData.push(snap.val())
            });
            setSortedData(sortedData)
        }
        )
    }

    const handleReset = ()=>{
        setSort(false);

    }

  return (
    <div>
        <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btnc default" onClick={() => navigate("/")}>Back</button>
                <div />
            </div>
            <div>
        <table className="styled-table"> 
        <thead>
            <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile no</th>
                <th>Applied Course</th>
                {!sort && <th>Action</th>}
            </tr>
        </thead>
        {!sort && (
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
                                <button className="btnv">Edit</button>
                            </Link>
                            <button
                            className="btnv"
                            onClick={() => onDelete(id)}>Delete</button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
        )}
        {sort && (
            <tbody>
                {sortedData.map((item,index)=>{
                    return(
                        <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.appliedcourse}</td>
                    </tr>

                    )
                })}
            </tbody>
        )}
        
        </table>
        <br />
        <div>
          <form onSubmit={handleSubmit} style={{display:"inline"}}>
            <input type="text" 
            className='inputField'
            placeholder='Search Name...'
            onChange={(e) => setSearch2(e.target.value)}
            value={search2}
            />
          </form>
       </div>

       {/* <label >Sort by:</label>
        */}
        <h4 >Sort by:</h4>
        <select className="dropdown" name="colValue" onChange = {handleChange}>
            <option>Please select</option>
            <option value="fname">First name</option>
            <option value="lname">Last name</option>
            <option value="appliedcourse">Applied course</option>
        </select>
        <button className='btn btn-reset' onClick={handleReset}>Reset</button>

        </div>
    </div>
  )
};

export default ViewStudents;
