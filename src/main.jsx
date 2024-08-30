import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home/Home';
import ErrorPage from './pages/Error/ErrorPage';
import App from './App'
import { HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
      },
     
      // {
      //   path: "/job-details/:id",
      //   loader: ()=> fetch('../jobs.json') ,
      //   element: <JobDetails></JobDetails>
      // }
    ]
  },
  // {
  //   path: "/home",
  //   element: <Home></Home>
  // }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

    <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
