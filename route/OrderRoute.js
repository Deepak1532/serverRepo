const express=require('express')
const { postOrderItems, postOrder, getOrderList, getOrder,getUserOrder, updateStatus, deleteOrder } = require('../controller/OrderController')
const { requireSignin, userById, isAdmin } = require('../controller/UserController')
const router=express.Router()

router.post('/orderitem/:userId',requireSignin,postOrderItems)
router.post('/order/:userId',postOrder)
router.get('/orderlist',getOrderList)
router.get('/getorder/:id',getOrder)
router.get('/getUserOrder/:userId',requireSignin,getUserOrder)

router.param('userId',userById)
router.put('/updatestatus/:id/:userId',requireSignin,isAdmin,updateStatus)
router.delete('/deleteorder/:id',deleteOrder)
module.exports=router         