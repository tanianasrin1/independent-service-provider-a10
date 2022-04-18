import React from 'react';
import './TourGuides.css'

const TourGuides = ({tourGuide}) => {
    const {name, cost, duration, rating} = tourGuide;
    return (
        <div className='tourGuides'>
            <h4>Name: {name} </h4>
            <h6> Cose: {cost} </h6>
            <h6>Duration: {duration}  </h6>
            <p>Ratting: {rating} </p>
        </div>
    );
};

export default TourGuides;