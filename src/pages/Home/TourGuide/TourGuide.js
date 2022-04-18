import React from 'react';
import TourGuides from '../TourGuides/TourGuides';
import './TourGride.css'

const tourGuides = [
    {id:1, name:'Mountain', rating:'4', duration:'2days', cost:4000},
    {id:1, name:'Sea', rating:'4.0', duration:'3days', cost:6000 },
    {id:1, name:'Snowfall', rating:'5', duration:'4days', cost:8000}
] 

const TourGuide = () => {

    return (
        <div className='container mt-4'>
            <h2 className='Tour-guide'>Tour Guide Blogs:</h2>

           <div className='tour-guide'>
           {
               tourGuides.map(tourGuide => <TourGuides
                  key = {tourGuide.id}
                  tourGuide = {tourGuide}
               ></TourGuides>)
            }
           </div>
        </div>
    );
};

export default TourGuide;