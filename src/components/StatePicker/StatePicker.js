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
      <h2 className='choose-state'>Choose a State Below to Plan Your Trip! </h2>
      <Link to='/parksByState'>
        <USAMap onClick={mapHandler}/>
      </Link>
    </main>
  )
}

export default StatePicker

