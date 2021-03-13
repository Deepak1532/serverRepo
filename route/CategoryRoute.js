const express=require('express')
const router=express.Router();

const {postCategory, isAdmin}=require('../controller/CategoryController');
const { requireSignin, userById } = require('../controller/UserController');


router.post('/postcategory/:userId',isAdmin,requireSignin,postCategory)
router.param('userId',userById)
module.exports=router