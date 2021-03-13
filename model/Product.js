const mongoose=require('mongoose');
const productSchema=new mongoose.Schema(
    {
        product_name:{
            type:String,
            trim:true,
            required:true,
            maxLength:50
        },
        product_price:{
            type:Number,
            trim:true,
            required:true,
            maxLength:10
        },
        product_description:{
            type:String,
            trim:true,
            required:true,
            minLength:10
        },
        product_quantity:{
            type:Number
        },
        product_rating:{
            type:Number,
            min:1,
            max:5
        },
        product_image:{
            type:String,
            required:true
        },
        
    },{timestamps:true}
)
module.exports=mongoose.model('Product',productSchema);