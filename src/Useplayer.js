import {useState, useEffect} from 'react'
import Playerlist from "./Playerlist"

function Useplayer({players, games}){

//console.log(players)
//console.log(games)


   


    return(
        <div>
          
          <Playerlist players={players} games={games}/>
        </div>

    )
}

export default Useplayer