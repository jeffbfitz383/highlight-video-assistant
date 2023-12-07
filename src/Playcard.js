import React, {useState} from "react";
import Playlist from "./Playlist";

function Playcard({play}){
  //console.log(play)
  
    function increment(player){
       console.log(player)
    }
    function decrement(){
        //alert("decrement")
     }

    const [used,setUsed] = useState(false)

    const {id,level,game,quarter,start,stop,player,playtype,quality,assist} = play

    return(
        
        <div>
        
        <p>{`Play#: ${id}, Level: ${level}, Game: ${game}, Quarter:
         ${quarter}, Start time: ${start}, Stop time: ${stop}, 
         Player#:  ${player}, Play Type: ${playtype}, Quality: ${quality},
          Assist: ${assist}`}  {used ? (
            <button onClick={()=>{
                setUsed(false)
                increment(player)
                //console.log(player)
                
            }}>Used</button>
          ) : (
            <button onClick={()=>{
                setUsed(true)
                //console.log(player)
                decrement()
            }}>Unused</button>
          )}</p>
        </div>
    )
}
export default Playcard;