import React, { useEffect } from 'react'
import {BiSolidUpArrowSquare,BiArrowToBottom,BiCart,BiMoney,BiSolidUserAccount} from "react-icons/bi"
import {FaPersonBooth} from "react-icons/fa"
import { useSelector } from 'react-redux'

const Widget = ({type}) => {

    const {totalUsers,users} = useSelector((state)=>state.users)
    let data;
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<FaPersonBooth className='text-[2rem] text-[red] p-2 rounded-md bg-[rgb(255,212,212)]'/>
            }
            break
        case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"View all orders",
                icon:<BiCart className='text-[2rem] text-[goldenred] p-2 rounded-md bg-[rgba(218,165,32,0.2)]'/>
            };
            break;
        case "earning":
            data={
                title:"EARNINGS",
                isMoney:true,
                link:"View net earnings",
                icon:<BiMoney className='text-[2rem] text-[green] p-2 rounded-md bg-[rgba(0,128,0,0.2)]'/>
            };
            break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney:false,
                link:"View your balance",
                icon:<BiSolidUserAccount className='text-[2rem] text-[purple] p-2 rounded-md bg-[rgba(128,0,128,0.2)]'/>
            };
            break;
        default:
            break;
    }
    // console.log(totalUsers);
    // console.log(users);


  return (
    <div className='flex flex-col items-start justify-center border py-3 rounded-md shadow-[0rem_0rem_1rem_rgba(0,0,0,0.2)]'>

        <div className='flex items-center justify-between w-[90%] m-auto'>
            <h1>{data.title}</h1>
            <div className='flex items-center justify-center gap-1'>
                <BiSolidUpArrowSquare className='text-[1rem]'/>
                <span>20 %</span>
            </div>
        </div>

        <h1 className='self-start w-[90%] m-auto text-[4rem]'>{totalUsers || 100}</h1>

        <div className='flex items-center justify-between w-[90%] m-auto'>
            <h1 className='border-b-4'>{data.link}</h1>
            {/* <BiArrowToBottom/> */}
            {data.icon}
        </div>

    </div>
  )
}

export default Widget;