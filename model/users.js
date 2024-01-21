import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        select: true,       //select false to not show password in database
    },
    createdAt :{
        type: Date,
        required: true,
        default: Date.now,
    },
});

export const User = mongoose.model("User",schema);