import React from 'react';
import './ExtraPart.css'
import image from '../../../images/image/i (1).jpg'

const ExtraPart = () => {
    return (
        <div id="ExtraPart">
            <h2 className='extraPart-title mt-5'>JOURNEY BEGINS</h2>
           <div className='extraPart-details container mt-5'>
              <div className='row'>
              <div className=' col-lg-6 '>
                   <h6 className='fs-1 extraPart-title'>Online store</h6>
                   <p>We use a selection of high quality cloud hosts, many of them hosting millions of sites for their customers. We invested a lot of time to make sure your network doesn't leave any footprints.The ability to forget almost every technical aspect of your PBN setup, maintenance, security and performance means your only focus need be on adding more blogs to rank more keywords.</p>
               </div>
               <div className='col-lg-6'>
                   <img src={image} alt="" />
               </div>
              </div>
           </div>
        </div>
    );
};

export default ExtraPart;