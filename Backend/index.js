const express =require('express')
const app =express();
const connectDB=require("./DB_connection/Connectdb")
require('dotenv').config();// npm i dotenv 


// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use("/api",require("./Routes/Signin"));// npm i express-router



// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:`);
  console.log(process.env.PORT)
  connectDB();
});