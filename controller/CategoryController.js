const Category=require('../model/Category')

exports.postCategory=(req,res)=>{
    let category=new Category(req.body)
    category.save((error,result)=>{
        if(error){
            return res.status(400).json({error:error})
        }
        res.json({result})
    })
}
exports.isAdmin=(req,res,next)=>{
    if(req.profile.role==0){
        res.status(400).json({error:'access denied'})
    }
    next()
}