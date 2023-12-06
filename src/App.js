
import './App.css';
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
        <Route path="/" element={<div>Hello world!</div>}/>
        <Route path="/add" element={<AddPlay postPlay={postPlay}/>}/>
        <Route path="/use" element={<Useplay plays ={plays}/>}/>
        <Route path="/stats" element={<div>stats page</div>}/>

      </Routes>
    </BrowserRouter>
      );
}

export default App;
