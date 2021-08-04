import React from 'react';

import './ParkCard.css';

const ParkCard = ({name, designation}) => {

  return(
    <article className='park-card'>
        <h3>{name}</h3>
        <p>{designation}</p>
        <button>More Info</button>
    </article>
  )
}

export default ParkCard