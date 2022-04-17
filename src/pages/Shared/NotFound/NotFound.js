import React from 'react';
import notFound from '../../../images/image/f (1).jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5 text-danger'>Travel sleeping</h2>
            <img className='w-50 notFound' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;