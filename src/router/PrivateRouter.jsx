import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivateRouter = () => {

const currentUser=true


  return (
    <div>
     { currentUser ? <Outlet /> : <Navigate to="/login" /> }
    </div>
  )
}

export default PrivateRouter