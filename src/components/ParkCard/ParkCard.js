import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import parkPhoto from '../../assets/parkCardImg.jpg'
import './ParkCard.css';

export const ParkCard = ({name, designation, id}) => {

  return(
    <article className='park-card'>
      <img className='park-card-img' src={parkPhoto} alt='trees and mountains' />
      <div className='name-des'>
        <h3 className='park-card-name'>{name}</h3>
        <p className='park-card-des'>{designation}</p>
      </div>
      <Link to={`/details/${id}`}>
        <button className='more-info'>Details</button>
      </Link>
    </article>
  )
}

ParkCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string
}