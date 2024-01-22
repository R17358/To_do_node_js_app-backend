import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI,{          //database connection
    dbName: "backenedapi",
}).then((c)=>console.log("Database Connected with " + c.connection.host)).catch((e)=>console.log(e));
};
