//npm init
//npm i express mongoose dotenv cookie-parser

import express from "express";
import userRouter from "./routes/users.js";
import taskRouter from "./routes/tasks.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

config({
    path:"./data/config.env",
});

export const app = express();

app.use(cors({
    origin: [process.env.FRONTENED_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));          // deployment
app.use(express.json());    //to access json data from postman
app.use(cookieParser());
app.use("/api/v1/users",userRouter);   //default every api or route has prefix /users
app.use("/api/v1/tasks",taskRouter);
app.use(errorMiddleware);




