import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Cards from './components/Cards';
import ViewStudents from './components/ViewStudents';
import Home from './components/Home';
// import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import NewAdmissionForm from './components/NewAdmissionForm';

import ViewCourses from './components/ViewCourses';
import AddCourse from './components/AddCourse';
import Search from './components/Search';
import Search2 from './components/Search2';

function App() {
  return (
    
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/cards" element={<Cards/>}/>
      <Route exact path='/newAdmissionForm' element={<NewAdmissionForm/>}/>
      <Route exact path='/updateAd/:id' element={<NewAdmissionForm/>}/>
      <Route exact path="/viewStudents" element={<ViewStudents/>}/>
      <Route exact path="/addCourse" element={<AddCourse/>}/>
      <Route exact path="/viewCourses" element={<ViewCourses/>}/>
      <Route exact path='/update/:id' element={<AddCourse/>}/>
      <Route exact path="/search" element={<Search/>}/>
      <Route exact path="/search2" element={<Search2/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
    

  
  );
}

export default App;
