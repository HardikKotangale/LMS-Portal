import React,{ useState, useEffect} from 'react';
// import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import fireDb from '../firebase';
import {toast} from 'react-toastify';
// import "./fromStyles.css";
// import "../"


const initialState = {
    cname:"",
    cduration:"",
    cfees:"",
    cdescription:"",
};


const AddCourse = () => {
	const navigate = useNavigate(); 
	const [state,setState] = useState(initialState);
	const [data,setData] = useState({});
  
	const {cname,cduration,cfees,cdescription} = state;

  const {id} = useParams();

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
  }, [id]);

  useEffect(() => {
    if(id) {
      setState({...data[id]})
    } else {
      setState({...initialState})
    }

    return () => {
      setState({...initialState})
    }
  },[id, data])

 


	const handleInputChange = (e) =>{
		const{name,value} = e.target;
		setState({...state,[name]:value});
	  };

 	const handleSubmit = (e) =>{
	e.preventDefault();

	if(!cname || !cduration || !cfees || !cdescription){
        toast.error("Please provide value in each input field")
        console.log("error")
        alert("Please provide value in each input field")
    }
    else{
      if(!id) {
        fireDb.child("courses").push(state,(err)=>{
          if(err){
              toast.error(err);
          }
          else{
              toast.success("Course added Successfully");
          }
      });
      } else {
        fireDb.child(`courses/${id}`).set(state,(err)=>{
          if(err){
              toast.error(err);
          }
          else{
              toast.success("Course updated Successfully");
          }
      });
      }

        setTimeout(()=>navigate("/"),500);
    }
  };

  return (

	

    <div className='wrapper'>
      <h1 className='head'>Courses</h1>
      {/* <p>Add Course</p> */}

      <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btnc default" onClick={() => navigate("/")}>Back</button> 
                <div />
            </div>

      <div className='main'>
        <div className='form-container'>
          <form autoComplete="off" className='form-group'>
          <h4 className='form-head'>Enter the required details</h4>
          <br />
            <label htmlFor="cname">Course_name</label>
            <input 
              type="text" 
              id="cname"
              name="cname"
              className='form-control' 
              value={cname || ""}
              placeholder="Enter course name"
              onChange={handleInputChange}
            ></input>
              
            <br></br>
            
            <label htmlFor="cduration">Course_duration</label>
            <input 
              type="number" 
              id="cduration"
              name="cduration"
              className='form-control' 
              value={cduration || ""}
              placeholder="Enter course duration"
              onChange={handleInputChange}
            ></input>
            
            <br></br>
          
            <label htmlFor="cfees">Course_fees</label>
            <input 
                type="number" 
                id="cfees"
                name="cfees"
                className='form-control' 
                value={cfees || ""}
                placeholder="Enter course fees"
                onChange={handleInputChange}
            ></input>  
            <br></br>
            
            <label htmlFor="cdescription">Course_description</label>
            <input 
                type="text" 
                id="cdescription"
                name="cdescription"
                className='form-control' 
                value={cdescription || ""}
                placeholder="Enter course description"
                onChange={handleInputChange}
            ></input>
          
            <div>
            <br></br>
            <button className="btnc default" type="submit" onClick={handleSubmit} value={id ? "Update" : "Save"}>Add Course</button>
          
            
            <button className="btnc default" type="submit" onClick={()=>navigate("/")}>Back</button>
            <br></br>
            </div>
           
          </form>
        </div>        
      </div>
      
    </div>
  );
};

export default AddCourse;