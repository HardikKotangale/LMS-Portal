import React from 'react'
import { Link } from 'react-router-dom';
export default function Start() {
   
  return (
    <div>
         <Link to={`/HomeStudent`}>
            <button className="btnv btnv-edit">student</button>
        </Link>
        <Link to={`/admin`}>
            <button className="btnv btnv-edit">Admin</button>
        </Link>
       
    </div>
  );
}