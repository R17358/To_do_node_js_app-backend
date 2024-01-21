import {User} from "../model/users.js";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

export const getAllUsers =  async(req,res)=>{

   try {
    const users = await User.find({});
    //console.log(req.query);         //3:26
    res.json({
        success : true,
        users,
    });
   } catch (error) {
        next(error);
   }
 };

 export const login = async(req, res, next) => {

   try {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    //const user = await User.findOne({email}).select("+password")

    if(!user)
    {
        return res.status(404).json({
            success: false,
            message: "Invalid User! Register first",
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch)
    {
        return res.status(404).json({
            success: false,
            message: "Invalid password",
        });
    }

    sendCookie(user, res, 'Welcome back'+" "+ user.name, 200);
   } catch (error) {
        next(error);
   }
 };


 export const register =  async(req,res)=>{

 try {
    const{name, email, password} = req.body;
    
    let user = await User.findOne({email});

    if(user)
    {
        return res.status(404).json({
            success: false,
            message: "user already exist",
        });
    }
        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        
        sendCookie(user, res, "Registered Successfully", 201);
 } catch (error) {
    next(error);
 }
  };

  export const getMyProfile = (req,res)=>{
    try {
         /*
    //const id = req.body.id;
    const {id} = req.body;
    const user = await User.findById(id);   //for every user detail by id
   //console.log(req.params)       //3:26
    res.json({
        success: true,
        user,
    });
    */
   // const {id} = req.body;

    res.status(200).json({
        success: true,
        user: req.user,
    });
    } catch (error) {
       next(error); 
    }
};

 export const logout = (req,res)=>{

    res.status(200).cookie("token","",{expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" :"none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
    }).json({
        success: true,
        user: req.user,
    });
 }