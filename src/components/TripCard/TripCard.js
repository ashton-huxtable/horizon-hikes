import React from 'react';

const TripCard = ({image, name, date, sunrise, sunset}) => {

  return(
    <article className='trip-card'>
      <img src={image.url} alt={image.altText} />
      <div className='trip-info'>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{sunrise}</p>
        <p>{sunset}</p>
      </div>
    </article>
  )

}

export default TripCard;