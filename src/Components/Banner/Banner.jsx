import React, { useEffect, useState } from 'react'
import './Banner.css'
import {apikey,imageurl} from '../../Constants/Constants'
import axios from '../../axios'
function Banner() {
const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${apikey}&language=en-US`).then(response=>{
            console.log(response.data.results);
            setMovie(response.data.results[3])
        })
        
    }, [])
    return (
        <div  style={{backgroundImage:`url(${movie?imageurl+movie.backdrop_path:""})`}} className="banner">
           
              <h2>{movie ? movie.title:""}</h2>
              <h4 className="movieoverview">{movie ? movie.overview:""}</h4>
            {/* <img src={movie?`${imageurl+movie.backdrop_path}`:""} alt="" /> */}
            <div className="blackoverlay"></div>
            
        </div>
    )
}

export default Banner
