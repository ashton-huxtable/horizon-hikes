import React from 'react';
import TripCard from '../TripCard/TripCard';

const FutureVisits = ({futureTrips}) => {

  const userTrips = futureTrips.map(trip => {
      return(
        <TripCard 
          image={trip.image}
          name={trip.fullName}
          date={trip.tripDate.tripDate}
          sunrise={trip.sunRiseSet.sunrise}
          sunset={trip.sunRiseSet.sunset}
          id={trip.id}
          key={trip.id}
        />
      )
  })

  return(
    <section className='future-trips'>
      {userTrips}
    </section>
  )
}

export default FutureVisits;