const express=require("express")
const router=express.Router()

const deleteData=require('../controllers/deleteController')
router.delete('/:id',deleteData.delete_data)
module.exports=router