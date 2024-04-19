import React , {useEffect,useState} from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import {getItemOnSearch} from "../redux/Slices/homeSlice.js"
import {useSelector,useDispatch} from "react-redux"
import SearchItem from '../components/SearchItem'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRange} from "react-date-range"

const Hotels = () => {
    const [openCalender,setOpenCalender] = useState(false);
    const dispatch = useDispatch()
    const [min,setMin] = useState(0);
    const [max,setMax] = useState(0);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);
    const {hotelItem}=useSelector((state)=>state.home);

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"]; 
    const {state} = useLocation();
    // console.log(state)
    const [destination,setDestination] = useState(state[1]);

    const actionDispatcher =async ()=>{
      await dispatch(getItemOnSearch({min,max,destination}))
    }
  return (
    <div>
        <Navbar/>
        <Header type={"lists"}/>

        <div className='grid grid-cols-[30%,70%]'>
          <div className="sticky right-0 bg-yellow-200 bottom-0 top-0 min-h-[100vh] rounded-md">
            <div className='bg-yellow-300 h-[80%] w-[80%] my-[20%] m-auto py-3 rounded-sm px-3 flex flex-col items-start justify-start gap-3 '>
                <h1 className='text-2xl font-[600] opacity-60'>Search</h1>
                <div className=' px-1 w-[90%] flex items-start justify-between py-1'>
                  <span>Destination</span>
                  <input type="text" placeholder={state[1] || "destination"} className='outline-none px-2 py-1 rounded-sm' onChange={(e)=>setDestination(e.target.value)}/>
                </div>
                <div className=' px-1 w-[90%] flex items-start justify-between py-1 relative'>
                  <span>Check-in Date</span>
                  <input type="text" onClick={()=>setOpenCalender(!openCalender)} placeholder={`${month[date[0].startDate.getMonth()]} ${date[0].startDate.getDate()} to ${month[date[0].endDate.getMonth()]} ${date[0].endDate.getDate()}`} className='outline-none px-2 py-1 rounded-sm'/>
                  {openCalender && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='absolute top-[3rem] z-[99]'
                  />}
                </div>

                <span className='text-[0.9rem] font-[500] capitalize mt-5 opacity-80'>options</span>
                <div className='px-1 w-[90%] flex items-start justify-between py-1'>
                  <span>Min price <span className='text-[0.7rem]'>(per night)</span></span>
                  <input type="text" className='outline-none px-2 py-1 rounded-sm' onChange={(e)=>setMin(e.target.value)}/>
                </div>
                <div className='px-1 w-[90%] flex items-start justify-between py-1'>
                  <span>Max price <span className='text-[0.7rem]'>(per night)</span></span>
                  <input type="text" className='outline-none px-2 py-1 rounded-sm' onChange={(e)=>setMax(e.target.value)}/>
                </div>
                <div className='px-1 w-[90%] flex items-start justify-between py-1'>
                  <span>Adult</span>
                  <input type="text" className='outline-none px-2 py-1 rounded-sm' placeholder={state[0].adult || "adult"}/>
                </div>
                <div className='px-1 w-[90%] flex items-start justify-between py-1'>
                  <span>Children</span>
                  <input type="text" className='outline-none px-2 py-1 rounded-sm' placeholder={state[0].children || "children"}/>
                </div>
                <div className='px-1 w-[90%] flex items-start justify-between py-1'>
                  <span>Room</span>
                  <input type="text" className='outline-none px-2 py-1 rounded-sm' placeholder={state[0].room || "room"}/>
                </div>
                <button className='w-[100%] border bg-blue-700 text-white mt-9 py-2 px-4 rounded-md shadow-[0rem_0rem_1rem_rgba(0,0,0,0.4)]' onClick={actionDispatcher}>Search</button>
            </div>
          </div>
          <div className='min-h-screen px-4 flex flex-col items-start justify-start gap-4'>
            {
              hotelItem && hotelItem.map((el,idx)=>{
                return (
                  <SearchItem data={el} key={idx}/>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Hotels