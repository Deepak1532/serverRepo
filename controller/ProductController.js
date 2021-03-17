const Product=require('../model/product');
const User = require('../model/User');

const APIFeatures =require('../utils/apiFeature')
// to read the data from database
exports.read=(req,res)=>{
        Product.find().sort({createdAt:-1})
    .then(products=>{
        setTimeout(()=>{
            res.json({products})
        },500)
        
})
    .catch(err=>{
        console.log(err)
    })
}

//to read the single data
exports.singleProduct=(req,res)=>{
    const id=req.params.id
    Product.findById(id)
    .then(product=>{
        res.json({product})

    })
    .catch(err=>{
        console.log(err)
    })
}

//to update the data
exports.toUpdate=(req,res)=>{
    const id=req.params.id
    Product.findByIdAndUpdate(id,req.body)
    .then(products=>{
        res.json({products})

    })
    .catch(err=>{
        console.log(err)
    })
}
//to create data 
exports.postproduct=(req,res)=>{
    const product=new Product({
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        product_quantity:req.body.product_quantity,
        product_rating:req.body.product_rating,
        product_image:req.file.filename
    });
    Product.findOne({product_name:product.product_name},(err,data)=>{
        if(data==null)
        {
            product.save()
            .then(item=>{
                res.send("item saved to database");
            })
            .catch(err=>{
                res.status(400).send("unable to save to database");
            });
        }
        else{
            res.status(400).json({msg:'Product must be unique'})
        }
       
    })
    
}
exports.isAdmin=(req,res,next)=>{
    if(req.profile.role==0)
    {
        res.status(400).json({error:'You cannot post the product'})
    }
    next()
}

//to search products
 exports.search=async(req,res)=>{
     const apiFeature=new APIFeatures(Product.find(),req.query)
     .search()
     const products=await apiFeature.query;
     res.json({
         products
    })
 }
