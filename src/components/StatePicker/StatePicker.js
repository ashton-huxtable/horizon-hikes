import PropTypes from 'prop-types';
import React from 'react';
import USAMap from 'react-usa-map';

const StatePicker = (props) => {

  const mapHandler = (event) => {
    props.selectState(event.target.dataset.name)
    alert(event.target.dataset.name);
  };

  return(
    <USAMap onClick={mapHandler}/>
  )
}

export default StatePicker

