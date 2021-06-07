import React, { useEffect, useState } from 'react'
import './Rowposter.css'
import {apikey,imageurl} from '../../Constants/Constants'
import  axios from '../../axios'
import Youtube from 'react-youtube'
function Rowposter(props) {
    const [state, setstate] = useState([])
const [urlid,seturlId]=useState("")
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response);
            setstate(response.data.results)
        })
       
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
  const handlemovie=(id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${apikey}&language=en-US`).then(response=>{
    console.log(response.data);
   if(response.data.results.length!==0){
       seturlId(response.data.results[0])
   }else{
       console.log("array empty");
   }
})

  }
    return (
        <div className="rowposter">
            <h3>{props.title}</h3>
            <div className={props.issmall?"smallposter":"rowimages"}>

            {state.map((movie,index)=>
               <img onClick={()=>handlemovie(movie.id)} src={`${imageurl+movie.backdrop_path}`} alt="" />
            )}
                
            </div>

           {urlid && <Youtube opts={opts} videoId={urlid.key}/>}
        </div>
    )
}

export default Rowposter
