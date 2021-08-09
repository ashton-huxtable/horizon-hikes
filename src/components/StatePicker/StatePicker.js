import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import USAMap from 'react-usa-map';
import './StatePicker.css';

const StatePicker = (props) => {

  const mapHandler = (event) => {
    props.selectState(event.target.dataset.name)
  }

  return(
    <main>
      <h2 className='choose-state'>Welcome to Horizon Hikes! Please choose a state below to start planing your trip! </h2>
      <Link to='/parksByState'>
        <USAMap onClick={mapHandler}/>
      </Link>
    </main>
  )
}

export default StatePicker

