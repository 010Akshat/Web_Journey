// This is starting file of backend ;
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js" // Sometimes you need to write .js and sometimes not.
// For precaution we are writing now
// It is also error prone area.

// import all routes
import userRoutes from "./routes/user.routes.js";

dotenv.config() // If your file is not root directory of project , you pass path of env file in .config('path');

const app = express(); // All powers of express are now in app. // app is now web server.

// read txt file in Notes folder about cors.
app.use(cors({
    origin: process.env.BASE_URL , // You can provide array if you want multiple origins to allow access.
    // It is most error prone area , especially in localhost , from frontend it gives errors many times from localhost.
    // Example , you send request from frontend "https://localhost:5000", and you allowed it here,
    // still it gives error manytimes.
    credentials: true,
    //allows the server to accept requests that include credentials like cookies, HTTP authentication, or 
    // client-side SSL certificates. Useful when dealing with session management, JWT tokens, or any
    //  authentication mechanism.
    methods:['GET','POST','DELETE','OPTIONS'], // which methods are allowed
    allowedHeaders:['ContentType','Authorization'] 
    //(which specifies the type of data being sent, e.g., JSON, used for authentication tokens).
    })
);
// This is headAche for whole development world.


app.use(express.json()) // To accept json from client
/*
The line app.use(express.json()) is used in Node.js with the Express.js framework to parse incoming JSON 
payloads from the request body.

Explanation:
app.use() is a middleware function in Express that allows you to run some code before handling the request.
express.json() is a built-in middleware in Express that parses incoming requests with JSON payloads. 

Why do we need this?
When a client sends data to the server in JSON format (like in a POST or PUT request), 
the server needs to be able to understand and access this data. 
express.json() parses the JSON data and makes it available in req.body.
*/

app.use(express.urlencoded({extended:true}))
/*
app.use(express.urlencoded({ extended: true })) is a middleware function in Express.js that parses incoming requests 
with URL-encoded payloads.

📌 Explanation:
It is part of the body-parser module but comes built-in with Express (since version 4.16.0).
It allows you to extract data from HTML forms and access it via req.body.
*/


const port = process.env.PORT || 3000;  // In production (render, digitalOcean , AWS), port is provided by server , server allocates you  port ,
// in case it is not available we can use 3000
// right now server port is given by us in .env file.

// app.get(route,(req,res)=>{})  -> It is general syntax, first is route i.e where request(get req) is sending.
// (req,res) -> EXPRESS provide you both req and res in which you can use in your callback function.
// req is request made by user and by using res you can send back anything to frontend.
// This whole callback function is called controller.
// Controllers are at last only functions
app.get("/",(req,res)=>{ 
    res.send("Cohort!");
});

app.get("/hitesh",(req,res)=>{ 
    res.send("hitesh!");
});
console.log(process.env.PORT)
app.get("/piyush",(req,res)=>{   // only writing "piyush" will give error , route always start with /.
    res.send("piyush!");
});

//connect to db
db();

// user routes(Make sure to write them after connection to db)
app.use("/api/v1/users",userRoutes); // api/v1/users tak sabme common hoga uske baad userRoutes se add hojayega chahe empty / hi ho.
app.listen(port,()=>{
    console.log(`Example app listening on ${port}`);
});


// Technically all this was boiler plate code.


/*
A port in computer networking is a communication endpoint that allows devices and applications to exchange 
data over the internet or a local network.


🌐 In Simple Terms:
1. Imagine your computer as a big building (IP address).
2. Inside the building, there are different rooms (ports) for different services like web browsing, 
   email, or file transfer.
3. Each port has a unique number that identifies the specific service or application.

🚪 Common Port Numbers:

Port Number	    Service
80	            HTTP (Web pages)
443	            HTTPS (Secure web pages)
22	            SSH (Secure Shell)
3306	        MySQL Database
3000	        Express.js (default for development)

🛠️ In Node.js/Express.js:
When you write this code:

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

You're telling the server to "listen" on port 3000.
Any request sent to localhost:3000 will be handled by your Express app.

In an Express.js project, there will always be only one app.listen() because:

🌟 Reason:
app.listen() is responsible for starting the server and binding it to a specific port.
Once the server is running, it can handle multiple routes (app.get(), app.post(), etc.) within that 
single server instance.
*/
