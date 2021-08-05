import React from 'react';
import { Link } from 'react-router-dom';

import './ParkCard.css';

const ParkCard = ({name, designation, id}) => {


  return(
    <article className='park-card'>
      <h3>{name}</h3>
      <p>{designation}</p>
      <Link to={`/details/${id}`}>
        <button>More Info</button>
      </Link>
    </article>
  )
}

export default ParkCard