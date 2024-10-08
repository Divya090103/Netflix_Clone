const express = require("express");
const route = express.Router();
const user = require("../models/User");
//bcrypt the entered password
const bcrypt = require("bcrypt");
//json sccrest key for authentication
const jwt = require("jsonwebtoken");
const sendmail = require("./nodemailer");
route.post("/Sign_in", async (req, res) => {
  console.log(req.body);
  console.log("try to send the user to the backend");
  try {
    //first chek if user is already present with that mail id ur not
    const userExist = await user.findOne({ email: req.body.email });
    if (userExist)
      return res.send({
        success: false,
        message: "user is already present with that mail id",
      });
    //send mail to the user for verification

    const accessToken = jwt.sign(req.body.password, process.env.jsonSecretkey);
    const cryptedpassword = await bcrypt.hash(req.body.password, 10);
    const User = req.body;
    const send = await sendmail(User, accessToken);
    console.log("send mail", send);
    if (send) {
      const newuser = await user.create({
        email: req.body.email,
        password: cryptedpassword,
        verified: false,
        JwtToken: accessToken,
      });
    } else {
      return res.send({ success: false, message: "failed to send mail" });
    }

    return res.send({ success: true, message: "user is created successfully" });
  } catch (e) {
    console.log(e);
    return res.send({ success: false, Message: "error" });
  }
});
module.exports = route;
