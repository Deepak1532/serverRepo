const Order=require('../model/Order')
const OrderItem=require('../model/OrderItem')

exports.postOrderItems=(req,res)=>{
    let newOrderItem=new OrderItem({
		quantity:req.body.quantity,

		productId:req.body.productId
	})
	newOrderItem.save((error,orderitem)=>{
		if(error||!orderitem){
			return res.status(400).json({error:error})
		}
		res.json({orderitem})
	})                                                                                            
}

exports.postOrder=async(req,res)=>{
   const orderItems=req.body.orderItems
   const totalPrices=await Promise.all(orderItems.map(async(orderItemId)=>{
      const orderitem=await OrderItem.findById(orderItemId).populate('productId','product_price')
      const totalPrice=orderitem.productId.product_price*orderitem.quantity;
      return(totalPrice)
   }))

   const totalPrice=totalPrices.reduce((a,b)=>a+b,0);
   let order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        shippingFee:req.body.shippingFee,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        user: req.params.userId,
        totalPrice:totalPrice,
    })
     await order.save((error,order)=>{
     	if(!order)
    return res.status(400).json({error:error})

    res.json({order});
     });   
}

//to show all the order list in controller do the following
exports.getOrderList=(req,res)=>{
	Order.find().populate('user','user_name').exec((error,order)=>{
		if(!order || error){
			return res.status(400).json({error:error})

		}
		res.json({order})
	})
}

// to get a single order  in controller do the following

exports.getOrder=(req,res)=>{
	Order.findById(req.params.id)
   .populate('user','user_name')
   // .populate('orderItems')
   // .populate({path:'orderItems',populate:'product'})
   .populate({
   path:'orderItems',populate:({path:'productId',populate:'category'})
})
	.exec((error,order)=>{
if(error || !order){
	return res.status(400).json({error:"order not found"})
}
res.json({order})
	})
	
}
exports.getUserOrder=(req,res)=>{
   
	Order.find({user:req.params.userId})
   //.populate('user','user_name')
   // .populate('orderItems')
   // .populate({path:'orderItems',populate:'product'})
   .populate({
   path:'orderItems',populate:({path:'productId',populate:'category'})
})
	.exec((error,order)=>{
if(error || !order){
	return res.status(400).json({error:"order not found"})
}
res.json({order})
	})
	
}

exports.updateStatus=(req,res)=>{
   Order.findByIdAndUpdate(req.params.id,
      {status:req.body.status},
      {new:true},
      (error,data)=>{
         if(error||!data)
         {
          return res.status(400).json({error:'cannot update status'})
         }   
         res.json({message:'Order status updated!!'})
      })
}

//to delete a order

exports.deleteOrder =(req, res)=>{
   Order.findByIdAndRemove(req.params.id).then(async order =>{
       if(order) {
           await order.orderItems.map(async orderItem => {
               await OrderItem.findByIdAndRemove(orderItem)
           })
           return res.status(200).json({message: 'the order is deleted!'})
       }
        else 
        {
           return res.status(404).json({ message: "order not found!"})
       }
   }).catch(err=>{
      return res.status(400).json({error: err}) 
   })
}
