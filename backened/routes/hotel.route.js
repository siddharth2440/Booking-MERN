import { Router } from "express";
import {createHotel,deleteHotel,getHotel,getHotels,updateHotel,countByCity, countByType,featured,hotels,searchHotels} from "../controllers/hotel.controller.js"
import {isLoggedIn,authorizedRoles} from "../middlewares/auth.middleware.js"
const router = Router();

//create Hotel
// router.post('/',isLoggedIn,authorizedRoles("ADMIN"),createHotel);
router.post('/',createHotel);

//update Hotel
router.put('/:id',isLoggedIn,authorizedRoles("ADMIN"),updateHotel)

//delete Hotel
// router.delete('/:hotelId',isLoggedIn,authorizedRoles("ADMIN"),deleteHotel);
router.delete('/:hotelId',deleteHotel);

//get Hotel
router.get('/find/:id',getHotel);

//get Hotels  (only Access By the Admin)
// router.get('/',isLoggedIn,authorizedRoles("ADMIN"),getHotels);
router.get('/',getHotels);

router.get('/countByCity',countByCity);
router.get('/countByType',countByType);
router.get('/featured',featured);
router.get('/searchHotels',hotels);
router.get('/searchHotelsAgain',searchHotels);

export default router;