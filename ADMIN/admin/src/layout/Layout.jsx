import React, { useEffect } from 'react'
import Navbar from "../components/Navbar.jsx"
import {TbTruckDelivery,TbCreditCard,TbHealthRecognition,TbPhysotherapist,TbSettings} from "react-icons/tb"
import {AiOutlineUserSwitch,AiFillProfile,AiOutlineLogout} from "react-icons/ai"
import {BiSolidDashboard,BiStore,BiStats,BiNotification} from "react-icons/bi"
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { logout } from '../redux/Slices/authSlice.js'
const Layout = ({children}) => {
    const dispatch = useDispatch();
    const logoutHandler =async ()=>{
        const dispatcher = await dispatch(logout())
        if(!dispatcher) return;
        navigate("/");
    }
  return (
    <div className='grid grid-cols-[20%,80%]'>
        <div className="sideBar sticky top-0 border-r-4 min-h-screen flex flex-col items-start justify-evenly gap-2 py-2 px-6">
            <h1 className='text-[1.6rem] border-b-4 text-center text-blue-500 w-[100%] font-[600] opacity-80 inline-block'>lamaAdmin</h1>

            <div className='flex flex-col items-start justify-start gap-2'>
                <h2 className='text-[0.9rem] font-[500] opacity-80 cursor-pointer'>MAIN</h2>
                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <BiSolidDashboard className='text-[1.4rem] text-blue-700'/>
                    <Link to={"/dashboard"}><h3 className='text-[1.2rem] font-[500]'>Dashboard</h3></Link>
                </div>
            </div>

            <div className='flex flex-col items-start justify-start gap-2'>
                <h2 className='text-[0.9rem] font-[500] opacity-80'>LISTS</h2>
                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <AiOutlineUserSwitch className='text-[1.4rem] text-blue-700'/>
                    <Link to={"/users"}><h3 className='text-[1.2rem] font-[500]'>Users</h3></Link>
                </div>

                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <TbCreditCard className='text-[1.4rem] text-blue-700'/>
                    {/* <Link ></Link> */}
                    <Link to={"/hotels"}><h3 className='text-[1.2rem] font-[500]'>Hotels</h3></Link>
                </div>

                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <BiStore className='text-[1.4rem] text-blue-700'/>
                    <h3 className='text-[1.2rem] font-[500]'>Rooms</h3>
                </div>

                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <TbTruckDelivery className='text-[1.4rem] text-blue-700'/>
                    <h3 className='text-[1.2rem] font-[500]'>Delivery</h3>
                </div>
            </div>

            <div className='flex flex-col items-start justify-start gap-2 cursor-pointer'>
                <h2 className='text-[0.9rem] font-[500] opacity-80'>USEFUL</h2>
                
                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <BiStats className='text-[1.4rem] text-blue-700'/>
                    <h3 className='text-[1.2rem] font-[500]'>Stats</h3>
                </div>

                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <BiNotification className='text-[1.4rem] text-blue-700'/>
                    <h3 className='text-[1.2rem] font-[500]'>Notification</h3>
                </div>
            </div>

            <div className='flex flex-col items-start justify-start gap-2'>
                <h2 className='text-[0.9rem] font-[500] opacity-80'>SERVICE</h2>
                
                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <TbHealthRecognition className='text-[1.4rem] text-blue-700'/>
                    <h3 className='text-[1.2rem] font-[500]'>System Health</h3>
                </div>

                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <TbPhysotherapist className='text-[1.4rem] text-blue-700'/>
                    <h3 className='text-[1.2rem] font-[500]'>Logs</h3>
                </div>
                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <TbSettings className='text-[1.4rem] text-blue-700'/>
                    <h3 className='text-[1.2rem] font-[500]'>Settings</h3>
                </div>
            </div>

            <div className='flex flex-col items-start justify-start gap-2'>
                <h2 className='text-[0.9rem] font-[500] opacity-80'>USER</h2>
                
                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <AiFillProfile className='text-[1.4rem] text-blue-700'/>
                    <h3 className='text-[1.2rem] font-[500]'>Profile</h3>
                </div>

                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <AiOutlineLogout className='text-[1.4rem] text-blue-700'/>
                    <button className='text-[1.2rem] font-[500]' onClick={logoutHandler}>Logout</button>
                </div>
            </div>


        </div>


        <div className=' min-h-full w-auto'>
            <Navbar/>
            {children}

        </div>


    </div>
  )
}

export default Layout