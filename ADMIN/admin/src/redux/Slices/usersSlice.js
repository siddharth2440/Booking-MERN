import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosIntance from "../../helpers/axiosInstance";

const initialState = {
    users:undefined,
    totalUsers:0
}

export const createNewUser = createAsyncThunk("/users/createNewUser",async ({username,email,country,password,phone,url})=>{
    console.log("Registered Data");
    const registerUser = await axiosIntance.post("/users/registerUser",{username,email,country,password,phone,url});
    return;
})

export const fetchUsers = createAsyncThunk("users/fetchUsers",async ()=>{
    const {data} = await axiosIntance.get("/users/getAllUsers");
    return data;
})

export const deleteUser = createAsyncThunk("users/deleteUser",async ({userId})=>{
    const {data} = await axiosIntance.delete(`/users/deleteUser/${userId}`);
    return data;
})

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.users = action.payload?.allUsersData,
            state.totalUsers = action.payload?.totalUsers
        })
    }
})

export default userSlice.reducer;