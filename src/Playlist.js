import React from "react";
import UsePlay from "./Useplay"
import Playcard from "./Playcard";


function Playlist({plays})
{
    const mappedPlays = plays.map((play)=>{
        return <Playcard key={plays.id} play={play}/>

    })
    
    return (
        <div>{mappedPlays}
        <p>playlists works</p>
        </div>
        
    )
}
export default Playlist;
