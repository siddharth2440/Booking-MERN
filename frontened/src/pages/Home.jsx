import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Featured from '../components/Featured.jsx'
import Propertylist from '../components/Propertylist.jsx'
import FeaturedProperties from '../components/FeaturedProperties.jsx'
import EmaiComponent from '../components/EmaiComponent.jsx'
import Footer from '../components/Footer.jsx'
import {useDispatch } from "react-redux"
import {useEffect} from "react"
import { getCityCount , countByType,getFeaturedProperties} from '../redux/Slices/homeSlice.js'
const Home = () => {

  const dispatch = useDispatch();
    
    
    const dispatching = ()=>{
       dispatch(getCityCount());
       dispatch(countByType());
       dispatch(getFeaturedProperties())
    }
    useEffect(()=>{
        dispatching();
    },[])
  return (
    <div className='no-scrollbar'>
        <Navbar/>
        <Header/>
        
        <div className=' mt-[4rem] w-[80%] m-auto'>
          <div className='px-5'>
            <Featured/>
          </div>
          <div className='flex flex-col gap-4 px-4 items-start pt-4 justify-start py-2'>
            <h1 className='text-2xl mt-7 font-[700]'>Browse by property type</h1>
            <Propertylist/>
          </div>

          <div className='flex flex-col gap-4 px-4 items-start pt-4 justify-start py-2'>
            <h1 className='text-2xl mt-7 font-[700]'>Home guests love</h1>
            <FeaturedProperties/>
          </div>

          <div className='py-2'>
            <EmaiComponent/>
          </div>

          <Footer/>
        </div>
        <h1 className='bg-blue-800 py-1 text-center text-white tracking-wider font-[700]'>Designed by It'sMoNdAy</h1>
    </div>
  )
}

export default Home