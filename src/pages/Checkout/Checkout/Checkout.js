import React from 'react';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='container  mt-4'>
            <h2 className='checkout-title text-center'>Please Checkout!!!</h2>
            <div>
                <div >
                    <h3>Happy Client</h3>
                </div>

              <div className='clients'>
              <div className='client1 m-3 p-3'>
                <p className="text-center mt-5"><small>Researching WordPress travel blogs is certainly an interesting and important first step when creating  travel site</small></p>
                </div>
                <div className='client2 m-3 p-3'>
                <p className="text-center mt-5"><small>Researching WordPress travel blogs is certainly an interesting and important first step when creating  travel site</small></p>
                </div>
                <div className='client3 m-3 p-3'>
                <p className="text-center mt-5"><small>Researching WordPress travel blogs is certainly an interesting and important first step when creating  travel site</small></p>
                </div>
              </div>
                
            </div>
              
        </div>
    );
};

export default Checkout;