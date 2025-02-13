import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`Connected to ${connectionInstance.connection.name} database`); 
    // console.log(connectionInstance.connection);
} 
    catch (error) {
    console.log("connection error",error);
    process.exit(1);
  }
}

export default connectDB;