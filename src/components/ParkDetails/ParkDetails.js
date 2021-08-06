import { filterParkDetails } from '../Util/utilities';
import { getParkDetailsData } from '../Util/apiCalls';
import { Link } from 'react-router-dom';
import React, { useState, useEffect }from 'react';
import InfoCard from '../InfoCard/InfoCard';
import SunriseSunset from '../SunriseSunset/SunriseSunset';
import ParkActivities from '../ParkActivities/ParkActivities';



const ParkDetails = ({selectedPark}) => {

  const [parkDetails, setParkDetails] = useState({});

  const getDetails = () => {
    getParkDetailsData(selectedPark.parkCode)
      .then(data => {
        const details = filterParkDetails(data)
        setParkDetails(details)
      })
  }

  useEffect(() => {
    getDetails()
  }, [])

  console.log(parkDetails.activities)


    return(
      <main className='park-details'>
        <Link to='/parksByState'>
          <button>go back</button>

        </Link>
        {
          !Object.keys(parkDetails).length ?
          <h2>loading......</h2> :
         <InfoCard name={parkDetails.fullName} address={parkDetails.address} description={parkDetails.description}/>
        }
        <SunriseSunset latitude={parkDetails.latitude} longitude={parkDetails.longitude}/>

        <section className='activities'>
          {
            !Object.keys(parkDetails).length ?
            <h2>loading activities.... </h2> :
          < ParkActivities activities={parkDetails.activities}/>
          }
        </section>
      </main>
    )
  }

export default ParkDetails;