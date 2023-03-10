import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { color } from '@mui/system';
export const MovieSearch = () => {

   const[loading,setLoading]=useState(false)
    const navigate = useNavigate();
    let data=null;
    const handleSearch=(event)=>{
        if(event.key==="Enter"){
            setLoading(true)
            const url=`http://www.omdbapi.com/?t=${event.target.value}&apikey=35fdb888`
            axios.get(url).then(res => 
            {
                const movieData=res.data;
                setLoading(false)
                navigate("/result",{state:{movieData}});
            });           
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
            {loading && 
            <p className='loading-status'>
                loading.........
            </p>}
            

        </div>
    </div>
    
  )
}

export default MovieSearch