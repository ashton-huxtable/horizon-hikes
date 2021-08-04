import ParkCard from '../ParkCard/ParkCard';
import React from 'react';

import './ParkList.css';


const ParkList = (props) => {

    const parkCards = props.parksByState.map(park => {
      return(
        <ParkCard 
          name={park.name}
          designation={park.designation}
          id={park.parkCode}
          key={park.parkCode}
        />
      )

    })
  return(
    <section className='card-container'>
      {parkCards}
    </section>
  )
}


export default ParkList;