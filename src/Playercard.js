import React, {useState} from "react";


function Playercard({player}){
 

    return(
        
        <div>
        
        <p>Plyer card works</p>
        <p>{player.id}</p>
        <p>{player.jersey}</p>
        <p>{player.featured}</p>
        <p>{player.assists}</p>
        

        </div>
    )
}
export default Playercard;