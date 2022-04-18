import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user,  error] = useSignInWithGoogle(auth);
  
    const navigate = useNavigate(); 
   
    let errorElement; 
    if (error) {
         
        errorElement= <p className='text-danger'>Error: {error.message}</p>
          
        
      }
     
    if(user){
        navigate('/home'); 
    }  

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: "1px"}} className='bg-dark w-50'></div>
                <p className='pt-2 px-2'>or</p>
                <div style={{height: "1px"}} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className='text-center'>
                <button 
                onClick={() => signInWithGoogle()}
                className='btn btn-primary w-50'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;