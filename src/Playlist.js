import React from "react";
import UsePlay from "./Useplay"
import Playcard from "./Playcard";


function Playlist({plays, players, incrementFeatured, patchAssists})

{

    console.log(players)
    const mappedPlays = plays.map((play)=>{
        return <Playcard key={plays.id} play={play} players={players} incrementFeatured={incrementFeatured} patchAssists={patchAssists}/>

    })


   
    
  
    
    return (
        <div>
        <div>{mappedPlays}</div>
        <p>playlists works</p>
        </div>
        
        
    )
}
export default Playlist;
