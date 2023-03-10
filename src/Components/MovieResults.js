import React from 'react'
import {useLocation} from 'react-router-dom';
const MovieResults = () => {
    const location = useLocation();
    console.log(location.state)
  return (
    <div>Hello</div>
  )
}

export default MovieResults