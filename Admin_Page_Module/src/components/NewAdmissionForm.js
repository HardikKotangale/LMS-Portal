
import React,{ useState,useEffect} from 'react';

import { useNavigate,useParams} from 'react-router-dom';
import fireDb from '../firebase';
import {toast} from 'react-toastify';
// import "./fromStyles.css"

const initialState = {
    fname:"",
    lname:"",
    email:"",
    phone:"",
    appliedcourse:"",
};



const NewAdmissionForm = () => {
  const navigate = useNavigate(); 
  const [state,setState] = useState(initialState);
  const [data,setData] = useState({});


  const {fname,lname,email,phone,appliedcourse} = state;

  const {id} = useParams();

 

  useEffect(()=>{
    fireDb.child("students").on("value",(snapshot)=>{
      if(snapshot.val()!==null){
        setData({...snapshot.val()});
      }else{
        setData({});
      }
    });

    return ()=>{
      setData({});
    };
  },[id]);

  useEffect(()=>{
    if(id){
      setState({...data[id]})
    }else{
      setState({...initialState})
    }

    return ()=>{
      setState({...initialState})
    }
  },[id,data])

  // const [email, setEmail] = useState('');
  // const [error, setError] = useState(null);

  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }

  const handleInputChange = (e) =>{

    const{name,value} = e.target;
    // if (!isValidEmail(e.target.value)) {
    //   setError('Email is invalid');
    // } else {
    //   setError(null);
    // }
    // setData("email",e.target.value);


    setState({...state,[name]:value});


  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!fname || !lname || !email || !phone || !appliedcourse){
        toast.error("Please provide value in each input feild")
        console.log("error")
        alert("Please provide value in each input feild")
    }
     else if(phone.length>10 || phone.length<10){
      console.log("error")
        alert("Please provide valid 10 digit mobile no.")
    }
    
    else if(!email.includes("@") || !email.includes(".")){
      alert("Please provide valid email id")
      
       
    }
    else{
      if(!id){
        fireDb.child("students").push(state,(err)=>{
          if(err){
            toast.error(err);
          }
          else{
            toast.success("Added Successfully");
          }
        });
      } else{
        fireDb.child(`students/${id}`).set(state,(err)=>{
          if(err){
            toast.error(err);
          }
          else{
            toast.success("student updated successfully");
          }
        });
      }
        setTimeout(()=>navigate("/"),500);
    }
  };



  
  return (
    
    <div className='wrapper'>
      <div className='header'>
      <h1>Admission</h1>
      {/* <p>Add New Student</p> */}
      </div>

      
      <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btnc default " onClick={() => navigate("/")}>Back</button>
                <div />
            </div>
            <div className="main">
      <div className='form-container'>
        <form className="form-group">
            <div className="mb-3 ">
            <label className="form-label" htmlFor="fname">Enter first name:-</label>
            <input
              name='fname'
              className="form-control"
              type="text"
              placeholder="first name"
              id="fname"
              value={fname}
              onChange={handleInputChange}
              
            />
          
          </div>
          <div className="mb-3 ">
            <label className="form-label" htmlFor="lname">Enter last name:-</label>
            <input
            type="text"
            id='lname'
            name='lname'
            placeholder="last name"
            value={lname}
            onChange={handleInputChange}
            className="form-control"
              
            />
          
          </div>
          <div className="mb-3 ">
            <label className="form-label" htmlFor="email">Enter email:-</label>
            <input
            type="email"
            id='email'
            name='email'
            placeholder="Enter email"
            value={email}
            onChange={handleInputChange}
            className="form-control"
              
            />
            {/* {error && <h2 style={{color:'red'}}></h2>} */}
          </div>

            


          <div className="mb-3 ">
            <label  className="form-label" htmlFor="phone">Enter phone no:-</label>
            <input
            type="number"
            id='phone'
            name='phone'
            placeholder="enter phone number"
            value={phone}
            onChange={handleInputChange}
            className="form-control"
            />
          
          </div>

          <div className="mb-3 ">
            <label className="form-label" htmlFor="appliedcourse">Enter Applied course</label>
            <input
            type="text"
            id='appliedcourse'
            name='appliedcourse'
            placeholder="enter applied course"
            value={appliedcourse}
            onChange={handleInputChange}
            className="form-control"
        
            />
          
          </div>

          <button className="btnc  default btn-outline-light" type="submit" onClick={handleSubmit} value="save">Add Student</button>
          <button className="btnc default btn-outline-light" type="submit" onClick={()=>navigate("/")}>Back</button>
        </form>
      </div>

      </div>

</div >
  );
};

export default NewAdmissionForm;
