import React from 'react';
import './AboutMe.css';
import profile from '../../../images/image/m.jpg';

const AboutMe = () => {
    return (
        <div className='container'>
            <h1 className='about-title mt-4'>About Me:</h1>
            <div className='text-center profile-cart mt-5'>
                
                <img className='profile' width={150} src={profile} alt="" />
                <br />
                <br />
                Name: Tania Nasrin Eva
                <br />
                <strong>Future Goals:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat sed velit modi, veniam rerum exercitationem dolor illo! Ipsum, ratione?

            </div>
        </div>
    );
};

export default AboutMe;