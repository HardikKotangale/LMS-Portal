import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css"
import HomeStudent from './components/Student/HomeStudent';
import LoginStudent from './components/Student/LoginStudent';
import Start from './components/Start';
import UserProfile from './components/Student/Userprofile';
import PortalHeader from './components/Student/PortalHeader';
import ChangePass from './components/Student/ChangePass';
import CoursesStd from './components/Student/CoursesStd';
import AddCoursesStd from './components/Student/AddCoursesStd';

function App() {
  return (
    
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route exact path="/HomeStudent" element={<HomeStudent/>}/>
      <Route exact path="/LoginStudent" element={<LoginStudent/>}/>
      <Route exact path="/UserProfile/:id" element={<UserProfile/>}/>
      <Route exact path="/PortalHeader" element={<PortalHeader/>}/>
      <Route exact path="/ChangePass/:id" element={<ChangePass/>}/>
      <Route exact path="/AddCoursesStd/:id" element={<AddCoursesStd/>}/>
      <Route exact path="/CoursesStd/:id" element={<CoursesStd/>}/>
      <Route exact path="/" element={<Start/>}/>



      
      </Routes>
    </div>
    </BrowserRouter>
    
    

  
  );
}

export default App;
