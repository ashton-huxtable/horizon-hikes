import PropTypes from 'prop-types';
import React from 'react';

import './TripCard.css'

export const TripCard = ({image, name, date, sunrise, sunset}) => {

  return(
    <article className='trip-card'>
      <img className='trip-image' src={image.url} alt={image.altText} />
      <div className='trip-info'>
        <h3 className='trip-text'>{name}</h3>
        <p className='trip-text'>{date}</p>
        <p className='trip-text'>Sunrise:  {sunrise}</p>
        <p className='trip-text'>Sunset:  {sunset}</p>
      </div>
    </article>
  )
}

TripCard.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  date: PropTypes.string,
  sunrise: PropTypes.string,
  sunset: PropTypes.string
}