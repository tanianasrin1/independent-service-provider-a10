import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: '300px'}} d-flex justify-contain-center align-items-center className='w-100'>
              <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default Loading;