import React, { useState,useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns} from "../tempData/data.table.js"
import {useSelector,useDispatch} from "react-redux"
import toast from "react-hot-toast"
import {Link, useLocation, useNavigate} from "react-router-dom"
import {deleteUser} from "../redux/Slices/usersSlice.js"
import { deleteHotel } from '../redux/Slices/hotel.slice.js';
const DataTable = ({columns,type}) => {

    // const [data,setData] = useState(userRows);
    const {pathname} = useLocation();
    const routeName = pathname.split("/")[1];
    const {users} = useSelector((state)=>state.users);
    const {hotels} = useSelector((state)=>state.hotels);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const display = ()=>{
        if(users && hotels) return;
        else return;
    }

    const deleteHandler =async (userId)=>{
        if(type=="users"){
            const dispatching =await dispatch(deleteUser({userId}))
            if(!dispatching){
                toast.error("Unable to delete the User");
                return
            }
            navigate("/dashboard");
            toast.success("Deleted Successfully");
            return;
        }else if(type=="hotels"){
            const dispatching =await dispatch(deleteHotel({userId}))
            if(!dispatching){
                toast.error("Unable to delete the Hotel");
                return
            }
            navigate("/dashboard");
            toast.success("Deleted Successfully");
            return
        }
    }
    useEffect(()=>{
        display();
    },[])

    const actionColumn = [
        {
            field:"action",
            headerName:"Action",
            width:200,
            renderCell:(params)=>{
                return (
                    <div className='cellAction flex items-center gap-1 justify-center h-[100%]'>
                        <button className='bg-blue-500 text-white px-3 my-auto rounded-md  h-[90%] m-auto shadow-lg '>View</button>
                        <button className='bg-red-500 text-white px-3 my-auto rounded-md  h-[90%] m-auto shadow-lg' onClick={()=>deleteHandler(params.row._id)}>Delete</button>
                    </div>
                )
            }
        }
    ]

  return (
    <div className='px-4 flex flex-col items-start justify-start gap-2 '>
        <h1 className='text-[2rem] font-[700] opacity-75 capitalize'>{routeName}</h1>
        <Link to={type=="users"?"/newUser":"/newHotel"} className='text-[1.3rem] font-[600] py-1 px-2 rounded-md outline-none bg-gray-300'>New {routeName}</Link>
        <DataGrid 
            className='datagrid mt-4'
            rows={type=="users"? users : hotels}     //type="users"? users : hotels
            columns={columns.concat(actionColumn)}
            // pageSize={10}
            // pageSizeOptions={[10]}
            checkboxSelection
            getRowId={(row) => row._id}
        />
    </div>    
  )
}

export default DataTable;