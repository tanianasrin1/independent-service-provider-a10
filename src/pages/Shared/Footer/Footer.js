import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
       <div className='footer'>
            <footer className='text-center mt-5'>
            <p className='footer-title'> @copyright {year} </p>
        </footer>
       </div>
    );
};

export default Footer;