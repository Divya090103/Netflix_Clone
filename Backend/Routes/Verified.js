const express=require('express')
const route=express.Router()
const user=require("../models/User")
route.post("/verify",async(req,res)=>{
  console.log(req.body.token);
  try{
const User=await user.findOne({JwtToken:req.body.token})
if(User){
  User.verified=true;
  await User.save();
  return res.send({success:true,message:"user found and verified successfully"})
}else return res.send({success:false,message:"user is not present"})
  }catch(e){
    return res.send({success:false,mesage:e})

  }



})
module.exports=route;
