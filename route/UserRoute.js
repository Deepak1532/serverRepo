const express=require('express')
const { confirmEmail } = require('../controller/ConfirmEmail')
const { postUser, signIn, signOut, userById, userInfo, requireSignin,resendtoken, sendTokenForPasswordReset, checkTokenForPasswordReset, changePassword } = require('../controller/UserController')
const { postUserValidation, passwordResetValidation } = require('../validation/Index')
const router=express.Router()


router.post('/postuser',postUserValidation, postUser)
router.post('/signin',signIn)
router.get('/signout',signOut)
router.param('userId',userById)
router.get('/userinfo/:userId',requireSignin, userInfo)
router.post('/confirmation/:userToken',confirmEmail)
router.post('/resendemail',resendtoken)
router.post('/forgotpassword',sendTokenForPasswordReset)
router.put('/passwordreset/:userToken',passwordResetValidation ,checkTokenForPasswordReset)

router.put('/changepassword',changePassword)

module.exports=router