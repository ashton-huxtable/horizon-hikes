import PropTypes from 'prop-types';
import React from 'react';
import { TripCard } from '../TripCard/TripCard';

export const FutureVisits = ({futureTrips}) => {

  const userTrips = futureTrips.map(trip => {
    const {image, fullName, tripDate, sunRiseSet, id} = trip
      return(
        <TripCard 
          image={image}
          name={fullName}
          date={tripDate.tripDate}
          sunrise={sunRiseSet.sunrise}
          sunset={sunRiseSet.sunset}
          id={id}
          key={id}
        />
      )
  })

  return(
    <section className='future-trips'>
      {userTrips}
    </section>
  )
}

FutureTrips.propTypes = {
  futureTrips: PropTypes.arrayOf(PropTypes.object)
}