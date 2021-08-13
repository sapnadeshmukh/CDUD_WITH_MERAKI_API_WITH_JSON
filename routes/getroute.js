const express=require("express")
const router=express.Router()

const GetAllData=require('../controllers/getController')
router.get('/',GetAllData.All_data)
module.exports=router