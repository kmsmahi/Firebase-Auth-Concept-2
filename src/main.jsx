import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from './Components/Root/RootLayOut';
import Home from './Pages/Home';
import Installation from './Pages/Installation';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut></RootLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:'true',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: '/installation',
        element:<Installation></Installation>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
