import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PrivateRouter = () => {

const {currentUser}=useSelector(state=>state.auth)

  return (
    <div>
     { currentUser ? <Outlet /> : <Navigate to="/" /> }
    </div>
  )
}

export default PrivateRouter