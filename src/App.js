
import './App.css';
import './styles.css';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"
import NavBar from './NavBar'
import {useState, useEffect} from 'react'
import Useplay from './Useplay';
import Playlist from './Playlist';
import Playcard from './Playcard';
import AddPlay from './Addplay';
import Useplayer from './Useplayer'
import Home from './Home'




function App() {



  
const [plays,setPlays] = useState([]) 
const [players,setPlayers] =useState([])
const [feature, setFeature] =useState([])

    
useEffect(()=>{
    fetch('http://localhost:3001/plays')
    .then(r=>r.json())
    .then(data=>setPlays(data))
    
  },[])

  useEffect(()=>{
    fetch('http://localhost:3001/players')
    .then(r=>r.json())
    .then(data=>setPlayers(data))
    
  },[])

  //console.log(players)
  
  function postPlay(newPlay){
    fetch('http://localhost:3001/plays',{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlay)

    })
    .then(r=>r.json())
    .then(data=>setPlays([...plays,data]))
    
    
    //setPlays([...plays,newPlay])
  }



  function incrementFeatured(currentId, newFeatured){
    fetch(`http://localhost:3001/players/${currentId}`,{
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        featured:newFeatured
      })
    })
    

  }
  
       




      


    
  
      
    
     
    
  




  //console.log("Hello")
  //console.log(plays)

  
 ///console.log(plays)
////



 // const router = createBrowserRouter([
   // {
    //  path: "/",
    //  element: <div>Hello world!</div>,
    //},
   // {
    //  path: "/add",
     // element: <AddPlay postPlay={postPlay}/>,    //////from use play/////
      
   // },
   // {
    //  path: "/use",
      
    //  element: <Useplay plays ={plays}/>
     // }, 
 //{
    //  path: "/stats",
     // element: <div>stats page</div>
   // }
   
 // ]);
 //return (
  //  <>
     // <div>Header</div>
    //  <RouterProvider router={router} />
  ///  </>
//  );
//}


return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddPlay postPlay={postPlay}/>}/>
        <Route path="/use" element={<Useplay plays ={plays} players={players} incrementFeatured={incrementFeatured} />}/>
        <Route path="/stats" element={<Useplayer players ={players}/>}/>

      </Routes>
    </BrowserRouter>
      );
}

export default App
