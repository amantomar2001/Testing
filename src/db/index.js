import mongoose from "mongoose"
import { DB_NAME } from '../constants.js';

const connectDB = async ()=>{
    try {
        const connectionInstance= await  mongoose.connect(`${ process.env.mongodb_url}/${DB_NAME}`) 
        console.log(`\n MongoDB connected !! DB host ${ connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Mongodb connection error :", error);
        process.exit(1)
        
    }
}

export default connectDB


