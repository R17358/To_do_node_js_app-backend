import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI,{          //database connection
    dbName: "backenedapi",
}).then(()=>console.log("Database Connected")).catch((e)=>console.log(e));
};
