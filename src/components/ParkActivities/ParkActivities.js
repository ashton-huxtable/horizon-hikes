import PropTypes from 'prop-types';
import React from 'react';

import './ParkActivities.css'

export const ParkActivities = ({activities}) => {
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

ParkActivities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object)
}

