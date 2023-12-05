import React from "react";
import Playlist from "./Playlist";

function Playcard({play}){
    const {id,player} = play

    return(
        
        <div>
        <p>{id}</p>
        <p>{player}</p>
        </div>
    )
}
export default Playcard;