
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import {useState, useEffect} from 'react'
import Useplay from './Useplay';
import Playlist from './Playlist';
import Playcard from './Playcard';
import AddPlay from './Addplay';



function App() {



  //from useplays
const [plays,setPlays] = useState([]) 
    
useEffect(()=>{
    fetch('http://localhost:3001/plays')
    .then(r=>r.json())
    .then(data=>setPlays(data))
    
  },[])
  
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
  console.log("Hello")
  console.log(plays)

  
 ///console.log(plays)
////



  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/add",
      element: <AddPlay postPlay={postPlay}/>,    //////from use play/////
      
    },
    {
      path: "/use",
      
      element: <Useplay plays ={plays}/>
      }, 
 {
      path: "/stats",
      element: <div>stats page</div>
    }
   
  ]);
  return (
    <>
      <div>Header</div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
