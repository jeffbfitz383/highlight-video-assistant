import {useState, useEffect} from 'react'
import Playlist from "./Playlist"

function Useplay(){



    const [plays,setPlays] = useState([]) 
    
    useEffect(()=>{
        fetch('http://localhost:3001/plays')
        .then(r=>r.json())
        .then(data=>setPlays(data))
        
      },[])
      //console.log(plays)
      
     


    return(
        <div>useplay function renders
            <Playlist plays ={plays}/>
            
        </div>

    )
}

export default Useplay