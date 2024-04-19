import { Router } from "express";
const router = Router();
import {isLoggedIn,authorizedRoles} from "../middlewares/auth.middleware.js"
import {createRoom,deleteRoom,getRoom,updateRoom,getAllRoomsOfHotel, reservation} from "../controllers/room.controller.js";

//Create-Room
router.post('/:hotelId',isLoggedIn,authorizedRoles("ADMIN"),createRoom);

//Update-Room
router.put('/:hotelId/:roomId',isLoggedIn,authorizedRoles("ADMIN"),updateRoom);

//reservation
router.put('/reservation/:roomId',reservation);

//Delete-Room
router.delete('/:hotelId/:roomId',isLoggedIn,authorizedRoles("ADMIN"),deleteRoom);

//get-Room
router.get('/getRoomInfo/:hotelId/:roomId',getRoom);

//get-All Rooms of Hotel
router.get('/room/:hotelId',getAllRoomsOfHotel);
export default router;