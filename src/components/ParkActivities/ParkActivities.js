import React from 'react';

const ParkActivities = ({activities}) => {
  const moreActivites = activities.map(activity => {
    return(
      <p>{activity.name}</p>
    )
  })

  return(
    <p className='activities'>{moreActivites}</p>
  )
}

export default ParkActivities;