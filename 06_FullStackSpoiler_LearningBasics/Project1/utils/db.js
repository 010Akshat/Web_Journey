import mongoose from "mongoose";

// Sometimes when third party is involved , they are not automatically imported and process.env does not work
// Hence we import them explicitly in this file
import dotenv from "dotenv";
dotenv.config();


// Their are different ways to connect to mongoDB
// If I write this in index.js then it would have been iife.
const db = ()=>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected To Mongodb");
    })
    .catch((err)=>{
        console.log("Error Connecting To Mongodb");
    });
}

export default db