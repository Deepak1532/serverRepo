const express=require('express')
const router=express.Router();

const {postCategory, isAdmin, read}=require('../controller/CategoryController');
const { requireSignin, userById, authorizedUser } = require('../controller/UserController');


router.post('/postcategory/:userId',requireSignin, authorizedUser,isAdmin,postCategory)
router.get('/getcategory',read)

router.param('userId',userById)
module.exports=router