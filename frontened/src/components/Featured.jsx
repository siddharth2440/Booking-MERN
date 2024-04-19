import React from 'react'
import { getCityCount } from '../redux/Slices/homeSlice.js'
import {useSelector,useDispatch} from "react-redux"
import {useEffect} from "react"
const Featured = () => {

    const {countByCity} = useSelector((state)=>state.home)
    // console.log("Hii Fade")
    // console.log(countByCity)
    return (
    <div className='flex items-center justify-between py-3'>

        <div className='relative h-[100%]  overflow-hidden rounded-[0.3rem]'>
            <img src="https://images.unsplash.com/photo-1602797882193-51cb0e037534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVibGlufGVufDB8fDB8fHww" 
            alt=""
            className='brightness-100 cursor-pointer drop-shadow-md h-[12rem] w-auto rounded-[0.3rem] transition-all duration-150 delay-[100ms] hover:brightness-100 hover:scale-110'
            />
            <div className='absolute bottom-3 left-4 flex flex-col items-start justify-start text-white text-[1.5rem] font-[500]'>
                <h1>Dublin</h1>
                <span>{countByCity?countByCity[0]:"900"} properties</span>
            </div>
        </div>

        <div className='relative h-[100%]  overflow-hidden rounded-[0.3rem]'>
            <img src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D" 
            alt=""
            className='brightness-100 cursor-pointer drop-shadow-md h-[12rem] w-auto rounded-[0.3rem] transition-all duration-150 delay-[100ms] hover:brightness-100 hover:scale-110'
            />
            <div className='absolute bottom-3 left-4 flex flex-col items-start justify-start text-white text-[1.5rem] font-[500]'>
                <h1>Austin</h1>
                <span>{countByCity?countByCity[1]:"900"} properties</span>
            </div>
        </div>

        <div className='relative h-[100%]  overflow-hidden rounded-[0.3rem]'>
            <img src="https://plus.unsplash.com/premium_photo-1676776906360-098c7dd38c2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhY2V8ZW58MHx8MHx8fDA%3D" 
            alt=""
            className='brightness-100 cursor-pointer drop-shadow-md h-[12rem] w-auto rounded-[0.3rem] transition-all duration-150 delay-[100ms] hover:brightness-100 hover:scale-110'
            />
            <div className='absolute bottom-3 left-4 flex flex-col items-start justify-start text-white text-[1.5rem] font-[500]'>
                <h1>Reno</h1>
                <span>{countByCity?countByCity[2]:"900"} properties</span>
            </div>
        </div>

    </div>
  )
}

export default Featured