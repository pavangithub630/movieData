import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


export const MovieSearch = () => {

   const [movieData,setMovieData]=useState({});

    const navigate = useNavigate();

    let data=null;

    const handleSearch=(event)=>{
        if(event.key==="Enter"){
            const url=`http://www.omdbapi.com/?t=${event.target.value}&apikey=35fdb888`
            axios.get(url).then(res => 
            {
              setMovieData(res.data)

              console.log(movieData)

              console.log(res.data)
              
            });
            navigate("/result",{state:{movieData}});
        }
    }
  return (
    
    <div className='container App'>
        <div className='searchbox-container'> 
            <div className='searchbox-searchicon-wrapper'>
            <input 
                      type="text"
                      className='searchbox'
                      placeholder='Enter Movie Name TO Search'
                      onKeyDown={handleSearch}
            ></input>
            <SearchIcon className='search-icon' sx={{ fontSize: 30 ,fontWeight:500}}></SearchIcon>
            </div>
            

        </div>
    </div>
    
  )
}

export default MovieSearch