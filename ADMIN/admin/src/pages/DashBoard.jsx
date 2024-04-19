import React, { useEffect } from 'react'
import Layout from '../layout/Layout'
import Widget from '../components/Widget'
import Progressbar from '../components/Progressbar'
import Chart from '../components/Chart'
import Tables from '../components/Tables'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/Slices/usersSlice'
import { getHotelData } from '../redux/Slices/hotel.slice'

const DashBoard = () => {
  const dispatch = useDispatch();
  const dispatcher = async ()=>{
    await dispatch(fetchUsers())
    await dispatch(getHotelData())
  }
  useEffect(()=>{
    dispatcher()
  },[]);
  return (
    <Layout>
        
      <div className='grid grid-cols-4 gap-3 px-4'>
          <Widget type={"user"}/>
          <Widget type={"order"}/>
          <Widget type={"earning"}/>
          <Widget type={"balance"}/>
      </div>

      <div className='mt-2 mx-4 py-3 px-2 grid grid-cols-[45%,55%] gap-1 items-center'>
        <Progressbar/>
        <Chart aspect={2/1}/>
      </div>

      <div className='min-h-[50vh] w-full px-4 py-2 my-1'>
        <h1 className='text-[1.3rem] font-[600] opacity-85'>Latest Transaction</h1>
        <Tables/>
      </div>
      

    </Layout>
  )
}

export default DashBoard