import React from 'react';

const ParkActivities = ({activities}) => {
  const moreActivites = activities.map(activity => {
    return(
      <p key={activity.id}>{activity.name}</p>
    )
  })

  return(
    <section className='activities'>{moreActivites}</section>
  )
}

export default ParkActivities;