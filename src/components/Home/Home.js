import { filterParksForHiking } from '../Util/utilities';
import { getParksByActivities } from '../Util/apiCalls';
import NotFound from '../Error/NotFound';
import ParkDetails from '../ParkDetails/ParkDetails';
import ParkList from '../ParkList/ParkList';
import React, {useState, useEffect} from 'react';
import StatePicker from '../StatePicker/StatePicker';
import { Route, Switch } from 'react-router-dom';
import FutureVisits from '../FutureVisits/FutureVisits';

const Home = () => {

  const [parks, setParks] = useState([])
  const [parksByState, setParksByState] = useState([])
  const [futureTrips, setFutureTrips] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  useEffect(() =>{ 
    getParksByActivities()
    .then(data => {
     const hikeParks = filterParksForHiking(data)
      setParks(hikeParks)
    })
  },[])

  const selectState = (stateName) => {
    let parksInState = parks.parks.filter(park => park.states.includes(stateName))
    setParksByState(parksInState)
  }

  const addToFutureTrips = (trip) => {
    setFutureTrips(allTrips =>[...allTrips, trip])
  }

  return(
    <main>
      <Switch>
        <Route exact path='/' render={() => <StatePicker selectState={selectState}/> } />
        <Route path='/parksByState' render={() => <ParkList parksByState={parksByState}/>}/>
        <Route path='/futureVisits' render={() => <FutureVisits futureTrips={futureTrips}/>} />
        <Route path='/details/:parkCode' render={({match}) => {
          const selectedPark = parksByState.find(park => park.parkCode === match.params.parkCode)
          return <ParkDetails selectedPark={selectedPark} addToFutureTrips={addToFutureTrips} />
        }}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  )
}

export default Home;
