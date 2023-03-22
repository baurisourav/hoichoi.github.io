const userModel=require('../Model/userModel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const createUser=async function createUser(req,res){
    var {password,name}=req.body
    const hashpass=await bcrypt.hash(password,10)
    req.body.password=hashpass
    const data= await userModel.create(req.body)
    res.status(201).send({msg:"Regitered Successfully",data:data})
} 
const loginUser=async function loginUser(req,res){
    
   const data=await userModel.findOne({name:req.body.name})
   
   const haspass=await bcrypt.compare(req.body.password,data.password)
   console.log(haspass)
   if(!data){
    res.status(400).send({msg:"user should have to register first"})
   }
   if(haspass)
  { const token=jwt.sign({userId:data._id,name:data.name},"secretKey",{expiresIn:"24h"})
  return res.cookie("access_token",token,{
    httpOnly:true
  }).status(200).json({msg:"login successfully"})
   }
}




module.exports.createUser=createUser
module.exports.loginUser=loginUser