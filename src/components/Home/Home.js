import React, {useState, useEffect} from 'react';
import StatePicker from '../StatePicker/StatePicker';


import { getParksByActivities } from '../Util/apiCalls';


const Home = () => {

  const [parks, setParks] = useState([])
  const [parksByState, setParksByState] = useState([])


  const getParkInfo = () => {
    getParksByActivities()
      .then(data => {
        const parksWithHiking = data.data.find(activity => activity.name === 'Hiking')
        setParks(parksWithHiking)
      })
  }

  useEffect(() =>{ 
    getParkInfo()
    console.log(parks)
  },[])

  const selectState = (stateName) => {
    let parksInState = parks.parks.filter(park => park.states.includes(stateName))
    setParksByState(parksInState)
    console.log(parksByState, 'inside')
  }

  console.log(parksByState, 'outside')

 

  return(
    <main>
      <h2>homepage</h2>
      <StatePicker selectState={selectState}/>

    </main>
  )
}

export default Home;