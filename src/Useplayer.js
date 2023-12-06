import {useState, useEffect} from 'react'
import Playerlist from "./Playerlist"

function Useplayer({players}){

console.log(players)


   


    return(
        <div>
          
          <Playerlist players={players}/>
        </div>

    )
}

export default Useplayer