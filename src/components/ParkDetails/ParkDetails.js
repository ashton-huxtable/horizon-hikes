import { filterParkDetails } from '../Util/utilities';
import { getParkDetailsData } from '../Util/apiCalls';
import { InfoCard } from '../InfoCard/InfoCard';
import { Link } from 'react-router-dom';
import { ParkActivities } from '../ParkActivities/ParkActivities';
import React, { useState, useEffect }from 'react';
import SunriseSunset from '../SunriseSunset/SunriseSunset';

import arrow from '../../arrow.png'

import PropTypes from 'prop-types'
import '../Error/Error.css'


const ParkDetails = ({selectedPark, addToFutureTrips}) => {

  const [parkDetails, setParkDetails] = useState({});
  const [error, setError] = useState('')



  useEffect(() => {
    const getDetails = () => {
      getParkDetailsData(selectedPark.parkCode)
        .then(data => {
          const details = filterParkDetails(data)
          setParkDetails(details)
        })
        .catch(err => setError('Something went wrong. Please try again later!'))
      }

    getDetails()
  }, [selectedPark])

  return(
    <div>
    {(!Object.keys(parkDetails).length && error) ? <h2 className='error'>{error}</h2> :
      <main className='park-details'>
        <Link to='/parksByState'>
          <img className='go-back' src={arrow} alt='back arrow' />
        </Link>
        {
          (!Object.keys(parkDetails).length && !error) ?
          <h2 className='error'>Loading park details...</h2> :
          <section>
            <section className='top'>
              <InfoCard name={parkDetails.fullName} 
                address={parkDetails.address} 
                description={parkDetails.description}
                image={parkDetails.images[0]}/>
            </section>
            <SunriseSunset latitude={parkDetails.latitude} 
              longitude={parkDetails.longitude}
              fullName={parkDetails.fullName}
              image={parkDetails.images[0]}
              id={parkDetails.id}
              addToFutureTrips={addToFutureTrips}
            />
            <section className='activities'>
              < ParkActivities activities={parkDetails.activities}/>
            </section>
          </section>
        }
      </main>
      }
    </div>
  )
}

  ParkDetails.propTypes = {
    selectedPark: PropTypes.object,
    addToFutureTrips: PropTypes.func
  }

export default ParkDetails;