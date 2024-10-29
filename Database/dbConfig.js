import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDB;