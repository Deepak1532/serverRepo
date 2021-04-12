const express=require('express');
const router=express.Router();
const {postproduct,read, singleProduct, toUpdate, search,listBySearch, list,showProducts}=require('../controller/ProductController');
const {productValidation}=require('../validation/Index')

const user=require('../model/User');
const { userById, requireSignin, authorizedUser } = require('../controller/UserController');
const { isAdmin } = require('../controller/CategoryController');
const upload= require('../middleware/Fileupload');

router.post('/postProduct/:userId',requireSignin,authorizedUser,isAdmin,upload.single('product_image'),productValidation,postproduct);
//router.get('/getproduct',read)
router.patch('/patchproduct/:id',toUpdate)
router.get('/getproduct/:id',singleProduct)
// router.get('/getproduct',search)

router.get('/showProduct',showProducts)

router .get('/products',list)
router.post('/products/by/search',listBySearch)
router.param('userId',userById)

module.exports=router;