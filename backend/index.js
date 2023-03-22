const express=require('express')
const app=express()
const parser=require('body-parser')
const mongoose=require('mongoose')
const router=require('./router/route')
const cookieparser=require('cookie-parser')

app.use(parser.json())
app.use(cookieparser())

mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://souravbauri:Alluarya1234@cluster0.ydupgt5.mongodb.net/hoichoi",{useNewUrlParser:true})
.then(()=>{
console.log("mongoDb is connected")
}).catch((err)=>{
console.log(err)
})
app.use("/",router)


app.listen(4000,()=>{
    console.log("server is running")
})