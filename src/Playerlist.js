import React from "react";
import Useplayer from "./Useplayer"
import Playercard from "./Playercard";


function Playerlist({players, games})

{
    //console.log("Hey there")
    //console.log(players)
    //console.log(games)


    const mappedPlayers = players.map((player)=>{
        return <Playercard key={players.id} player={player}/>

    })

    const mappedGames = games.map((game)=>{
        return <Playercard key={games.id} game={game}/>

    })
    
    
    return (
        <div>
       <div>{mappedPlayers}</div>
       
       </div>
    )
}
export default Playerlist;