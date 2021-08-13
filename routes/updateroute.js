const express=require("express")
const router=express.Router()

const updateData=require('../controllers/updateController')
router.put('/:id',updateData.update_data)
module.exports=router