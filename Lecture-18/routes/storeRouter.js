
const express=require('express')
const storeRouter=express.Router()

const storeController=require("../controllers/storeController")//mvc

storeRouter.get("/",storeController.getIndex)
storeRouter.get("/homes",storeController.gethome)
storeRouter.get("/bookings",storeController.getBookings)
storeRouter.get("/favourites",storeController.getFavouriteList)
storeRouter.get("/homes/:homeId",storeController.getHomeDetails)
storeRouter.post("/favourites",storeController.postAddToFavourite)
storeRouter.post("/favourites/delete/:homeId", storeController.postRemoveFromFavourite);

module.exports=storeRouter