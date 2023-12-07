import {useState, useEffect} from 'react'
import Playlist from "./Playlist"
import AddPlay from "./Addplay"
import './styles.css';

function Useplay({plays, players, incrementFeatured}){
//console.log(plays)
//console.log(players)

   


    return(
        <div>
          
            <Playlist plays={plays} players={players} incrementFeatured={incrementFeatured}/>
        </div>

    )
}

export default Useplay