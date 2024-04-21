import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axiosIntance from "../../helpers/axiosInstance"

const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isLoggedIn:false,
    role:""
}

export const login = createAsyncThunk("/auth/login",async ({email,password})=>{
    const {data} =await axiosIntance.post(`/users/login`,{email,password});
    return data;
})

export const logout = createAsyncThunk("/auth/logout",async ()=>{
    const res =await axiosIntance.get(`/users/logout`);
    return;
})


const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem("user",JSON.stringify(action.payload.isMailExists));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action.payload.isMailExists.role);
            state.user = action.payload.isMailExists;
            state.isLoggedIn = true;
            state.role = action.payload.isMailExists.role;
        }),
        builder.addCase(logout.fulfilled,(state,action)=>{
            localStorage.clear();
            state.user = {};
            state.isLoggedIn = false;
            state.role = "";
        })
    }
})

export default authSlice.reducer;