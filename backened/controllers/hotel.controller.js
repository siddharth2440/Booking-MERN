import hotel from "../models/Hotel.js";
export const createHotel = async (req,res)=>{ 
    const newHotel = new hotel(req.body);
    try {
        const savedHotel = await newHotel.save()
        if(!savedHotel){
            return res.status(400).json({
                success:false,
                message: "Something went wrong"
            })
        }
        return res.status(200).json({
            success:true,
            message: "Hotel created successfully",
            data:savedHotel
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Error in creating the Hotel"
        })
    }
}

export const updateHotel =async (req,res)=>{
    const {id} = req.params;
    const findHotel = await hotel.findById(id)
    if(!findHotel){
        return res.status(400).json({
            success:false,
            message: "Hotel not found"
        })
    }

    const updatedHotel = await hotel.findByIdAndUpdate(id,req.body,{new:true})
    if(!updatedHotel){
        return res.status(400).json({
            success:false,
            message: "Something went wrong"
        })
    }
    return res.status(200).json({
        success:true,
        message: "Hotel updated successfully",
        data:updatedHotel
    })
}

export const deleteHotel = async (req,res)=>{
    const {hotelId} = req.params;
    // console.log(hotelId);
    const findHotel = await hotel.findOne({_id:hotelId});
    if(!findHotel){
        return res.status(400).json({
            success:false,
            message: "Hotel not found"
        })
    }

    const deletedHotel = await hotel.findByIdAndDelete(hotelId)
    if(!deletedHotel){
        return res.status(400).json({
            success:false,
            message: "Something went wrong"
        })
    }
    return res.status(200).json({
        success:true,
        message: "Hotel deleted successfully",
        data:deletedHotel
    })
}

export const getHotel = async (req,res)=>{
    const {id} = req.params;
    const findTheHotel = await hotel.findById(id);
    if(!findTheHotel){
        return res.status(400).json({
            success:false,
            message: "Hotel not found"
        })
    }
    
    return res.status(200).json({
        success:true,
        message:"hotel is there",
        findTheHotel
    })
}

export const getHotels = async (req,res)=>{
    const getAllHotels = await hotel.find({}).limit(10);
    if(!getAllHotels){
        return res.status(400).json({
            success:false,
            message: "Something went wrong"
        })
    }
    return res.status(200).json(getAllHotels)
}

export const countByCity =async (req,res)=>{
    const cities = req.query.cities.split(",");
    const list = await Promise.all(cities.map((city)=>{
        return hotel.countDocuments({city})
    }))

    return res.status(200).json(list)
}

export const countByType = async (req,res)=>{
    const hotelCount = await hotel.countDocuments({type:"hotel"})
    const apartmentCount = await hotel.countDocuments({type:"apartment"})
    const resortCount = await hotel.countDocuments({type:"resort"})
    const villaCount = await hotel.countDocuments({type:"villa"})
    const cabinCount = await hotel.countDocuments({type:"cabin"})
    return res.status(200).json(
        [
            {type:"hotel",total:hotelCount},
            {type:"apartment",total:apartmentCount},
            {type:"resort",total:resortCount},
            {type:"villa",total:villaCount},
            {type:"cabin",total:cabinCount}
        ]
    )
}

export const featured = async (req,res)=>{
    const {feature,limit} = req.query;
    const findTheFeatured = await hotel.find({featured:feature}).limit(limit)
    return res.status(200).json(
        findTheFeatured
    )
}

export const hotels = async (req,res)=>{
    const hotels = await hotel.find({city:req.query.city});
    return res.status(200).json(hotels)
}

export const searchHotels = async (req,res)=>{
    const {min,max,destination} = req.query;

    console.log(min+max+destination);
    const findTheHotels = await hotel.find({
        city:destination,
        $and:[{cheapestPrice:{$gte:min}},{cheapestPrice:{$lte:max}}]
    })

    res.status(200).json(findTheHotels)
}