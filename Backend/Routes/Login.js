const express = require("express");
const route = express.Router();
const user = require("../models/User");
const  bcrypt = require("bcrypt");


route.post("/Login", async (req, res) => {
  console.log(req.body)
  console.log("try to find the user in data base");
  try {

    const newUser = await user.findOne({ email: req.body.email});
    const compare = await bcrypt.compare(
      req.body.password,
      newUser.password
    );
    if(compare)
    return res.send({ success: true, message: "user is created successfully",user:newUser });
  else return res.send({success:false,message:"incorrect password"})
  } catch (e) {
    console.log(e)
    return res.send({ success: false, Message: "error" });
  }
});
 module.exports=route