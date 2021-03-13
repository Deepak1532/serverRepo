const multer=require('multer')
const path=require('path')
const fs=require('fs')

//diskStorage->where to Store
const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        let fileDestination='public/uploads'
        //cheeck if directiory exists
        if(!fs.existsSync(fileDestination)){
            fs.mkdirSync(fileDestination,{recursive:true})//revursive:true creates parent as well as child folder
            cb(null,fileDestination)
        }
        else
            {cb(null,fileDestination)}
    },
    filename:(req,file,cb)=>{
        const filename=path.basename(file.originalname,path.extname(file.originalname))
        //file.orignalname displays full file with extension
        //path.extname name neglects a file extension

        const ext=path.extname(file.originalname,)
        cb(null,filename+'_'+Date.now()+ext)
    }
})
const imageFilter=(req,file,cb)=>{
    if(!file.originalname.match(/\.(jpg|png|jpeg|jfif|JPG|JPEG|PNG|JFIF)$/))
    {
        cb(new Error('Please choose approprite file',false))
    }
    cb(null,true)
}
const upload=multer({
    storage:storage,
    fileFilter:imageFilter,
    limits:
    {
        fileSize:2000000//2MB
    },

})
module.exports= upload