const express = require("express");
const route = express.Router();
const user = require("../models/User");
const bcrypt = require("bcrypt");

route.post("/Login", async (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  console.log("try to find the user in data base");
  try {
    const newUser = await user.findOne({ email: req.body.email });
    console.log("the new user is", newUser);
    if (newUser) {
      const compare = await bcrypt.compare(req.body.password, newUser.password);
      if (compare)
        return res.send({
          success: true,
          message: "user is created successfully",
          user: newUser,
        });
      else
        return res.send({
          success: false,
          message: "incorrect password or user might not present",
        });
    } else return res.send({ success: false, message: "user not found" });
  } catch (e) {
    console.log(e);
    return res.send({ success: false, Message: "error" });
  }
});
module.exports = route;
