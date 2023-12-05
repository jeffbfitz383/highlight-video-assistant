
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/add",
      element: <AddPlay/>
    },
    {
      path: "/use",
      
      element: <Useplay/>
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
