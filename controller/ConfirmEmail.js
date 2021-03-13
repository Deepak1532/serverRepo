const Token = require("../model/Token")
const User = require("../model/User")
const crypto=require('crypto')


exports.confirmEmail=(req,res)=>{
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
            

            if(user.isVerified) return res.status(400).json({error:'email is already verifid,please log in'})

            user.isVerified=true

            user.save((error,result)=>{

                if(error) return res.status(400).json({error:"account is not verified"})
                
                res.json({message:"Email is verifeid,you can log in to continue"})
        })
    })
        
    })
}

exports.passwordReset=(req,res)=>{
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
            

            // if(user.isVerified) return res.status(400).json({error:'email is already verifid,please log in'})

            user.isVerified=true

            user.save((error,result)=>{

                if(error) return res.status(400).json({error:"account is not verified"})
                
                res.json({message:"Password-reset request has been approved, you can set new password"})
        })
    })
        
    })
}