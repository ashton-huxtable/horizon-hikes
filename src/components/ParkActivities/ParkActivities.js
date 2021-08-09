import React from 'react';

import './ParkActivities.css'

const ParkActivities = ({activities}) => {
  const moreActivites = activities.map(activity => {
    return(
      <p key={activity.id}>{activity.name}</p>
    )
  })

  return(
    <section className='activities'>
      <p className='other-activities'>
        Other Activities in the Park:
      </p>
      <div className='activity'>
        {moreActivites}
      </div>
    </section>
  )
}

export default ParkActivities;