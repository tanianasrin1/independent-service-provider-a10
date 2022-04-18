// import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

  const from = location.state?.from?.pathname || "/"; 
   
  let errorElement;

    const [
      signInWithEmailAndPassword,
      user,
      
      error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(user){
      navigate(from, { replace: true });
    }

    if (error) {
         
      errorElement= <p className='text-danger'>Error: {error.message}</p>
       
      
    }
  
    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        signInWithEmailAndPassword(email, password);
        

    }

    const navigateRegister = event =>{
        navigate('/register');

    }

    const resetPassword = async() =>{
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      alert('Sent email');

    }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="login-title text-center mt-4">Please login!!!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref={passwordRef} type="password" placeholder="Password"  required/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to travel blog? <Link to="/register" className="text-danger pe-auto text-decoration-none" onClick={navigateRegister}>Please Register</Link> </p>
      <p>Forget Password? <Link to="/register" className="text-danger pe-auto text-decoration-none" onClick={resetPassword}>Reset Password</Link> </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
