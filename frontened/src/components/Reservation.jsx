import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getRoomsOfHotel } from '../redux/Slices/reservationSlice';
import { AiFillCloseCircle } from 'react-icons/ai';
import axiosInstance from '../helpers/axiosInstance';

const Reservation = ({setModal}) => {
  const [selectedRooms,setSelectedRooms] = useState([]);
  const {rooms} = useSelector((state)=> state.reservation);
  const {dates} = useSelector((state)=> state.calc);
  const dispatch = useDispatch()
  const {pathname}=useLocation()
  const handleClick =async ()=>{
      await Promise.all(selectedRooms.map(roomId=>{
      const res = axiosInstance.put(`/rooms/reservation/${roomId}`,{dates})
      return res.data
    }))
    setModal(false);
  }
  const isAvailable = (roomNumber)=>{
    
    const isFound = roomNumber.unavailableDates.some((date)=>
      dates.includes(new Date(date).getTime())
    )
    return !isFound;
  }

  const getDatesInRange = (startDate,endDate)=>{
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime())

    let list = [];
    while(date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  }

  const allDates = getDatesInRange(dates[0].startDate,dates[0].endDate);
  console.log(allDates);
  const handleSelect = (e)=>{
    const checked = e.target.checked;
    const value = e.target.value
    setSelectedRooms(checked 
      ? [...selectedRooms,value] 
      : selectedRooms.filter(item=>item!=value))
  }
  console.log(selectedRooms);

  useEffect(()=>{
    console.log(rooms)
  })
  return (
    <div className='text-black sticky top-[1rem] left-[30vw] bg-gray-400 px-3 min-h-[50vh] w-[50vw] border flex flex-col items-start justify-start rounded-lg shadow-lg gap-2'>

      <div className='self-end text-[1.6rem] cursor-pointer px-3 mt-2 bg-transparent' onClick={handleClick}>
        <AiFillCloseCircle/>
      </div>

      <div>
        {

          rooms  && rooms?.map((el,idx)=>{
            return (
              <div key={idx} className='grid grid-cols-[40%,60%] my-3'>
                <div className='flex items-start justify-start flex-col'>
                  <h1 className='font-[600]'>{el?.title || "Hello"}</h1>
                  <p>{el?.description || "My"}</p>
                  <span>Price :- {el?.price || "Friend"}</span>
                  <span>Max people:- {el?.maxPeople || "Friend"}</span>
                </div>

                <div className='self-start'>
                  {
                    el?.roomNumbers.map((el)=>{
                      return (
                        <div key={el?._id} className='flex items-center gap-2 justify-center'>
                          <p>{el?.number}</p>
                          <input type="checkbox" value={el?._id} onChange={handleSelect} disabled={!isAvailable} className='cursor-pointer'/>
                        </div>
                      )
                    })
                  }
                </div>

              </div>
            )
          })

        }

      </div>
      <button className='px-2 py-1 m-auto mb-4 rounded-lg bg-blue-400 text-white font-[500] tracking-wide' onClick={handleClick}>Reserve Now</button>
    </div>
  )
}

export default Reservation;