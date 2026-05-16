import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from './Components/Root/RootLayOut';
import Home from './Pages/Home';
import Installation from './Pages/Installation';
import About from './Pages/About';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut></RootLayOut>,
    children:[
      {
        index:'true',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path: '/installation',
        element:<Installation></Installation>
      }
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
