import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from './constants.js';

dotenv.config({
    path: './.env'
})
import connectDB from './db/index.js';

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`Server running on ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
        console.log("MONGODB ERROR IS :", err);
        
})