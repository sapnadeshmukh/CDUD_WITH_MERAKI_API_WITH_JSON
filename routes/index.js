const express=require("express")
const router=express.Router()


router.use('/getalldata',require('./getroute'))
router.use('/createdata',require('./postroute'))
router.use('/updatedata',require('./updateroute'))
router.use('/deletedata',require('./deleteroute'))


module.exports=router