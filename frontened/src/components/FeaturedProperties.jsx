import React,{useEffect} from 'react'
import {useSelector} from "react-redux"
const FeaturedProperties = () => {
    const {featuredProperties} = useSelector((state)=>state.home)
    // useEffect(()=>{
    //     console.log(featuredProperties);
    // })
  return (
    <div className='grid grid-cols-4 gap-3 px-2'>

        {
            featuredProperties && featuredProperties.map((ele,idx)=>{
                return (
                    <div className='flex flex-col items-start justify-start rounded-md overflow-hidden cursor-pointer' key={idx}>
                        <img src="https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D" 
                        alt="hotel-image" 
                        className='overflow-hidden rounded-md transition-all duration-500 delay-70 ease-in-out hover:scale-110 border object-cover border-red-500'
                        />
                        <div className='flex flex-col items-start justify-start gap-2 mt-4 py-2 px-1'>
                            <h1>{ele?.name}</h1>
                            <span>{ele?.city}</span>
                            <p>Starting from ${ele?.cheapestPrice}</p>

                            <div className='flex items-start justify-between gap-3'>
                                <span className='p-1 bg-blue-800 text-white'>{ele?.rating}</span>
                                <span>Excellent</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        {/* <div className='flex flex-col items-start justify-start rounded-md overflow-hidden cursor-pointer'>
            <img src="https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="hotel-image" 
            className='overflow-hidden rounded-md transition-all duration-500 delay-70 ease-in-out hover:scale-110 border object-cover border-red-500'
            />
            <div className='flex flex-col items-start justify-start gap-2 mt-4 py-2 px-1'>
                <h1>Aparthotel Stare Miasto</h1>
                <span>Madrid</span>
                <p>Starting from $120</p>

                <div className='flex items-start justify-between gap-3'>
                    <span className='p-1 bg-blue-800 text-white'>8.9</span>
                    <span>Excellent</span>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-start justify-start rounded-md overflow-hidden cursor-pointer'>
            <img src="https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="hotel-image" 
            className='overflow-hidden rounded-md transition-all duration-500 delay-70 ease-in-out hover:scale-110 border object-cover border-red-500'
            />
            <div className='flex flex-col items-start justify-start gap-2 mt-4 py-2 px-1'>
                <h1>Aparthotel Stare Miasto</h1>
                <span>Madrid</span>
                <p>Starting from $120</p>

                <div className='flex items-start justify-between gap-3'>
                    <span className='p-1 bg-blue-800 text-white'>8.9</span>
                    <span>Excellent</span>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-start justify-start rounded-md overflow-hidden cursor-pointer'>
            <img src="https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="hotel-image" 
            className='overflow-hidden rounded-md transition-all duration-500 delay-70 ease-in-out hover:scale-110 border object-cover border-red-500'
            />
            <div className='flex flex-col items-start justify-start gap-2 mt-4 py-2 px-1'>
                <h1>Aparthotel Stare Miasto</h1>
                <span>Madrid</span>
                <p>Starting from $120</p>

                <div className='flex items-start justify-between gap-3'>
                    <span className='p-1 bg-blue-800 text-white'>8.9</span>
                    <span>Excellent</span>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-start justify-start rounded-md overflow-hidden cursor-pointer'>
            <img src="https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="hotel-image" 
            className='overflow-hidden rounded-md transition-all duration-500 delay-70 ease-in-out hover:scale-110 border object-cover border-red-500'
            />
            <div className='flex flex-col items-start justify-start gap-2 mt-4 py-2 px-1'>
                <h1>Aparthotel Stare Miasto</h1>
                <span>Madrid</span>
                <p>Starting from $120</p>

                <div className='flex items-start justify-between gap-3'>
                    <span className='p-1 bg-blue-800 text-white'>8.9</span>
                    <span>Excellent</span>
                </div>
            </div>
        </div> */}

    </div>
  )
}

export default FeaturedProperties