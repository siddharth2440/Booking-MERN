import React, { useState , useEffect} from 'react'
import {FaBed,FaPlane,FaCar,FaTaxi,FaCalendar,FaPersonBooth} from "react-icons/fa"
import {AiFillPlusSquare,AiFillMinusSquare} from "react-icons/ai"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRange} from "react-date-range"
import {useDispatch} from "react-redux"
import {getItemOnSearch} from "../redux/Slices/homeSlice.js"
import {format} from "date-fns"
import {calc} from "../redux/Slices/calcSlice.js"
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const Header = ({type}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [destination,setDestination] = useState("");
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
      const [options,setOptions] = useState(
        {
            adult:0,
            children:0,
            room:0           
        }
      )

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
    const handleOptions = (name,operation)=>{
        const keys = Object.keys(options)
        console.log("Key is "+name);
       if(!keys.includes(name)){
            console.log("not included");
        }
        // console.log([name]);
        else{
            operation=="i"?setOptions({...options,[name]:options[name]+1}):setOptions({...options,[name]:options[name]-1})
        }
        // console.log(options);
    }
    const [openCustomerDetails,setopenCustomerDetails] = useState(false);
    const [openCalender,setopenCalender] = useState(false);
    const navigator =async ()=>{
        navigate('/hotels',{state:[options,destination,date]})
        await dispatch(getItemOnSearch({destination}))
        await dispatch(calc({options,destination,date}))
    }
  return (
    <div className='bg-blue-900 text-white min-h-contain w-full flex flex-col items-start justify-start gap-4 px-4 pb-[4rem] relative'>
         
        <div className='flex items-start justify-between gap-3 px-4 py-2'>
            <div className='flex items-center justify-center px-4 py-2 gap-2 border border-2 rounded-[1.1rem]'>
                <FaBed/>
                <h1>Stays</h1>
            </div>
            <div className='flex items-center justify-center px-4 py-2 gap-2'>
                <FaPlane/>
                <h1>Flights</h1>
            </div>
            <div className='flex items-center justify-center px-4 py-2 gap-2'>
                <FaCar/>
                <h1>Car rentals</h1>
            </div>
            <div className='flex items-center justify-center px-4 py-2 gap-2'>
                <FaBed/>
                <h1>Attractions</h1>
            </div>
            <div className='flex items-center justify-center px-4 py-2 gap-2'>
                <FaTaxi/>
                <h1>Airport Taxis</h1>
            </div>
        </div>

        {type !== "lists" && <>
        <h1 className='text-[3rem] font-[600]'>A lifetime of discounts? It's Genius.</h1>
        <p className='text-[1.2rem] tracking-wider'>Get rewarded for your travels - unlock instant savings of 10% or more </p>
        <div className="registerbtns flex items-center justify-center gap-4 mt-4">
            <button className='shadow-[0rem_0rem_0.4rem_#fff] py-1 px-2 rounded-lg bg-blue-700'>Login</button>
            <button className='shadow-[0rem_0rem_0.4rem_#fff] py-1 px-2 rounded-lg bg-blue-700'>Register</button>
        </div>
        
        
        
        
        

        <div className=" searchBar flex items-center justify-between py-2 px-4 w-[80%] ml-[8rem] border border-red-600 absolute bottom-[-1.3rem] bg-white">

            <div className='flex items-center justify-center gap-2'>
                <span className='text-blue-900 text-2xl'><FaBed/></span>
                <input type="text" placeholder='Where are you going?' className='px-3 py-1 w-full text-black outline-none' onChange={(e)=>setDestination(e.target.value)} />
            </div>
            <div className='flex items-center relative justify-center gap-2' onClick={()=>setopenCalender(!openCalender)}>
                <span className='text-blue-900 text-[0.7rem]'><FaCalendar/>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                <input type="text" placeholder={`${month[date[0].startDate.getMonth()]} ${date[0].startDate.getDate()} to ${month[date[0].endDate.getMonth()]} ${date[0].endDate.getDate()}`} className='px-3 py-1 w-full text-black outline-none'/>
                {openCalender && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='absolute top-[3rem] z-[99]'
                />}
            </div>
            
            <div className='flex items-center justify-center gap-2 relative'>
                <span className='text-blue-900 text-2xl' onClick={()=>setopenCustomerDetails(!setopenCustomerDetails)}><FaPersonBooth/></span>
                <div className='text-black' onClick={()=>setopenCustomerDetails(!openCustomerDetails)}>
                    <span className='opacity-80'> {`${options.adult}`} Adult  </span>
                    <span className='opacity-80'> {`${options.children}`} Children </span>
                    <span className='opacity-80'> {`${options.room}`} Room</span>
                </div>
                {
                    openCustomerDetails && (
                    <div className='absolute top-[3rem] text-black flex flex-col gap-3 shadow-lg items-start w-[100%] justify-between py-2 px-3 z-[999]'>
                        <div className='flex items-start justify-between w-[100%]'>
                            <span>Adult</span>
                        
                            <div className='flex items-center justify-between gap-2'>
                                <button><AiFillPlusSquare className='text-2xl text-white bg-blue-600 border-0' onClick={()=>handleOptions("adult","i")} value={options.adult}/></button>
                                <span>{options?.adult}</span>
                                <button disabled={options.adult<=0}><AiFillMinusSquare className='text-2xl text-white bg-blue-600 border-0' onClick={()=>handleOptions("adult","d")}/></button>
                            </div>
                        </div>
                        <div className='flex  items-center justify-between w-[100%]'>
                            <span>Children</span>
                        
                            <div className='flex items-center justify-between gap-2'>    
                                <button ><AiFillPlusSquare className='text-2xl text-white bg-blue-600 border-0' onClick={()=>handleOptions("children","i")}/></button>
                                <span>{options.children}</span>
                                <button disabled={options.children<=0}><AiFillMinusSquare className='text-2xl text-white bg-blue-600 border-0' onClick={()=>handleOptions("children","d")} /></button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-[100%]'>
                            <span>Room</span>
                        
                            <div className='flex items-center justify-between gap-2'>    
                                <button><AiFillPlusSquare className='text-2xl text-white bg-blue-600 border-0' onClick={()=>handleOptions("room","i")} /></button>
                                <span>{options.room}</span>
                                <button disabled={options.room<=0}><AiFillMinusSquare className='text-2xl text-white bg-blue-600 border-0' onClick={()=>handleOptions("room","d")}/></button>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
            <button className='bg-blue-900 px-4 py-1 rounded-lg shadow-lg' onClick={navigator}>Search</button>
        </div>
        </>}
    </div>
  )
}

export default Header
