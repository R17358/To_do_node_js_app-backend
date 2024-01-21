import express from "express";
import { getAllUsers, register, getMyProfile, login, logout} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

//NOTE: /users is at each router prefix

router.get("/all", getAllUsers);    //read all  CRUD
router.post("/new", register);      //create
router.post("/login", login);      //login
router.get("/logout", logout);       //logout 

//router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser);

//router.route("/me").get(getUserDetails);

router.get("/me", isAuthenticated, getMyProfile); //auth.js


export default router;