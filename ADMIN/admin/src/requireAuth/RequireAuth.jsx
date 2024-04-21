import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RequireAuth = ({allowedRoles}) => {
  const {role,isLoggedIn} = useSelector((state)=>state.auth)
  return (
    <>
      {
        isLoggedIn && allowedRoles.find((r)=>r==role)?
        (<Outlet/>):isLoggedIn?<Navigate to={"/"}/>:
        <Navigate to={"/"}/>
      }
    </>
  )
}

export default RequireAuth;