import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance.js"
import toast from "react-hot-toast"
const initialState = {
    hotels:undefined
}

export const getHotelData = createAsyncThunk("/hotels/getHotelsData",async ()=>{
    const {data} =await axiosInstance.get('/hotels')
    return data;
})

export const deleteHotel = createAsyncThunk("/hotel/delete",async ({userId})=>{
    const deleteHotel = await axiosInstance.delete(`/hotels/${userId}`)
    return;
})

export const createNewHotel = createAsyncThunk("/hotel/create",async({photos:list,name,address,city,distance,type,description,title,cheapestPrice,featured,rating})=>{
    const createHotel =await axiosInstance.post("/hotels",{photos:list,name,address,city,distance,type,description,title,cheapestPrice,featured,rating})
    return;
});

const hotelSlice = createSlice({
    name:"hotels",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getHotelData.fulfilled,(state,action)=>{
            state.hotels = action.payload
        })
    }
})

export default hotelSlice.reducer;