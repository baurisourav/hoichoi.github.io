const express=require('express')
const router=express.Router()
const userController=require('../Controllers/userControllers')
const movieController=require('../Controllers/movieController')


router.post('/register',userController.createUser)
router.post('/login',userController.loginUser)
router.post('/createMovie',movieController.createMovie)










module.exports=router;