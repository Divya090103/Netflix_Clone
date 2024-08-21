const express = require("express");
const route = express.Router();
const user = require("../models/User");
const bcrypt = require("bcrypt");
//update the password
route.post("/password_change", async (req,res) => {
  console.log(req.body);
  try {
    const presentUser = await user.findOne({ email: req.body.email });
    if (presentUser) {
      //change the get password from the user
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      presentUser.password=hashedPassword;
      await presentUser.save();
      return res.send({ success: true, messge: "user found" });}
    else {
      return res.send({ success: false, messge: "user not found" });
    }
  } catch (e) {
    console.error(e); 
    return res.send({ success: false, Message: "erroe" });
  }
});
module.exports = route;
