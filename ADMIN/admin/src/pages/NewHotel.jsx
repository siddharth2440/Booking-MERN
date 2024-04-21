import React, { useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios';
import toast from "react-hot-toast"
import { listSubheaderClasses } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createNewHotel } from '../redux/Slices/hotel.slice';
import { useDispatch } from 'react-redux';

const NewHotel = () => {
    const [files,setFiles] = useState("");
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [distance,setDistance] = useState("");
    const [type,setType] = useState("");
    const [description,setDescription] = useState("");
    const [title,setTitle] = useState("");
    const [cheapestPrice,setCheapestPrice] = useState("");
    const [featured,setFeatured] = useState(false);
    const [rating,setRating] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit =async (e) =>{
        e.preventDefault(); 
        const list =await Promise.all(
            Object.values(files).map( async (file)=>{
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");
                //POST https://api.cloudinary.com/v1_1/<Your_Cloud_NAME>/image/upload
                const res = await axios.post("https:api.cloudinary.com/v1_1/dutqi3eqg/image/upload",data);
                const {url} = res.data;
                return url;
            })
        )
        const dispatcher = await dispatch(createNewHotel({photos:list,name,address,city,distance,type,description,title,cheapestPrice,featured,rating}))
        if(!dispatcher){
            toast.error("Unable to create the Hotel");
            return
        }
        toast.success("Hotel CreateD Successfully");
        navigate("/dashboard");
        return;
    }
  return (
    <Layout>

        <form onSubmit={handleSubmit} className='mx-3 px-2 py-2 grid grid-cols-[30%,70%] justify-center gap min-h-[60%] my-auto'>

        <div >
            <img src={
                files?URL.createObjectURL(files[0]):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            } />
        </div>

        <div className="flex items-center justify-between gap-2 flex-wrap px-2">

            <div className='file image py-1 px-1'>
                <label className='text-[1.3rem] font-[500]'> Image  </label>
                <input multiple type="file" onChange={(e)=>setFiles(e.target.files)}/>
            </div>

            <div className='username flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Name  </label>
                <input type="text" className="border-2 border-b-black w-[80%] px-2 outline-none" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className='namewithsurname flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Type  </label>
                <input type="text" className="border-2 border-b-black w-[80%] px-2 outline-none" placeholder='type' onChange={(e)=>setType(e.target.value)}/>
            </div>

            <div className='email flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> City  </label>
                <input type="text" className="border-2 border-b-black w-[80%] px-2 outline-none" placeholder='city' onChange={(e)=>setCity(e.target.value)}/>
            </div>

            <div className='phone flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Address  </label>
                <input type="text" placeholder="address" className="border-2 border-b-black w-[80%] px-2 outline-none" onChange={(e)=>setAddress(e.target.value)}/>
            </div>

            <div className='password flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Distance from City Center  </label>
                <input type="text" placeholder="distance" className="border-2 border-b-black w-[80%] px-2 outline-none" onChange={(e)=>setDistance(e.target.value)}/>
            </div>

            <div className='address flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Title  </label>
                <input type="text" placeholder="title" className="border-2 border-b-black w-[80%] px-2 outline-none" onChange={(e)=>setTitle(e.target.value)}/>
            </div>

            <div className='country flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Description  </label>
                <input type="text" placeholder="description" className="border-2 border-b-black w-[80%] px-2 outline-none" onChange={(e)=>setDescription(e.target.value)}/>
            </div>

            <div className='country flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Price  </label>
                <input type="text" placeholder="price" className="border-2 border-b-black w-[80%] px-2 outline-none" onChange={(e)=>setCheapestPrice(e.target.value)}/>
            </div>

            <div className='country flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Featured  </label>
                <select name="featured" id="featuredHotel" className='border w-[50%] cursor-pointer' onChange={(e)=>setFeatured(e.target.value)}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>  
                </select>
            </div>

            <div className='country flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Rating  </label>
                <input type="number" placeholder="rating" className="border-2 border-b-black w-[80%] px-2 outline-none" onChange={(e)=>setRating(e.target.value)}/>
            </div>
            <button type='submit' className='px-3 py-2 rounded-md text-white text-[1.1rem] font-[600] bg-green-900 mx-auto mt-4 w-[40%]'>Send</button>

</div>



</form>

    </Layout>
  )
}

export default NewHotel