import React from 'react'
import {BiDownArrow} from "react-icons/bi"
import MoreVertIcon from "@mui/icons-material/MoreVertOutlined"
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
const Progressbar = () => {
  return (
    <div className='px-3 py-2 w-[90%] m-auto'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[1.4rem] opacity-70'>Total Revenue</h1>
            <MoreVertIcon className='opacity-70 cursor-pointer transition duration-400 delay-150 ease-in-out  hover:bg-black hover:text-white rounded-[50%] text-2xl'/>
        </div>

        <CircularProgressbar value={70} strokeWidth={3} text={'70%'} background className='my-3 mx-auto h-[10rem] w-auto'/>
        <h3 className='m-auto text-center text-[1rem] opacity-50 font-[500]'>Total Sales made today</h3>
        <h1 className='my-3 text-center text-[2rem] font-[600] opacity-70'>$420</h1>
        <p className='w-[70%] m-auto text-center opacity-80'>Previous transactions processing. Last payments may not be included</p>

        <div className='grid grid-cols-3 px-2 py-1 gap-3 items-center'>

            <div className='flex flex-col items-start gap-2 justify-start'>
              <h2 className='text-[1.1rem] font-[500] opacity-85'>Target</h2>
              <span className='text-[0.9rem] text-red-500 opacity-85'> -$12.4k</span>
              {/* <BiDownArrow className='border'/> */}
            </div>

            <div className='flex flex-col items-start justify-start gap-2'>
              <h2 className='text-[1.1rem] font-[500] opacity-85'>Target</h2>
              <span className='text-[0.9rem] text-green-500 opacity-85'>+$12.4k</span>
              {/* <BiDownArrow className='border'/> */}
            </div>

            <div className='flex flex-col items-start justify-start gap-2'>
              <h2 className='text-[1.1rem] font-[500] opacity-85'>Target</h2>
              <span className='text-[0.9rem] text-green-500 opacity-85'>+$12.4k</span>
              {/* <BiDownArrow className='border'/> */}
            </div>

        </div>
    </div>
  )
}

export default Progressbar