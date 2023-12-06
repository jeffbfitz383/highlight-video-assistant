import {useState, useEffect} from 'react'
import Playlist from "./Playlist"
import AddPlay from "./Addplay"

function Useplay(){



    const [plays,setPlays] = useState([]) 
    
    useEffect(()=>{
        fetch('http://localhost:3001/plays')
        .then(r=>r.json())
        .then(data=>setPlays(data))
        
      },[])
      
      function postPlay(newPlay){
        setPlays([...plays,newPlay])
      }
      
     console.log(plays)


    return(
        <div>
            <AddPlay postPlay={postPlay}/>
            <Playlist plays ={plays}/>
        </div>

    )
}

export default Useplay