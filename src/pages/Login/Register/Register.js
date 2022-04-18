import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
 const navigateLogin = () =>{
     navigate('/login')
 }
    return (
        <div className='register-form mt-4'>
            <h2 style={{textAlign: 'center'}} className="register-title">Please Register!!!</h2>
            <form className='mt-3' >
                <input type="text" name="name" id="" placeholder='Your name' />
                
                <input type="email" name="email" id="" placeholder='Your email' required/>
                
                <input type="password" name="password" id=""  placeholder='Your password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogin} >Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;