import React from 'react';
import { Link } from 'react-router-dom';
import Article from '../Article/Article';
import TourGuide from '../TourGuide/TourGuide';
import './Services.css'

const Services = () => {
    return (
        <div id="Services">
            <h2 className='text-center service-title mt-5'>My Services</h2>
            <Article></Article>
            <TourGuide></TourGuide>
            <div className='text-center'>
                 <Link to = "/checkout">
                     <button className='btn btn-primary'>Checkout</button>
                 </Link>
            </div>
        </div>
    );
};

export default Services;