const mongoose=require('mongoose');
const uuidv1=require('uuidv1')
const crypto=require('crypto')

const userSchema=new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        trim:true,
        
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    hashed_password:{
        type:String,
        
    },
    salt:{
        type:String,
        // select:false
    },
    role:{
        type:Number,
        default:0
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    
},{timestamps:true})
userSchema.virtual('password')
    .set(function(password){
        this._password=password; //temporary variable
        this.salt=uuidv1()//generates long string
        this.hashed_password=this.passwordEncrypt(password)//encrypt the obtained password
    })
    .get(function(){
        return this._password
    })

userSchema.methods={
    authenticate:function(plainText){
        return this.passwordEncrypt(plainText)==this.hashed_password
    },
    passwordEncrypt:function(password){
        if(!password)
            return ''
        try{
            return crypto
           .createHmac('sha1',this.salt)
           .update(password)
           .digest('hex') 
        }
        catch(error){
            return ''
        }

    }
}

module.exports=mongoose.model("User",userSchema)