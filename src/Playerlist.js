import React from "react";
import Useplayer from "./Useplayer"
import Playercard from "./Playercard";


function Playerlist({players})

{
    console.log("Hey there")
    console.log(players)


    const mappedPlayers = players.map((player)=>{
        return <Playercard key={players.id} player={player}/>

    })
    
    
    return (
       <div>{mappedPlayers}</div>
    )
}
export default Playerlist;