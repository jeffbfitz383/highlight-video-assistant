import {useState, useEffect} from 'react'
import Playlist from "./Playlist"
import AddPlay from "./Addplay"
import './styles.css';

function Useplay({plays}){
console.log(plays)


   


    return(
        <div>
          
            <Playlist plays={plays}/>
        </div>

    )
}

export default Useplay