
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/add",
      element: <div>add play screen</div>
    },
    {
      path: "/use",
      element: <div>use play page</div>
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
