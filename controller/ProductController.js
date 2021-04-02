const Product=require('../model/product');
const User = require('../model/User');

const APIFeatures =require('../utils/apiFeature')
// to read the data from database
exports.read=(req,res)=>{
        Product.find().sort({createdAt:-1})
    .then(products=>{
        setTimeout(()=>{
            res.json({products})
        },2000)
        
})
    .catch(error=>{
        console.log(error)
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
        product_name:req.body.name,
        product_price:req.body.price,
        product_description:req.body.description,
        product_quantity:req.body.quantity,
        product_rating:req.body.rating,
        product_image:req.file.filename,
        category:req.body.category
    });
    Product.findOne({product_name:product.product_name},(error,data)=>{
        if(data==null)
        {
            product.save()
            .then(item=>{
                res.json({item});
            })
            .catch(error=>{
                res.status(400).json({error:"unable to save to database"});
            });
        }
        else{
            res.status(400).json({error:'Product must be unique'})
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
     .filter()
     const products=await apiFeature.query;
     res.json({
         products
    })
 }

 //to show all the data in descending order with limited data
 exports.list=(req,res)=>{

    let order=req.query.order ?req.query.order :'asc'
   let sortBy=req.query.order ?req.query.sortBy :'_id'
   let limit=req.query.order ? parseInt(req.query.limit) :6
    
    Product.find()
    .populate('category')
   .sort([[sortBy,order]])
   .limit(limit)

    .exec((error,products)=>{
        if(error || !products){
        return res.status(400).json({
            error:'product not found'
        });
        }
        
         res.json(products)
        
        
    });
};


//filter by category and price range
exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "product_price") {
                // gte -  greater than price [0-1000]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    Product.find(findArgs)
        .populate("category")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Products not found"
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};