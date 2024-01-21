//now server.js is main file

import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

app.listen(process.env.PORT, ()=>{
    console.log("Server is working");
});

// npm i cors   for deployment