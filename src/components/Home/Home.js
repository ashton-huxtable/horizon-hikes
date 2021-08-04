import { filterParksForHiking } from '../Util/utilities';
import { getParksByActivities } from '../Util/apiCalls';
import ParkList from '../ParkList/ParkList';
import React, {useState, useEffect} from 'react';
import StatePicker from '../StatePicker/StatePicker';




const Home = () => {

  const [parks, setParks] = useState([])
  const [parksByState, setParksByState] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const getParkInfo = () => {
    getParksByActivities()
      .then(data => {
       const hikeParks = filterParksForHiking(data)
        setParks(hikeParks)
      })
  }

  useEffect(() =>{ 
    getParkInfo()
    console.log(parks)
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
          <ParkList parksByState={parksByState}/>
        }
    </main>
  )
}

export default Home;
