import React, {useState} from "react";
import Playlist from "./Playlist";

function Playcard({play, players, incrementFeatured, patchAssists, games}){
  //console.log(play)
  //console.log(players)
  
 /*
    function incrementGames(game){ 
      console.log(game)
      const filterGame = games.filter((gamenum)=>{
        return parseInt(gamenum.game) ===(game)
      })
      console.log(filterGame)

      const currentGames = filterGame[0].timesused
      const gamesId= filterGame[0].id
      const upGame = currentGames+1
      console.log(currentGames)
      console.log(gamesId)
      console.log(upGame)
    }
*/
    function incrementAssists(assist){
          console.log(assist)
          const filterAssist = players.filter((assistnumb)=>{
          return parseInt(assistnumb.jersey) === parseInt(assist);

           const currentAssist = filterAssist[0].game;
           const nextID = filterAssist[0].id
           const  newAssist = currentAssist +1;
            
           })
           console.log(filterAssist)
           const currentAssist = filterAssist[0].assists;
           const nextID = filterAssist[0].id
           const  newAssist = currentAssist +1;
           //console.log(currentAssist)
           //console.log(nextID)
           //console.log(newAssist)
           //incrementFeatured(currentID, newFeatured)
           patchAssists(nextID, newAssist)


    }
    

    function increment(player){
       //console.log(player)
       const jerseyNum=player;
       //console.log(jerseyNum);
       const filterPlayer = players.filter((playernum)=>{
        return parseInt(playernum.jersey) === parseInt(player);
       })
       console.log(filterPlayer)
       const currentFeatured = filterPlayer[0].featured;
       const currentID = filterPlayer[0].id
       const newFeatured = currentFeatured+1;
       //console.log(newFeatured);
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
                //increment(player)
                //console.log(player)
                
            }}>Used</button>
          ) : (
            <button onClick={()=>{
                setUsed(true)
                //console.log(player)
                //decrement()
                increment(player)
                incrementAssists(assist)
               // incrementGames(game)
            }}>Unused</button>
          )}</p>
        </div>
    )
}
export default Playcard;