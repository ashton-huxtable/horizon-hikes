import { ParkCard } from '../ParkCard/ParkCard';
import PropTypes from 'prop-types';
import React from 'react';

import './ParkList.css'

export const ParkList = ({parksByState}) => {

    const parkCards = parksByState.map(park => {
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

ParkList.propTypes = {
  parksByState: PropTypes.arrayOf(PropTypes.object)
}