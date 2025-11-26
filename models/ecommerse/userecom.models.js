import mongoose from "mongoose";

const userecomSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

export const UserEcom = mongoose.model("UserEcom", userecomSchema);