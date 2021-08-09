import { filterParksForHiking } from '../Util/utilities';
import { getParksByActivities } from '../Util/apiCalls';
import NotFound from '../Error/NotFound';
import ParkDetails from '../ParkDetails/ParkDetails';
import ParkList from '../ParkList/ParkList';
import React, {useState, useEffect} from 'react';
import StatePicker from '../StatePicker/StatePicker';
import { Route, Switch } from 'react-router-dom';
import FutureVisits from '../FutureVisits/FutureVisits';

import '../Error/Error.css'

const Home = () => {

  const [parks, setParks] = useState([])
  const [parksByState, setParksByState] = useState([])
  const [futureTrips, setFutureTrips] = useState([])
  const [error, setError] = useState('')

  useEffect(() =>{ 
    getParksByActivities()
    .then(data => {
     const hikeParks = filterParksForHiking(data)
      setParks(hikeParks)
    })
    .catch(err => setError('Something went wrong. Please try again later'))
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
        {error && <h2 className='error'>{error}</h2>}
        <Route exact path='/' render={() => <StatePicker selectState={selectState}/> } />
        {(!parksByState.length && !error) ?
          <h2 className='error'>Loading park list...</h2> :
          <Route path='/parksByState' render={() => <ParkList parksByState={parksByState}/>}/>
        }
        <Route path='/details/:parkCode' render={({match}) => {
          const selectedPark = parksByState.find(park => park.parkCode === match.params.parkCode)
          return <ParkDetails selectedPark={selectedPark} addToFutureTrips={addToFutureTrips} />
        }}/>
        {!futureTrips.length ?
          <h2 className='error'>No trips saved! Return to home to start planning!</h2> :
          <Route path='/futureVisits' render={() => <FutureVisits futureTrips={futureTrips}/>} />
        }
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  )
}

export default Home;
