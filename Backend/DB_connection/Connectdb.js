require('dotenv').config();
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connection successful");

  
  } catch (e) {
    console.log("Connection error:", e);
    return false;
  }
};

module.exports=connectDB