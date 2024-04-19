import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/Slices/userSlice'
import toast from 'react-hot-toast'

const Navbar = () => {
  const {isLoggedIn} = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const logoutHandler = async()=>{
    const dispatchLogout = await dispatch(logout());
    if(!dispatchLogout){
      toast.error("Unable to logout you.")
      return;
    }
    toast.success("Successfully logged out.")
    return;
  }
  return (
    <div className='flex items-center justify-between px-4 py-2 w-[100%] bg-blue-900 min-h-[9vh]'>
        <Link to="/"><h1 className='text-2xl tracking-wider font-[500] text-white'>lamabooking</h1></Link>
        <div className=' flex items-end justify-between gap-5'>
            
            {isLoggedIn? 
            (
              <>
                <h2 className='border rounded-md bg-white px-2 py-1 text-blue-900 font-[400] shadow-[0rem_0rem_1rem_rgba(0,0,0,0.2)]'>Profile</h2>
                <button onClick={logoutHandler} className='border rounded-md bg-white px-2 py-1 text-blue-900 font-[400] shadow-[0rem_0rem_1rem_rgba(0,0,0,0.2)]'>Logout</button>
              </>
            )
            :(
              <>
                <h2 className='border rounded-md bg-white px-2 py-1 text-blue-900 font-[400] shadow-[0rem_0rem_1rem_rgba(0,0,0,0.2)]'>Register</h2>
                <Link to={"/login"}><h2 className='border rounded-md bg-white px-2 py-1 text-blue-900 font-[400] shadow-[0rem_0rem_1rem_rgba(0,0,0,0.2)]'>Login</h2></Link>
              </>
              )}
        </div>
    </div>
  )
}

export default Navbar