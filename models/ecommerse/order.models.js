import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    }
});

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    cutomer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserEcom",
        required:true
    },
    orderItems:[orderItemSchema],
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","shipped","delivered","cancelled"],
        default:"pending"
    }
},{timestamps:true});

export const Order = mongoose.model("Order", orderSchema);