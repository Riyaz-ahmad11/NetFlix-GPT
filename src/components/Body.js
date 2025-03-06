import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux'
import ProtectedBrowseRoute from '../utils/ProtectedBrowseRoute'
import ProtectedLoginRoute from '../utils/ProtectedLoginRoute'

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      // element: (<ProtectedLoginRoute>
      //   <Login />
      // </ProtectedLoginRoute>)
      element :<Login></Login>
   
      
    },
    {
      path: "/Browse",
      // element: (<ProtectedBrowseRoute>
      //     <Browse/>
      // </ProtectedBrowseRoute>)

      element:<Browse></Browse>
    
      
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body