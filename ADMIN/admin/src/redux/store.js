import {configureStore} from "@reduxjs/toolkit"
import usersSlice from "./Slices/usersSlice.js";
import hotelSlice from "./Slices/hotel.slice.js";
import authSlice from "./Slices/authSlice.js";

const store = configureStore({
    reducer:{
        users:usersSlice,
        hotels:hotelSlice,
        auth:authSlice
    }
})

export default store;