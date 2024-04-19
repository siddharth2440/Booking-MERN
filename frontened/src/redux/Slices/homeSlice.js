import {createSlice,createAsyncThunk} from "@reduxjs/toolkit" 
import axiosInstance from "../../helpers/axiosInstance.js";

const homeInitialState = {
    countByCity : null,
    countByType:null,
    featuredProperties:null,
    hotelItem : [],
    hotelInfo : undefined
};

export const getCityCount = createAsyncThunk('/getHotelByCount',async ()=>{
    const {data}=await axiosInstance.get('/hotels/countByCity?cities=london,berlin,madrid')
    return data;
})

export const countByType = createAsyncThunk('/countbyType',async ()=>{
    const {data} = await axiosInstance.get('/hotels/countByType');
    return data
})

export const getFeaturedProperties = createAsyncThunk('/featured',async ()=>{
    const {data} = await axiosInstance.get('/hotels/featured?feature=true&limit=4')
    return data
})

export const getItemOnSearch = createAsyncThunk('/searchHotels',async ({destination,max,min})=>{
    console.log(destination+"  Heoooo")
    const {data} = await axiosInstance.get(`/hotels/searchHotelsAgain?destination=${destination.toUpperCase() || "LONDON"}&min=${min || 1}&max=${max || 1000}`);
    return data;
})

// export const getSearchItem = createAsyncThunk('/searchHotels',async ({min,max,destination})=>{
//     const {data} = await axiosInstance.get(`/hotels/searchHotelsAgain?city=${destination || "MADRID"}&min=${min || 1}&max=${max || 1000}`);
//     return data
// })

export const getHotelInfo = createAsyncThunk('/getHotelInfo',async ({hotel_id})=>{
    const {data} = await axiosInstance.get(`/hotels/find/${hotel_id}`)
    return data;
})

const cityCount = createSlice({
    name:"homePageState",
    initialState:homeInitialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCityCount.fulfilled,(state,action)=>{
            state.countByCity = action.payload;
        }),
        builder.addCase(countByType.fulfilled,(state,action)=>{
            state.countByType = action.payload;
        }),
        builder.addCase(getFeaturedProperties.fulfilled,(state,action)=>{
            state.featuredProperties = action.payload;
        }),
        builder.addCase(getItemOnSearch.fulfilled,(state,action)=>{
            state.hotelItem = action.payload;
        }),
        builder.addCase(getHotelInfo.fulfilled,(state,action)=>{
            state.hotelInfo = action.payload?.findTheHotel
        })
    }
})

export default cityCount.reducer