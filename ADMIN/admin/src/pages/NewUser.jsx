import {useState} from 'react'
import React from 'react'
import Layout from "../layout/Layout.jsx"
import axios from 'axios'
import { createNewUser } from '../redux/Slices/usersSlice.js'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const NewUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file,setFile] = useState("")
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [country,setCountry] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const handleSubmit =async (e) =>{
    e.preventDefault()  
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    //POST https://api.cloudinary.com/v1_1/<Your_Cloud_NAME>/image/upload
    try {
      const uploadRes = await axios.post("https:api.cloudinary.com/v1_1/dutqi3eqg/image/upload",data);
      const {url} = uploadRes.data;
      const dispatchNewUser =await dispatch(createNewUser({username,email,country,password,phone,url}));
      if(!dispatchNewUser){
        toast.error("unable to dispatch");
        return;
      }
      else{
        toast.success("Registered Successfully");
        navigate("/dashboard");
        return;
      }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>

      <form onSubmit={handleSubmit} className='mx-3 px-2 py-2 grid grid-cols-[30%,70%] justify-center gap min-h-[60%] my-auto'>

          <div >
            <img src={
              file?URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            } />
          </div>

          <div className="flex items-center justify-between gap-2 flex-wrap px-2">

              <div className='file image py-1 px-1'>
                <label className='text-[1.3rem] font-[500]'> Image  </label>
                <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
              </div>

              <div className='username flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Username  </label>
                <input type="text" className="border-2 border-b-black w-[80%] px-2 outline-none" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
              </div>

              <div className='namewithsurname flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Name and Surname  </label>
                <input type="text" className="border-2 border-b-black w-[80%] px-2 outline-none" placeholder='Name and Surname' />
              </div>

              <div className='email flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Email  </label>
                <input type="email" className="border-2 border-b-black w-[80%] px-2 outline-none" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className='phone flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Phone  </label>
                <input type="number" placeholder="+1 234 567 89" className="border-2 border-b-black w-[80%] px-2 outline-none" onChange={(e)=>setPhone(e.target.value)}/>
              </div>

              <div className='password flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Password  </label>
                <input type="text" placeholder="password" className="border-2 border-b-black w-[80%] px-2 outline-none" onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              <div className='address flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Address  </label>
                <input type="text" placeholder="Address" className="border-2 border-b-black w-[80%] px-2 outline-none"/>
              </div>

              <div className='country flex flex-col items-start gap-2 w-[40%] justify-start'>
                <label className='text-[1.3rem] font-[500]'> Country  </label>
                <input type="text" placeholder="USA" className="border-2 border-b-black w-[80%] px-2 outline-none" onChange={(e)=>setCountry(e.target.value)}/>
              </div>

              <button type='submit' className='px-3 py-2 rounded-md text-white text-[1.1rem] font-[600] bg-green-900 mx-auto mt-4 w-[40%]'>Send</button>

          </div>

  

        </form>

    </Layout>
  )
}

export default NewUser