import { filterParksForHiking } from '../Util/utilities';
import { getParksByActivities } from '../Util/apiCalls';
import { FutureVisits } from '../FutureVisits/FutureVisits';
import { NotFound } from '../Error/NotFound';
import ParkDetails from '../ParkDetails/ParkDetails';
import { ParkList } from '../ParkList/ParkList';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { StatePicker } from '../StatePicker/StatePicker';

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
      if (Object.keys(parks).length) {
        let parksInState = parks.parks.filter(park => park.states.includes(stateName))
        setParksByState(parksInState)
      } else {
        return null
      }
    }

  const addToFutureTrips = (trip) => {
    setFutureTrips(allTrips =>[...allTrips, trip])
  }

  return(
    <main>
      <Switch>
        {!!error && <h2 className='error'>{error}</h2>}
        <Route exact path='/' >
          {!Object.keys(parks).length ?
          <h2 className='error'> Loading...</h2> :
          <StatePicker selectState={selectState}/> 
           }
          </Route> 
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
