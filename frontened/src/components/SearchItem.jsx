import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
const SearchItem = ({data}) => {
  // const {options} = useSelector((state)=>state.calc);
  return (
    <div className='grid grid-cols-[30%,40%,20%] gap-3 py-4 px-2 cursor-pointer'>
        <div className='w-[100%] h-[100%] border'>
            <img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D" 
            alt="image"
            className='rounded-md shadow-[0rem_0rem_1rem_rgba(0,0,0,0.9)]'
            />
        </div>

        <div className='flex flex-col items-start justify-evenly'>
            <h1 className='text-2xl text-blue-400 font-[700]'>{data?.title}</h1>
            <p>500m from {data?.city.toLowerCase()}</p>
            <span className='bg-green-700 text-white px-2 rounded-md'>Free airport taxi</span>
            <p className='font-[700] text-[0.9rem]'>Studio Apartment with Air conditioning</p>
            <span>{data?.description}</span>
            <span className='text-green-700 font-[600] text-[0.9rem]'>Free cancellation</span>
            <p className='text-green-800 tracking-tighter font-[600] text-[1.2rem]'>You can cancel later, so lock in this great price today</p>
        </div>

        <div className='flex flex-col items-start justify-between px-3'>
          <div className='flex items-start justify-between w-[100%]'>
            <h2 className='text-[1.2rem] font-[700]'>Excellent</h2>
            <span className='bg-blue-900 text-white p-1'>{data?.rating}</span>
          </div>

          <div className='flex flex-col items-end justify-end'>
            <span className='text-black font-[500] text-[1.2rem]'>${data?.cheapestPrice}</span>
            <span className='opacity-80 text-[0.9rem]'>includes taxes and fees</span>
            <Link to={`/hotels/${data?._id}`}>
              <button className='bg-blue-900 rounded-md py-1 text-[0.9rem] tracking-wider px-2 text-white '>See Availability</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default SearchItem