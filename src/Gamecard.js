import {useState, useEffect} from 'react'
import './styles.css';


function Gamecard({game}){
    console.log(game)
    return (
        <div>
        <p>{`Game ID:  ${game.id}`}</p>
        <p>{`School Name: ${game.school}`}</p>
        <p>{`Times Used: ${game.timesused}`}</p>
        <p></p>
        </div>
    )
}
export default Gamecard