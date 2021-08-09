import React from 'react';
import PropTypes from 'prop-types';

import './InfoCard.css'

export const InfoCard = ({name, address, description, image}) => {

  const {
    city,
    stateCode,
  } = address

  return(
    <article className='name-address-details'>
      <div className='details'>
        <img className='detail-image' src={image.url} alt={image.altText} />
        <div className='name-address'>
          <h3 className='details-name'>Welcome to {name}!</h3>
          <p className='details-address'>{city}, {stateCode}</p> 
        </div>
      </div>
      <p className='description'>{description}</p>
    </article>

  )
}

InfoCard.propTypes = {
  name: PropTypes.string,
  address: PropTypes.object,
  description: PropTypes.string,
  image: PropTypes.object
}
