import React from 'react';
import '../css/PoratalBody.css';
import Navbar from './NavBarPortal';

const PortalBody = () => {

    return <>
        <div id="PortalBodyMain" className='mx-auto'>
          
                <div className='container-xl NavrBarMain'>
                    <Navbar/>
                    
                </div>
                <div style={{
                    height : '500px',
                    marginTop :'auto'
                }} className ='NavrBarMain'>
                    
                    Body Of Pages
                </div>
        </div>
    </>
}
export default PortalBody;
