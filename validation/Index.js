exports.productValidation=(req,res,next)=>
{
    req.check('product_name','product name is required').notEmpty();
    req.check('product_price','price is required').notEmpty()
        .isNumeric()
        .withMessage('price must be a number');
    req.check('product_description','product description must be given').notEmpty();
    req.check('product_quantity','quantity is required').notEmpty()
        .isNumeric()
        .withMessage('product quantity must be a number');

    const errors=req.validationErrors()
    if(errors)
    {
        const Errors=errors.map(error=>error.msg)[0]
        return res.status(400).json({Errors})
    }
    next();
}
