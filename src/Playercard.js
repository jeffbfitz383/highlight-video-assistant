import React, {useState} from "react";


function Playercard({player, games}){
 console.log(games)

    return(
        
        <div>
        
        
        <p>{`Player ID:  ${player.id}`}</p>
        <p>{`Player Jersey:  ${player.jersey}`}</p>
        <p>{`Player Fetured: ${player.featured}`}</p>
        <p>{`Assisting Player: ${player.assists}`}</p><br/>


        <p>{`${games.id}`}</p>
        <p>{`${games.school}`}</p>
        <p>{`${games.timesused}`}</p>
        

        </div>
    )
}
export default Playercard;