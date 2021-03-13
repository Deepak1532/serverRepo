const express=require('express')
const { confirmEmail } = require('../controller/ConfirmEmail')
const { postUser, signIn, signOut, userById, userInfo, requireSignin,resendtoken, sendTokenForPasswordReset, checkTokenForPasswordReset } = require('../controller/UserController')
const router=express.Router()


router.post('/postuser',postUser)
router.post('/signin',signIn)
router.get('/signout',signOut)
router.param('userId',userById)
router.get('/userinfo/:userId',requireSignin, userInfo)
router.post('/confirmation/:userToken',confirmEmail)
router.post('/resendemail',resendtoken)
router.put('/forgotpassword',sendTokenForPasswordReset)
router.post('/passwordreset/:userToken',checkTokenForPasswordReset)

module.exports=router