import {useState, useEffect} from 'react'

function Useplay(){



    const [plays,setPlays] = useState([]) 
    
    useEffect(()=>{
        fetch('http://localhost:3001/plays')
        .then(r=>r.json())
        .then(data=>setPlays(data))
        
      },[])
      console.log(plays)


    return(
        <div>useplay function renders</div>
    )
}
export default Useplay