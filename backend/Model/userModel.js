const mongoose=require('mongoose')


const userModel=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is mandetory"]
    },
    password:{
        type:String,
        required:[true,"password is mandetory"]
    },
    isAdmin:{default:false,
    type:boolean}
},{timestamps:true})
module.exports= mongoose.model("user",userModel)