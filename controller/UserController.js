const User=require('../model/User')
const Jwt=require('jsonwebtoken')//for login authentication

const expressJWT=require('express-jwt')
const crypto=require('crypto')
const Token=require('../model/Token') 
const sendEmail=require('../utils/VerifyEmail')


exports.postUser=(req,res)=>{
    let user=new User(req.body)
    user.save((error,user)=>{
        if(error){
            return res.status(400).json({error:'something went wrong'})
        }
        const token=new Token({
            userId:user._id,
            token:crypto.randomBytes(16).toString('hex')
            
        })
        token.save((error,token)=>{
            if(error)
            {
               return res.status(400).json({error:error})
            }
            sendEmail({
                from:'no-reply@webapplication.com',
                to:user.email,
                subject:'Email verification link',
                text:'Hello ,\n\n Please verify your account by clicking the below link\n\n'+req.headers.host+'\/api/\confirmation\/'+token.token
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
        if(!User)
        return res.status(400).json({error:"unable to find user"})
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
                +req.headers.host+"\/api\/passwordreset\/"+token.token
            })
        })
        res.json('the new token has been sent')
    })
    }

//change password
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
