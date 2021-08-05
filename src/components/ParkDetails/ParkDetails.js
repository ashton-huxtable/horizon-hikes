import { filterParkDetails } from '../Util/utilities';
import { getParkDetailsData } from '../Util/apiCalls';
import React, { useState, useEffect }from 'react';


const ParkDetails = ({selectedPark}) => {
  console.log(selectedPark)

  const [parkDetails, setParkDetails] = useState([]);



  const getDetails = () => {
    
    getParkDetailsData(selectedPark.parkCode)
      .then(data => {
        const details = filterParkDetails(data)
        setParkDetails(details)
      })
  }

  useEffect(() => {
    getDetails()
    console.log(parkDetails)
  }, [])

  console.log(parkDetails, 'outside')

    return(
      <h4>details!</h4>
    )
  }

export default ParkDetails;