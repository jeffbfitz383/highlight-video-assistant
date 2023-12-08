import React from "react";
import Useplayer from "./Useplayer"
import Playercard from "./Playercard";


function Playerlist({players, games})

{
    //console.log("Hey there")
    //console.log(players)
    //console.log(games)


    const mappedPlayers = players.map((player)=>{
        return <Playercard key={players.id} player={player} games= {games}/>

    })
  // console.log(games)
   // const mappedGames = games.map((game)=>{
     //   return <Playercard key={game.id} game={game}/>


   // })
    
    
    return (
        <div>
       
        <div>{mappedPlayers}S</div>
       
       
       </div>
    )
}
export default Playerlist;