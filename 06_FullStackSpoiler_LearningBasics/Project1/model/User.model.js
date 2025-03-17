import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:["user","admin"], // You can have only two values for role 
        default:"user" // You should always give default value in case of enum.
    },
    isVerified:{
        type: Boolean,
        default:false
    },
    verificationToken:{
        type: String,
    },
    resetPasswordToken:{
        type: String,
    },
    resetPasswordExpires:{
        type: Date,
    },
},{
    timestamps:true // mongoose add two field in userSchema in database by this. createdAt & updatedAt.
})

const User = mongoose.model("User",userSchema)

export default User