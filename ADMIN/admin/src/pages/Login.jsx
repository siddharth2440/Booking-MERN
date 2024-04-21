import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {validate} from "email-validator"
import toast from 'react-hot-toast';
import { login } from '../redux/Slices/authSlice';
import { useDispatch } from 'react-redux';
const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = async(e) =>{
    e.preventDefault();
    if(!validate(email)){
      toast.error("Invalid Email");
      return
    }
    const dispatcher = await dispatch(login({email,password}));
    if(!dispatcher){
      toast.error("Cannot able to Dispatch login Handler");
      return;
    }
    toast.success("Dispatched Login");
    navigate("/dashboard");
    return;
  }
  return (
    <div className='min-h-screen w-[100vw] bg-gray-100'>
        <form noValidate onSubmit={loginHandler} className='border flex flex-col items-start justify-start gap-5 px-4 py-2 w-[40%] m-auto'>

            <h1 className='text-[2rem] font-[500] text-gray-600'>Login </h1>

            <div className="username w-[100%] self-auto">
                <input type="email" placeholder='Email...' className='px-2 py-1 rounded-md w-[80%] m-auto bg-gray-300' onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            
            <div className="username w-[100%]">
                <input type="text" placeholder='password...' className='px-2 py-1 rounded-md w-[80%] m-auto bg-gray-300' onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <button type="submit" className='bg-blue-600 rounded-md py-1 px-2 text-white w-[30%] mt-6'>Login</button>

        </form>
    </div>
  )
}

export default Login