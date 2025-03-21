import { log } from "console";
import User from "../model/User.model.js";
import crypto from "crypto"; // This module is provided by node.js it does not need to install separately.// Used to make token
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//register user (sirf mail bhejenge)
const registerUser = async (req,res)=>{
    // get data
    // validate
    // check if user already exist
    // create a user in Database
    // create a verification token
    // save Token in database
    // send token as email to user
    // send success status to user
    const {name,email,password} = req.body; // req.body se jo bhi body me aa rah hai vo sab miljata hai 

    if(!name || !email || !password){
        return res.status(400).json({
            message:"All fields are Required",
        });
    }
    
    try{
        const existingUser =  await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                "message":"User already exist",
            })
        }
        const user = await User.create({
            name,
            email,
            password
        })
        if(!user){
            return res.status(400).json({
                "message":"User not registered",
            })
        }
        console.log(user);

        // create a token
        const token = crypto.randomBytes(32).toString("hex");
        console.log(token);
        user.verificationToken=token;
        await user.save();

        // send email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.MAILTRAP_USERNAME,
              pass: process.env.MAILTRAP_PASSWORD,
            },
          });
        
        const mailOption = {
            from: process.env.MAILTRAP_SENDERMAIL, // sender address
            to: user.email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: `Please click on the following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain text body
          };
        await transporter.sendMail(mailOption);

        res.status(201).json({
            message:"User Registered Successfully",
            success: true
        })
  
    }
    catch(error){
        res.status(400).json({
            message:"User not Registered ",
            error,
            success: false
        })
    }

}

// how to verify user (mail se click karwake verify karenge) (It is not OTP based)
const verifyUser = async (req,res)=>{
    // get token from URL
    // validate
    // find user based on token
    // if not
    // set isVerified field to true
    // remove verification
    // save 
    // return response
    const {token} = req.params // jo bhi data URL me aa rah hai vo mil jata hai (:token) in user.routes.js
    console.log(token);
    if(!token){
        return res.status(400).json({
            message:"Invalid token"
        })
    }
    const user = await User.findOne({verificationToken:token}) // In previous case email:email were same that's why only email was sent
    if(!user){
        return res.status(400).json({
            message:"Invalid token"
        })
    }
    user.isVerified=true;
    user.verificationToken=undefined
    await user.save();

}

// email login 
const login = async (res,req)=>{
    // email password by user
    // check if email exist
    // convert password into hashed 
    // check hashed password matches with saved password
    // if password also matches 
    // Their are two ways to login (session) & (jwt)
//  i) SESSION : if email and password are correct , we generate a session token , one copy is saved in db and one sent to user.
       // now whenever user request any action , user send session token at backend and it is matched with session token stored at backend
       // hence everytime db call has to be made (just to check user is login or not)but it as also managing state.
//  ii) stateless login -> json web token (jwt)


    const {email,password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message:"All fields are required"
        })
    }
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"Invalid Email or password"
            })
        }
        const isMatch = await bcrypt.compare(password,user.password);
        console.log(isMatch);
        if(!isMatch){
            return res.status(400).json({
                message:"Invalid Email or password"
            })
        }

        // Their is saying about jwt whomever has token is login.
        // We will study about json web token in detail later.
        const token = jwt.sign({id:user._id, role:user.role}, // It is normal object(payload) // user._id is given as _id , you can check in mongodb.
            "shhhhh", // Secret key ideally it should be in env file for now we are just using here
            {
                expiresIn:'24h' // It should also be in env variables 24h.
            }
        );

        // It is good to store token in cookies(It is one of the flow especially in web development)
        const cookieOptions = {
            httpOnly:true, // it ensures that cookie is under control of backend not user
            secure:true,
            maxAge: 24*60*60*100
        }

        res.cookie("token",token,cookieOptions); //"token" is key and token is value , i.e key value pair & third is cookieOptions

        res.status(200).json({
            success:true,
            message:"Login successfull",
            token,
            user:{
                id:user._id,
                name:user.name,
                role:user.role
            }
        })

    }catch(error){
        res.status(400).json({
            message:"User not Login ",
            error,
            success: false
        })
    }
}

// Remember  before proceeding further nodemailer and mailtrap env variables are not completed yet 
export {registerUser,verifyUser, login};
