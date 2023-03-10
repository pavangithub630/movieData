import React from 'react'
import {json, useLocation} from 'react-router-dom';
const MovieResults = () => {
    const location = useLocation();
    console.log(location.state)
  return (
    <div>{JSON.stringify(location.state)}</div>
  )
}

export default MovieResults