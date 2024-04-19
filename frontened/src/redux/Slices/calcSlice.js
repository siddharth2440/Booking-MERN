import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    city:undefined,
    dates:undefined,
    options:{
        adult:undefined,
        children:undefined,
        room:undefined
    }
}

const calcSlice = createSlice({
    name:"calcSlice",
    initialState,
    reducers:{
        calc:(state,action)=>{
            state.city = action.payload.destination,
            state.options = action.payload.options,
            state.dates = action.payload?.date
            // console.log(action?.payload?.date[0].endDate.getMonth())
            // console.log(action?.payload?.date[0].startDate.getMonth())
        }
    },
    extraReducers:(builder)=>{}
})

export const {calc} = calcSlice.actions 
export default calcSlice.reducer