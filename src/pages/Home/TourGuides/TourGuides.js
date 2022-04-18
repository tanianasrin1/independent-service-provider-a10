import React from 'react';
import './TourGuides.css'

const TourGuides = ({tourGuide}) => {
    const {name, cost, duration, ratting} = tourGuide;
    return (
        <div className='tourGuides'>
            <h4>Name: {name} </h4>
            <h6> Cose: {cost} </h6>
            <h6>Duration: {duration}  </h6>
            <p>Ratting: {ratting} </p>
        </div>
    );
};

export default TourGuides;