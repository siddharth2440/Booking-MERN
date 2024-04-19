import {configureStore} from "@reduxjs/toolkit"
import  CityCount  from "./Slices/homeSlice.js";
import  calc  from "./Slices/calcSlice.js";
import userSlice from "./Slices/userSlice.js";
import reservationSlice from "./Slices/reservationSlice.js";
const store = configureStore({
    reducer:{
        home:CityCount,
        calc:calc,
        user:userSlice,
        reservation:reservationSlice
    }
})

export default store;