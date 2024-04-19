import React from 'react'

const EmaiComponent = () => {
  return (
    <div className='bg-blue-900 min-h-[30vh] py-3 px-1 m-auto flex flex-col justify-center items-center drop-shadow-2xl rounded-md'>
        <h1 className='text-[2rem] font-[600] tracking-wider text-white'>Save time, Save money!</h1>
        <p className='text-[1rem] font-[400] text-white mt-2'>Sign up and we'll send the best deals to you</p>
        <form className='flex items-center justify-center gap-3 w-[40%]  mt-8'>
            <input type="text" placeholder='Your Email' className='w-[60%] px-2 py-1 outline-none rounded-sm' />
            <button className='px-2 py-1 rounded-md bg-blue-700 text-white'>Subscribe</button>
        </form>
    </div>
  )
}

export default EmaiComponent