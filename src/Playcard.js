import React, {useState} from "react";
import Playlist from "./Playlist";

function Playcard({play, players, incrementFeatured}){
  //console.log(play)
  console.log(players)
  
    function increment(player){
       console.log(player)
       const jerseyNum=player;
       console.log(jerseyNum);
       const filterPlayer = players.filter((playernum)=>{
        return parseInt(playernum.jersey) === parseInt(player);
       })
       console.log(filterPlayer)
       const currentFeatured = filterPlayer[0].featured;
       const currentID = filterPlayer[0].id
       const newFeatured = currentFeatured+1;
       console.log(newFeatured);
       incrementFeatured(currentID, newFeatured)
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