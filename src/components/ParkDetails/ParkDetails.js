import { filterParkDetails } from '../Util/utilities';
import { getParkDetailsData } from '../Util/apiCalls';
import React, { useState, useEffect }from 'react';
import InfoCard from '../InfoCard/InfoCard';


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

    return(
      <main className='park-details'>
        {
          !Object.keys(parkDetails).length ?
          <h2>loading......</h2> :
         <InfoCard name={parkDetails.fullName} address={parkDetails.address} description={parkDetails.description}/>
        }
      </main>
    )
  }

export default ParkDetails;