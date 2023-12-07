import React from "react";
import UsePlay from "./Useplay"
import Playcard from "./Playcard";


function Playlist({plays, players})

{

    console.log(players)
    const mappedPlays = plays.map((play)=>{
        return <Playcard key={plays.id} play={play} players={players}/>

    })


   
    
  
    
    return (
        <div>
        <div>{mappedPlays}</div>
        <p>playlists works</p>
        </div>
        
        
    )
}
export default Playlist;
