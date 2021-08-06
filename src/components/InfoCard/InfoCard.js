import React from 'react';

const InfoCard = ({name, address, description}) => {

  const {
    city,
    stateCode,
  } = address

  return(
    <article className='name-address-details'>
      <div className='name-address'>
        <h3>Welcome to {name}!</h3>
        <p>{city}, {stateCode}</p> 
      </div>
      <p className='description'>{description}</p>
    </article>

  )
}

export default InfoCard