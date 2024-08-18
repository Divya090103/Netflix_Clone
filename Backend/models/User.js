const mongoose=require("mongoose");
const {Schema}=mongoose;
const Userschema= new Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  verified:{
    type:Boolean,
    required:true
  },
  JwtToken:{
    type:String,
    required:true,
  }
  
})
module.exports=mongoose.model('user',Userschema);