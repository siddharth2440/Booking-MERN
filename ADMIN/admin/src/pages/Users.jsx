import React ,{useEffect} from 'react'
import Layout from '../layout/Layout'
import {useDispatch} from "react-redux"
import {getHotelData} from "../redux/Slices/hotel.slice.js"
// import {} from "@mui/x-data-grid"
// import {userColumns,hotelColumns} from "../tempData/data.table.js"
import DataTable from '../components/DataTable.jsx'
const Users = ({columns,type}) => {
  const dispatch = useDispatch();
  const dispatcher =async ()=>{
    await dispatch(getHotelData())
  }
  useEffect(()=>{
    dispatcher();
  },[]);
  return (
    <Layout>
        <DataTable columns={columns} type={type}/>
    </Layout>
  )
}

export default Users;