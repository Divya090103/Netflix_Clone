const express = require("express");
const route = express.Router();
const user = require("../models/User");
//bcrypt the entered password
const bcrypt = require("bcrypt");
//json sccrest key for authentication
const jwt = require("jsonwebtoken");

route.post("/Sign_in", async (req, res) => {
  console.log("try to send the user to the backend");
  try {
    const accessToken = jwt.sign(req.body.password, process.env.TOKEN_SECRET);
    const cyptedpassword = await bcrypt.hash(req.body.password, 10);

    const newuser = await user.create({
      email: req.body.email,
      password: req.body.password,
      JwtToken: accessToken,
    });
    return res.send({ success: true, message: "user is created successfully" });
  } catch (e) {
    return res.send({ success: false, Message: "error" });
  }
});
 module.exports=route