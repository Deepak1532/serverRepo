const User=require('../model/User')
const Jwt=require('jsonwebtoken')//for login authentication

const expressJWT=require('express-jwt')
const crypto=require('crypto')
const Token=require('../model/Token') 
const sendEmail=require('../utils/VerifyEmail')


exports.postUser=(req,res)=>{
    let user=new User(req.body)
    user.save((error,user)=>{
        if(error||!user){
            return res.status(400).json({error:'something went wrong'})
        }
        const token=new Token({
            userId:user._id,
            token:crypto.randomBytes(16).toString('hex')
            
        })
        token.save((error,token)=>{
            if(error||!token)
            {
               return res.status(400).json({error:'something went wrong'})
            }
        const url=process.env.FRONTEND_URL+'\/email\/confirmation\/'+token.token    
            sendEmail({
                from:'no-reply@webapplication.com',
                to:user.email,
                subject:'Email verification link',
                // text:'Hello ,\n\n Please verify your account by clicking the below link\n\n'+req.headers.host+'\/api/\confirmation\/'+token.token,
                html:`<!DOCTYPE html">
                <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                </head>
                <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #f8fafc; color: #74787e; height: 100%; hyphens: auto; line-height: 1.4; margin: 0; -moz-hyphens: auto; -ms-word-break: break-all; width: 100% !important; -webkit-hyphens: auto; -webkit-text-size-adjust: none; word-break: break-word;">
                    <style>
                        @media  only screen and (max-width: 600px) {
                            .inner-body {
                                width: 100% !important;
                            }
                
                            .footer {
                                width: 100% !important;
                            }
                        }
                
                        @media  only screen and (max-width: 500px) {
                            .button {
                                width: 100% !important;
                            }
                        }
                    </style>
                
                    <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #f8fafc; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                        <tr>
                            <td align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                                <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                                    <tr>
                    <td class="header" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; padding: 25px 0; text-align: center;">
                        <a href="http://localhost" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #bbbfc3; font-size: 19px; font-weight: bold; text-decoration: none; text-shadow: 0 1px 0 white;">
                           My Web Application
                        </a>
                    </td>
                </tr>
                
                                    <!-- Email Body -->
                                    <tr>
                                        <td class="body" width="100%" cellpadding="0" cellspacing="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #ffffff; border-bottom: 1px solid #edeff2; border-top: 1px solid #edeff2; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                                            <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #ffffff; margin: 0 auto; padding: 0; width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px;">
                                                <!-- Body content -->
                                                <tr>
                                                    <td class="content-cell" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; padding: 35px;">
                                                        <h1 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 19px; font-weight: bold; margin-top: 0; text-align: left;">Hello!</h1>
                <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Please click the button below to verify your email address.</p>
                <table class="action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; margin: 30px auto; padding: 0; text-align: center; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                    <tr>
                        <td align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                                <tr>
                                    <td align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                                            <tr>
                                                <td style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                        <a href="${url}" class="button button-primary" target="_blank" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); color: #fff; display: inline-block; text-decoration: none; -webkit-text-size-adjust: none; background-color: #3490dc; border-top: 10px solid #3490dc; border-right: 18px solid #3490dc; border-bottom: 10px solid #3490dc; border-left: 18px solid #3490dc;">Verify Email Address</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">If you did not create an account, no further action is required.</p>
                <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Regards,<br>Dursikshya-Ecommerce</p>
                
                                                        <table class="subcopy" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; border-top: 1px solid #edeff2; margin-top: 25px; padding-top: 25px;">
                    
                        </td>
                    </tr>
                </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                
                                    <tr>
                    <td style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                        <table class="footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; margin: 0 auto; padding: 0; text-align: center; width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px;">
                            <tr>
                                <td class="content-cell" align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; padding: 35px;">
                                    <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; line-height: 1.5em; margin-top: 0; color: #aeaeae; font-size: 12px; text-align: center;">© 2020 Myweb. All rights reserved.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>`
            })
        })
        res.json({user})
    })
}


exports.signIn=(req,res)=>{
    const {email,password}=req.body
    User.findOne({email},(error,user)=>{
        if(error||!user){
            return res.status(400).json({
                error:'user with that email doesnot exist'
            })
        }
        if(!user.authenticate(password)){
          return  res.status(400).json({error:'Email or password doesnot match'})
        }

        if(!user.isVerified){
           return res.status(400).json({error:'Please verify your account'})
        }
        //genetaing token by combing user id and jwt_sectet
    const token=Jwt.sign({_id:user._id},process.env.JWT_SECRET) 

        res.cookie('ab',token,{expire:new Date()+9999})
        
        const {_id,role,email}=user
        res.json({token,user:{_id,role,email},message:'Sign in successful'})
    })
}

exports.signOut=(req,res)=>{
    res.clearCookie('ab')
    res.json({message:'Signout successful'})
}

//requireSignin is a middleware
exports.requireSignin=expressJWT({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth",
})

exports.userById=(req,res,next,id)=>{
    User.findById(id).exec((error,user)=>{
        if(error||!user){
            return res.status(400).json({error:"user not found"})
        }
        req.profile=user
        next()
    })
}

exports.authorizedUser=(req,res,next)=>{
    if((req.profile._id) !=req.auth._id){
        res.status(400).json({error:'Access denied'})
    }
    next();
}

exports.userInfo=(req,res)=>{
    if(req.auth._id==req.profile._id){
        res.json({user:req.profile})
    }
    res.json('access denied')
    
}

exports.isAdmin=(req,res,next)=>{
    if(req.profile.role==0)
    {
        res.status(400).json({error:'Only admin can access'})
    }
    next()
}
//to re-sending the token after expires
exports.resendtoken=(req,res)=>{
    User.findOne({email:req.body.email},(error,user)=>{
        if (!user){
            return res.status(400).json({error:"unable to find user"})
        }
        
        if(user.isVerified)
        return res.status(400).json({
            error:'this account is verified'
        })
        const token=new Token({
            userId:user._id,
            token:crypto.randomBytes(16).toString('hex')
            
        }).save((error,token)=>{
            if(error){
                res.status(400).json({error:error})
            }
            sendEmail({
                from:'no-reply@webapplication.com',
                to:user.email,
                subject:'email verificaion link',
                text:'hello,\n\n Please click the link to verify your account\n\n '
                +req.headers.host+"\/api\/confirmation\/"+token.token
            })
        })
        res.json('Token has been sent')
    })
    .catch((err)=>{
        res.json(err)
    })
    
}

//forget password
exports.sendTokenForPasswordReset =(req,res) =>{
    User.findOne({email:req.body.email},(error,user)=>{
        if(error||!user)
        return res.status(400).json({error:"unable to find user"})
        const token=new Token({
            userId:user._id,
            token:crypto.randomBytes(16).toString('hex')
            
        })
        token.save((error,token)=>{
            if(error||!token){
                res.status(400).json({error:error})
            }

        const url=process.env.FRONTEND_URL+'\/reset\/password\/'+token.token
            sendEmail({
                from:'no-reply@webapplication.com',
                to:user.email,
                subject:'email verificaion link',
                text:'hello,\n\n Please click the link to verify your account\n\n '
                +req.headers.host+"\/api\/passwordreset\/"+token.token,
                html: `<!DOCTYPE html">
                <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                </head>
                <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #f8fafc; color: #74787e; height: 100%; hyphens: auto; line-height: 1.4; margin: 0; -moz-hyphens: auto; -ms-word-break: break-all; width: 100% !important; -webkit-hyphens: auto; -webkit-text-size-adjust: none; word-break: break-word;">
                    <style>
                        @media  only screen and (max-width: 600px) {
                            .inner-body {
                                width: 100% !important;
                            }
                
                            .footer {
                                width: 100% !important;
                            }
                        }
                
                        @media  only screen and (max-width: 500px) {
                            .button {
                                width: 100% !important;
                            }
                        }
                    </style>
                
                    <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #f8fafc; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                        <tr>
                            <td align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                                <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                                    <tr>
                    <td class="header" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; padding: 25px 0; text-align: center;">
                        <a href="http://localhost" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #bbbfc3; font-size: 19px; font-weight: bold; text-decoration: none; text-shadow: 0 1px 0 white;">
                           My Web Application
                        </a>
                    </td>
                </tr>
                
                                    <!-- Email Body -->
                                    <tr>
                                        <td class="body" width="100%" cellpadding="0" cellspacing="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #ffffff; border-bottom: 1px solid #edeff2; border-top: 1px solid #edeff2; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                                            <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #ffffff; margin: 0 auto; padding: 0; width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px;">
                                                <!-- Body content -->
                                                <tr>
                                                    <td class="content-cell" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; padding: 35px;">
                                                        <h1 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 19px; font-weight: bold; margin-top: 0; text-align: left;">Hello!</h1>
                <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Please click the button below to verify your email address.</p>
                <table class="action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; margin: 30px auto; padding: 0; text-align: center; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                    <tr>
                        <td align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                                <tr>
                                    <td align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                                            <tr>
                                                <td style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                        <a href="${url}" class="button button-primary" target="_blank" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); color: #fff; display: inline-block; text-decoration: none; -webkit-text-size-adjust: none; background-color: #3490dc; border-top: 10px solid #3490dc; border-right: 18px solid #3490dc; border-bottom: 10px solid #3490dc; border-left: 18px solid #3490dc;">Click to Reset Password</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">If you did not create an account, no further action is required.</p>
                <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Regards,<br>Ecommerce</p>
                
                                                        <table class="subcopy" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; border-top: 1px solid #edeff2; margin-top: 25px; padding-top: 25px;">
                    
                        </td>
                    </tr>
                </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                
                                    <tr>
                    <td style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                        <table class="footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; margin: 0 auto; padding: 0; text-align: center; width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px;">
                            <tr>
                                <td class="content-cell" align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; padding: 35px;">
                                    <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; line-height: 1.5em; margin-top: 0; color: #aeaeae; font-size: 12px; text-align: center;">© 2020 Myweb. All rights reserved.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>`
            })
        })
        res.json('the new token has been sent')
    })
    }

//Reset password
exports.checkTokenForPasswordReset = (req,res) =>{
        Token.findOne({token:req.params.userToken},(error,token)=>{
            if(!token){
                return res.status(400).json({
                    error:"invalid token or token may have expired"
                })
            }
            User.findOne({
                _id:token.userId,
                email:req.body.email},(error,user)=>{
                    if(!user){
                    return res.status(400).json({
                        error:"the email you provided not associated with this token"
                    })
                }
                user.password=req.body.password
                user.save((error,result) =>{
                    if(error)
                        res.staus(400).json({error:'invalid token'})
                    
                    res.status(400).json({message:"password reset success"})
                })
        })  
    })
}


//Change Password

exports.changePassword = (req,res) =>{
    const user_detail=User.findOne({_id:req.auth._id})
    .then((user)=>{
        if(!user){
            return res.json({err:"You are not signed in"})
        }
        if(user.authenticate(req.body.password)){
            user.password=req.body.newpassword
        user.save()
        .then((data)=>{
            res.json({message:"Password Changed"})
        })

        const url=process.env.FRONTEND_URL+'\/change\/password\/'+token.token
        sendEmail({
            from:'no-reply@webapplication.com',
            to:user.email,
            subject:'email verificaion link',
            text:'hello,\n\n Please click the link to verify your account\n\n '
            +req.headers.host+"\/api\/passwordreset\/"+token.token,
            html: `<!DOCTYPE html">
            <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #f8fafc; color: #74787e; height: 100%; hyphens: auto; line-height: 1.4; margin: 0; -moz-hyphens: auto; -ms-word-break: break-all; width: 100% !important; -webkit-hyphens: auto; -webkit-text-size-adjust: none; word-break: break-word;">
                <style>
                    @media  only screen and (max-width: 600px) {
                        .inner-body {
                            width: 100% !important;
                        }
            
                        .footer {
                            width: 100% !important;
                        }
                    }
            
                    @media  only screen and (max-width: 500px) {
                        .button {
                            width: 100% !important;
                        }
                    }
                </style>
            
                <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #f8fafc; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                    <tr>
                        <td align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                            <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                                <tr>
                <td class="header" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; padding: 25px 0; text-align: center;">
                    <a href="http://localhost" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #bbbfc3; font-size: 19px; font-weight: bold; text-decoration: none; text-shadow: 0 1px 0 white;">
                       My Web Application
                    </a>
                </td>
            </tr>
            
                                <!-- Email Body -->
                                <tr>
                                    <td class="body" width="100%" cellpadding="0" cellspacing="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #ffffff; border-bottom: 1px solid #edeff2; border-top: 1px solid #edeff2; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                                        <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; background-color: #ffffff; margin: 0 auto; padding: 0; width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px;">
                                            <!-- Body content -->
                                            <tr>
                                                <td class="content-cell" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; padding: 35px;">
                                                    <h1 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 19px; font-weight: bold; margin-top: 0; text-align: left;">Hello!</h1>
            <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Please click the button below to verify your email address.</p>
            <table class="action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; margin: 30px auto; padding: 0; text-align: center; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                <tr>
                    <td align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                            <tr>
                                <td align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                                        <tr>
                                            <td style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                    <a href="${url}" class="button button-primary" target="_blank" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); color: #fff; display: inline-block; text-decoration: none; -webkit-text-size-adjust: none; background-color: #3490dc; border-top: 10px solid #3490dc; border-right: 18px solid #3490dc; border-bottom: 10px solid #3490dc; border-left: 18px solid #3490dc;">Click to Reset Password</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">If you did not create an account, no further action is required.</p>
            <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; color: #3d4852; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Regards,<br>Ecommerce</p>
            
                                                    <table class="subcopy" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; border-top: 1px solid #edeff2; margin-top: 25px; padding-top: 25px;">
                
                    </td>
                </tr>
            </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
            
                                <tr>
                <td style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box;">
                    <table class="footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; margin: 0 auto; padding: 0; text-align: center; width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px;">
                        <tr>
                            <td class="content-cell" align="center" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; padding: 35px;">
                                <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; box-sizing: border-box; line-height: 1.5em; margin-top: 0; color: #aeaeae; font-size: 12px; text-align: center;">© 2020 Myweb. All rights reserved.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>`
        })
        }
        else{
            res.json("Old password does not match")
        }
        
    })
    }
