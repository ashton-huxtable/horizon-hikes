import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { filterSunriseSunsetData } from '../Util/utilities';
import { getSunriseSunsetData } from '../Util/apiCalls';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';


const SunriseSunset = ({latitude, longitude}) => {

  const [dateState, setDateState] = useState(new Date())
  const [sunRiseSet, setSunRiseSet] = useState({})

  const changeDate = (e) => {
    setDateState(e)
  }

  console.log(dateState)

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

  console.log(sunRiseSet, 'outside')

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
    </section>
  )

}

export default SunriseSunset;