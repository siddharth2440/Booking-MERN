import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
    rooms:null
}


export const getRoomsOfHotel = createAsyncThunk('/seeAllRooms',async ({hotelId})=>{
    const {data} = await axiosInstance.get(`/rooms/room/${hotelId}`);
    return data;
})

// export const reserveTheHotels = createAsyncThunk('/reserveHotels',async ()=>{
//     const {data} = await axiosInstance.put('/rooms/reservation',data);
//     return data;
// })

const reservationSlice = createSlice({
    name:"reservation",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getRoomsOfHotel.fulfilled,(state,action)=>{
            state.rooms = action.payload;
        })
    }
})

export default reservationSlice.reducer;