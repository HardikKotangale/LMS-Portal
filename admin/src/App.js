import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Home } from './components/Home';
import {Routes,Route} from "react-router-dom"
import Login from "./components/Login";
import Footer from "./components/Footer"

const oytieLogo=new URL("./images/Oytie.png",import.meta.url);
const facebookLogo=new URL("./images/facebook.png",import.meta.url);
const youtubeLogo=new URL("./images/youtube.png",import.meta.url);
const whatsAppLogo=new URL("./images/whatsapp.png",import.meta.url);
const linkedInLogo=new URL("./images/linkedin.png",import.meta.url);
const instagramLogo=new URL("./images/instagram.png",import.meta.url);
const emailLogo=new URL("./images/email.png",import.meta.url);
const callLogo=new URL("./images/call.png",import.meta.url);

function App() {
  return (
    <div>

   <Header />
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
   </Routes>
   <Footer handles1={whatsAppLogo} handles2={instagramLogo} handles3={facebookLogo} handles4={youtubeLogo} handles5={linkedInLogo} contactUs1={callLogo} contactUs2={emailLogo}></Footer>
   
    </div>
  );
}

export default App;
