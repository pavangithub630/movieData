import { color, fontSize } from '@mui/system';
import React from 'react'
import {json, useLocation} from 'react-router-dom';
import Button from '@mui/material/Button';
const MovieResults = () => {
    const location = useLocation();
    
    const movieD=location.state;
    function fullDetails(url){
      window.open(url, '_blank').focus();
    }
    
  return (
    <div className='movie-results-background '>
        <div className='movie-result-content'>
        <h1>{movieD.movieData.Title}
        <span style={{fontSize:17}}> ({movieD.movieData.Year}) | </span>
        <span style={{fontSize:13}}>{movieD.movieData.Genre}</span>
        </h1>
        
          <p> {movieD.movieData.Plot}</p>
          <p><span style={{fontWeight:1000,color:'Black' }}>Actors:</span> {movieD.movieData.Actors}</p>
          <p><span style={{fontWeight:1000,color:'Black' }}>Director:</span> {movieD.movieData.Director}</p>
        </div>
        
        <Button variant="contained"  onClick={()=>fullDetails(`https://www.imdb.com/title/${movieD.movieData.imdbID}/`)}>Full Details</Button>
       
    </div>
  )
}

export default MovieResults