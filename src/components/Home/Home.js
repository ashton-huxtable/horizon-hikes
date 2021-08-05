import { filterParksForHiking } from '../Util/utilities';
import { getParksByActivities } from '../Util/apiCalls';
import ParkDetails from '../ParkDetails/ParkDetails';
import ParkList from '../ParkList/ParkList';
import React, {useState, useEffect} from 'react';
import StatePicker from '../StatePicker/StatePicker';
import { Route, Switch } from 'react-router-dom';




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
  },[])

  const selectState = (stateName) => {
    let parksInState = parks.parks.filter(park => park.states.includes(stateName))
    setParksByState(parksInState)
  }

  return(
    <main>
      <h2>homepage</h2>
        <Switch>
          <Route exact path='/' render={() => <StatePicker selectState={selectState}/> } />
          <Route  path='/parksByState' render={() => <ParkList parksByState={parksByState}/>}/>
          <Route path='/details/:parkCode' render={({match}) => {
            const selectedPark = parksByState.find(park => park.parkCode === match.params.parkCode)
            console.log(selectedPark)
            return <ParkDetails selectedPark={selectedPark} />
          }}/>
        </Switch>
    </main>
  )
}

export default Home;
