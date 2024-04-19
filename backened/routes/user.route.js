import { Router } from "express";
import {register,login,logout,getUserprofile, getAllUsers,deleteUser,registerNewUserByAdmin} from "../controllers/user.controller.js";
import {isLoggedIn,authorizedRoles} from "../middlewares/auth.middleware.js"
const router = Router();


router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/profile",isLoggedIn,authorizedRoles("USER","ADMIN"),getUserprofile);
router.post("/registerUser",registerNewUserByAdmin);
router.get("/getAllUsers",getAllUsers);
router.delete("/deleteUser/:userId",deleteUser);
export default router;