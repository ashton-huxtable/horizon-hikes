import { getParksByActivities } from '../Util/apiCalls';
import { Parklist } from '../ParkList/ParkList';
import React, {useState, useEffect} from 'react';
import StatePicker from '../StatePicker/StatePicker';




export const Home = () => {

  const [parks, setParks] = useState([])
  const [parksByState, setParksByState] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const getParkInfo = () => {
    getParksByActivities()
      .then(data => {
        const parksWithHiking = data.data.find(activity => activity.name === 'Hiking')
        setParks(parksWithHiking)
      })
  }

  useEffect(() =>{ 
    getParkInfo()
  },[])

  const selectState = (stateName) => {
    let parksInState = parks.parks.filter(park => park.states.includes(stateName))
    setParksByState(parksInState)
  }

  console.log(parksByState, 'outside')

 

  return(
    <main>
      <h2>homepage</h2>
      {!parksByState.length ?
        <StatePicker selectState={selectState}/> :
        <ParkList />
      }
      

    </main>
  )
}

