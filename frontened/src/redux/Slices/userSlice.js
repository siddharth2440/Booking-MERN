import {createSlice,createAsyncThunk, buildCreateSlice} from "@reduxjs/toolkit" 
import axiosInstance from "../../helpers/axiosInstance.js";
import toast from "react-hot-toast";

const initialState = {
    user:JSON.parse(localStorage.getItem('user')) || {},
    role:JSON.parse(localStorage.getItem('role')) || "user",
    isLoggedIn:false
}

export const login = createAsyncThunk("/login",async ({email,password})=>{
    console.log("Emaillll  ----- "+email);
    console.log("Password  ----- "+password);
    const loginAccount = axiosInstance.post("/users/login",{email,password})
    toast.promise(loginAccount,{
        loading:"Logging in...",
        success:"Successfully logged in!",
        error:"Something went wrong!"
    })

    return (await loginAccount).data;
})

export const logout = createAsyncThunk("/logout",async ()=>{
    const logoutAccount = axiosInstance.get("/users/logout")
    toast.promise(logoutAccount,{
        loading:"Logging out...",
        success:"Successfully logged out!",
        error:"Something went wrong!"
    })

    return (await logoutAccount).data;
})



const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem('user',JSON.stringify(action.payload))
            localStorage.setItem('role',action.payload.isMailExists.role)
            localStorage.setItem('isLoggedIn',true);
            state.user = action.payload,
            state.isLoggedIn = true,
            state.role = action.payload.isMailExists.role
            // console.log(action.payload);
        })
        builder.addCase(logout.fulfilled,(state,action)=>{
            localStorage.clear();
            state.user = {}
            state.isLoggedIn = false
        })
    }
})

export default userSlice.reducer;