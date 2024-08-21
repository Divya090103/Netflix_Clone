const express =require('express')
const app =express();
const connectDB=require("./DB_connection/Connectdb")
const cors=require("cors")
require('dotenv').config();// npm i dotenv 
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your client's origin
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
)
// Middleware to parse JSON bodies
app.use(express.json());
// Define a route for the root URL ("/")
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });
app.use("/api",require("./Routes/Signin"));// npm i express-router

app.use("/api",require("./Routes/Login"));// login  route

app.use("/api",require("./Routes/update")) //change the password of presnt user

// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:`);
  console.log(process.env.PORT)
  connectDB();
});