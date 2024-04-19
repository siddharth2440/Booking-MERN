import React, { useState } from 'react'
import {validate} from "email-validator"
import toast from "react-hot-toast"
import { useDispatch } from 'react-redux';
import { login } from '../redux/Slices/userSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = async (e)=>{
        e.preventDefault();
        if(!email || !password){
            toast.error("Please fill all the fields");
            return;
        }
        if(password.length <5){
            toast.error("Password must be at least 5 characters long");
            return;
        }
        if(!validate(email)){
            toast.error("Please enter a valid email address");
            return;
        }

        const dispatcher = await dispatch(login({email,password}))
        if(!dispatcher){
            toast.error("not dispatched");
            return;
        }
        navigate('/');  
    }
  return (
    <div className='w-[100%] h-[100vh]'>
        <form onSubmit={submitHandler} noValidate className='w-[30%] m-auto rounded-b-md shadow-[0rem_1rem_1rem_rgba(0,0,0,0.4)] h-[40%] bg-gray-200 flex flex-col py-3 px-2 items-start justify-start gap-3'>
            <h1 className='px-2 py-1 text-[2rem] self-center font-[600]'>Login</h1>
            <div className='email flex items-start justify-between gap-3 mt-4'>

                <label htmlFor="email" className='text-[1.2rem] font-[600]'>Email : </label>
                <input type="email" placeholder='Email...' required className='px-2 py-1 rounded-sm outline-none' onChange={(e)=>setEmail(e.target.value)}/>

            </div>

            <div className='username flex items-start justify-between gap-3'>

                <label htmlFor="username" className='text-[1.2rem] font-[600]'>Password : </label>
                <input type="text" placeholder='password...' required className='px-2 py-1 rounded-sm outline-none' onChange={(e)=>setPassword(e.target.value)}/>

            </div>

            <button className='mt-[3rem] bg-blue-400 px-2 text-[1.3rem] font-[600] text-white rounded-sm shadow-2xl ml-3' type='submit'>Login</button>

        </form>
    </div>
  )
}

export default Login;