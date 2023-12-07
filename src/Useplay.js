import {useState, useEffect} from 'react'
import Playlist from "./Playlist"
import AddPlay from "./Addplay"
import './styles.css';

function Useplay({plays, players}){
//console.log(plays)
//console.log(players)

   


    return(
        <div>
          
            <Playlist plays={plays} players={players}/>
        </div>

    )
}

export default Useplay