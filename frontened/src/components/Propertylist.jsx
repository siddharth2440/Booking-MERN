import React from 'react'
import { useEffect } from 'react'
import {useSelector} from "react-redux"
const Propertylist = () => {

    const images = [
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1605267143746-999bf61d0d08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW5zfGVufDB8fDB8fHww"
    ]

    const {countByType} = useSelector((state)=>state.home)
    // useEffect(()=>{
    //     console.log(countByType);
    // },[])
  return (
    <div className='grid grid-cols-5 gap-3'>
        {
            countByType?.map((ele,idx)=>{
                return (
                    <div className='flex flex-col items-start justify-start gap-2 rounded-lg overflow-hidden' key={idx}>
                        <img src={images[idx]} 
                        alt="" 
                        className='overflow-hidden rounded-md drop-shadow-lg transition-all duration-75 delay-100 ease-linear hover:scale-110 cursor-pointer'
                        />
                        <div className='text-[0.9rem] font-[500]'>
                            <h3 className='capitalize'>{ele?.type}</h3>
                            <span className='capitalize'>{ele?.total} {ele?.type}</span>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Propertylist