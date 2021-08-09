import { filterParksForHiking } from '../Util/utilities';
import { getParksByActivities } from '../Util/apiCalls';
import { NotFound } from '../Error/NotFound';
import ParkDetails from '../ParkDetails/ParkDetails';
import { ParkList } from '../ParkList/ParkList';
import React, {useState, useEffect} from 'react';
import { StatePicker } from '../StatePicker/StatePicker';
import { Route, Switch } from 'react-router-dom';
import { FutureVisits } from '../FutureVisits/FutureVisits';

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

  console.log(parks)

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
        {!!error && <h2 className='error'>{error}</h2>}
        <Route exact path='/' render={() => <StatePicker selectState={selectState}/> } />
        <Route path='/parksByState'>
          {(!parksByState.length && !error) ?
            <h2 className='error'>Loading park list...</h2> :
            <ParkList parksByState={parksByState}/>
          }
        </Route>
        <Route path='/futureVisits'>
          {!futureTrips.length ?
            <h2 className='error'>No trips saved! Return to home to start planning!</h2> :
            <FutureVisits futureTrips={futureTrips}/>
          }
        </Route>
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
