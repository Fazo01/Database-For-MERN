
const express=require('express')
const authRouter=express.Router()

const authController=require("../controllers/authController")//mvc

authRouter.get("/login",authController.getLogin);
authRouter.post("/login",authController.postLogin)
authRouter.post("/logout",authController.postLogout)
module.exports=authRouter