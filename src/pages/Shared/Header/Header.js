import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
  const [user] = useAuthState(auth);

 const handleSignOut  = () =>{
   signOut(auth);
 }
    return (
        <>
 <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">TRAVEL BLOG</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#Services">Services</Nav.Link>
      <Nav.Link href="home#ExtraPart">ExtraPart</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/aboutMe">AboutMe</Nav.Link>
      {
        user ?
        <button onClick={handleSignOut}>sign out</button>
        :
        <Nav.Link as={Link} to="login">Login</Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


 
</>
    );
};

export default Header;