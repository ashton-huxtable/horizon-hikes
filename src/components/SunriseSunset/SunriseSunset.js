import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { filterSunriseSunsetData } from '../Util/utilities';
import { getSunriseSunsetData } from '../Util/apiCalls';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';


const SunriseSunset = ({latitude, longitude, image, fullName, addToFutureTrips, id}) => {

  const [dateState, setDateState] = useState(new Date())
  const [sunRiseSet, setSunRiseSet] = useState({})
  const [newTrip, setNewtrip] = useState({})

  const changeDate = (e) => {
    setDateState(e)
  }

  const getData = () => {
    const date = moment(dateState).format('YYYY-MM-DD')
    getSunriseSunsetData(latitude, longitude, date)
      .then(data => {
        const times = filterSunriseSunsetData(data)
        setSunRiseSet(times)
      })
  }

  useEffect(() => {
    getData()
  }, [dateState])

  const submitTrip = () => {
    const tripDate = moment(dateState).format('MMMM Do YYYY')
    setNewtrip({'image': image, 
      'fullName': fullName, 
      'sunRiseSet': sunRiseSet, 
      'tripDate': {tripDate}, 
      'id': id})
  } 

  const addTrip = () => {
    if (Object.keys(newTrip).length){
      addToFutureTrips(newTrip)
    }
  }

  useEffect(() => {
    addTrip()
  }, [newTrip])

  return(
    <section className='calendar-info'>
      <h4>Please choose a date below to see sunrise and sunset times</h4>
      <Calendar className='calendar' 
        onChange={setDateState}
        value={dateState}
      />
      <p>Current selected date is: {moment(dateState).format('MMMM Do YYYY')}</p>
      <section className='sunrise'>
        <h5>Sunrise:{sunRiseSet.sunrise}</h5>
      </section>
      <section className='sunset'>
        <h5>Sunset: {sunRiseSet.sunset}</h5>
      </section>
      <button onClick={submitTrip}>Add to Future Trips!</button>
    </section>
  )

}

export default SunriseSunset;