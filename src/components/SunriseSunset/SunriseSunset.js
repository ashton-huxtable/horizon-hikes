import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { filterSunriseSunsetData } from '../Util/utilities';
import { getSunriseSunsetData } from '../Util/apiCalls';
import PropTypes from 'prop-types';
import moment from 'moment';

import sunrise from '../../sunrise.png'
import sunset from '../../sunset.png';
import 'react-calendar/dist/Calendar.css';
import './SunriseSunset.css'
import '../Error/Error.css'



const SunriseSunset = ({latitude, longitude, image, fullName, addToFutureTrips, id}) => {

  const [dateState, setDateState] = useState(new Date())
  const [sunRiseSet, setSunRiseSet] = useState({})
  const [newTrip, setNewtrip] = useState({})
  const [error, setError] = useState('')


  useEffect(() => {

  const getData = () => {
    const date = moment(dateState).format('YYYY-MM-DD')
    getSunriseSunsetData(latitude, longitude, date)
      .then(data => {
        const times = filterSunriseSunsetData(data)
        setSunRiseSet(times)
      })
      .catch(err => setError('Unable to get sunrise and sunset times. Please try again later!'))
  }
    getData()
  }, [dateState, latitude, longitude])

  const submitTrip = () => {
    const tripDate = moment(dateState).format('MMMM Do YYYY')
    if(newTrip.sunRiseSet !== sunRiseSet) {
      setNewtrip({'image': image, 
      'fullName': fullName, 
      'sunRiseSet': sunRiseSet, 
      'tripDate': {tripDate}, 
      'id': id})
    } else  {
      return null
    }
  } 
  
 

  useEffect(() => {
    const addTrip = () => {
      if (Object.keys(newTrip).length){
        addToFutureTrips(newTrip)
      }
    }
    addTrip()
  }, [newTrip, addToFutureTrips])

  return(
    <section className='calendar-info'>
      <h4 className='choose-date'>Please choose a date below to see sunrise and sunset times!</h4>
      <Calendar className='calendar' 
        onChange={setDateState}
        value={dateState}
      />
      <p className='selected-date'>Current selected date is: {moment(dateState).format('MMMM Do YYYY')}</p>
      {(!Object.keys(sunRiseSet).length && error) ?
        <h2 className='error'>{error}</h2> :
        <div className='sunrise-sunset'>
          <section className='sunrise'>
            <img className='riseset-img' src={sunrise} alt='sunrise icon'/>
            <h5>Sunrise:  {sunRiseSet.sunrise}</h5>
          </section>
          <section className='sunset'>
            <img className='riseset-img'src={sunset} alt='sunset icon'/>
            <h5>Sunset:  {sunRiseSet.sunset}</h5>
          </section>
        </div>
      }
      <button className='add-trip' onClick={submitTrip}>Add to Future Trips!</button>
    </section>
  )

}

SunriseSunset.propTypes = {
  addToFutureTrips: PropTypes.func,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  image: PropTypes.object,
  fullName: PropTypes.string,
  id: PropTypes.string
}

export default SunriseSunset;