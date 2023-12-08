import {useState, useEffect} from 'react'
import './styles.css';
import Gamecard from './Gamecard';

function Gamelist({games}){
    console.log(games)

    console.log(games)
    const mappedGames = games.map((game)=>{
    return <Gamecard key={games.id} game={game}/>


   })

return(
    <div>{mappedGames}</div>
    
)
}
export default Gamelist