import React, { useState , useEffect} from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import {getHotelInfo} from '../redux/Slices/homeSlice.js'
import {AiFillCloseCircle,AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import { FaLaughWink } from 'react-icons/fa'
import {useLocation,useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import Reservation from '../components/Reservation'
import { getRoomsOfHotel } from '../redux/Slices/reservationSlice.js'
const Hotel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const hotel_id = pathname.split('/')[2]
  const [openFullImage,setOpenFullImage] = useState(false);
  const [index,setIndex] = useState(0);
  const [openModal,setOpenModal] = useState(false);

  const {hotelInfo}=useSelector((state)=>state.home);
  const {dates}= useSelector((state)=>state.calc)
  const {isLoggedIn} = useSelector((state)=>state.user);
  const roomInterior = [
    "https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1689609950057-8d01c2542fd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1661963540233-94097ba21f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D"
  ]

  const dayDifference = (date1,date2)=>{
    const MILLISECONDS_PER_DAY = 24*60*60*1000
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    // console.log(diffDays);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate,dates[0].startDate);
  console.log("Days ----->"+days);
  const showFullImage = (idx)=>{
    setOpenFullImage(!openFullImage);
    setIndex(idx);
    // console.log("We set the Index : ",index);
  }
  
  const imageIterate = (dir,idx)=>{
    let temp;
    // console.log(index);

    if(dir === "l"){
      temp = index === 0 ? 5 : index-1;
    }else{
      temp = index === 5 ? 0 : index+1;
    }
    setIndex(temp)
  }

  const dispatcher = async () =>{
    await dispatch(getHotelInfo({hotel_id}));
    await dispatch(getRoomsOfHotel({hotelId:hotel_id}));
  }
  const handleClick = ()=>{
    // isLoggedIn ? setOpenModal(!openModal) : navigate('/login')
    setOpenModal(!openModal)
  }
  useEffect(()=>{
    dispatcher()
  },[])
  return (
    <div>
        <Navbar/>
        <Header type={"lists"}/>
        <div className='min-h-[75vh] w-[85%] py-5 px-2 m-auto'>

            <h1 className='text-[2rem] font-[700]'>{hotelInfo ? hotelInfo?.title:"Tower street Apartments"}</h1>
            <span> 5 Basztowa, Old Town, 33-332 Krakow, Poland </span>
            <p>Excellent location - 500m from {hotelInfo?.city}</p>
            <span>Book a stay over $114 at this property and geet a free airport taxi</span>
            <div className='grid grid-cols-3 gap-2 py-3'>
              {
                roomInterior.map((el,idx)=>{
                  return(
                    <div className='overflow-hidden cursor-pointer  w-[100%] h-[90%]' key={idx}>
                        <img src={roomInterior[idx]} onClick={()=>showFullImage(idx)} alt=""  
                        className='transition-all delay-200 duration-[400ms] ease-in-out hover:scale-125 h-[100%] w-[100%]'
                        />

                        {
                          openFullImage && (
                            <div className='h-[80%] w-[90%] bg-black fixed top-[10%] right-[5%] m-auto flex flex-col items-start justify-between py-2 px-2'>
                              <AiFillCloseCircle className='self-end text-[2rem] cursor-pointer text-white'
                              onClick={()=>setOpenFullImage(!openFullImage)}
                              />
                              <div className='flex items-center justify-center gap-2 w-[100%] px-4 py-2'>
                                <AiOutlineLeft className='text-[2rem] bg-blue-200 rounded-[50%] text-black'
                                onClick={()=>imageIterate("l",idx)}
                                />
                                <img src={roomInterior[index]} alt="" />
                                <AiOutlineRight className='text-[2rem] bg-blue-200 rounded-[50%] text-black'
                                onClick={()=>imageIterate("r",idx)}
                                />
                              </div>
                            </div>
                          )
                        }


                    </div>
                  )
                })
              }
            </div>

            <div className=' w-[100%] mt-3 grid grid-cols-[65%,30%] gap-3'>
                  <div className='flex flex-col items-start justify-start gap-4 py-2'>
                    <h1 className='text-[2.6rem] px-2 font-[700]'>Stay in the Heart of the Kubow</h1>
                    <p className='text-[1rem] px-2 font-[500]'>
                    {hotelInfo?.description}
                    </p>
                  </div>

                  <div className='bg-blue-500 p-3 text-white my-2 rounded-lg flex flex-col items-start justify-start gap-2'>

                    <h1 className='text-[2rem] font-500 opacity-70 text-black'>Perfect for a 9-night stay!</h1>
                    <p>Located in the heart of the {hotelInfo?.city}, this property has and excellent location score of {hotelInfo?.rating}!</p>
                    <h1>${(hotelInfo?.cheapestPrice)*days} <span>({days} nights)</span></h1>
                    <button className='bg-blue-800 text-white px-2 rounded-md py-1 mt-3' onClick={handleClick}>Reserve and Book Now!</button>
                  </div>
              </div>
              {openModal && <Reservation setModal={setOpenModal}/>}
        </div>
    </div>
  )
}

export default Hotel;