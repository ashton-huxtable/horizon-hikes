import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import USAMap from 'react-usa-map';

const StatePicker = (props) => {

  const mapHandler = (event) => {
    props.selectState(event.target.dataset.name)
  }

  return(
    <Link to='/parksByState'>
      <USAMap onClick={mapHandler}/>
    </Link>
  )
}

export default StatePicker

