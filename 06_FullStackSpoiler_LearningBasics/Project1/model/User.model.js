import mongoose from "mongoose";
import bcrypt from "bcryptjs";
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

// Hooks
// pre hook and post hook.
//  it takes two parameters method and callback
// callback cannot be here arrow function because it does not have context of this.
userSchema.pre("save",async function(next){  // next is flag , i.e when your work is complete it denotes to continue.
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})  

const User = mongoose.model("User",userSchema)

export default User