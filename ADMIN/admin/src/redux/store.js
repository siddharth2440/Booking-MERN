import {configureStore} from "@reduxjs/toolkit"
import usersSlice from "./Slices/usersSlice.js";
import hotelSlice from "./Slices/hotel.slice.js";

const store = configureStore({
    reducer:{
        users:usersSlice,
        hotels:hotelSlice
    }
})

export default store;