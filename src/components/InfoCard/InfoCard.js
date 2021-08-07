import React from 'react';

export const InfoCard = ({name, address, description, image}) => {

  const {
    city,
    stateCode,
  } = address

  return(
    <article className='name-address-details'>
      <img src={image.url} alt={image.altText} />
      <div className='name-address'>
        <h3>Welcome to {name}!</h3>
        <p>{city}, {stateCode}</p> 
      </div>
      <p className='description'>{description}</p>
    </article>

  )
}
