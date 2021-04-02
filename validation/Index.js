exports.productValidation=(req,res,next)=>
{
    req.check('name','product name is required').notEmpty();
    req.check('price','price is required').notEmpty()
        .isNumeric()
        .withMessage('price must be a number');
    req.check('description','product description must be given').notEmpty();
    req.check('quantity','quantity is required').notEmpty()
        .isNumeric()
        .withMessage('product quantity must be a number');

    const errors=req.validationErrors()
    if(errors)
    {
        const Errors=errors.map(error=>error.msg)[0]
        return res.status(400).json({error:Errors})
    }
    next();
}

exports.postUserValidation=(req,res,next)=>{
	req.check('name','Name is required').notEmpty();
	req.check('email','email is required').notEmpty()
	
	.isEmail()
	.withMessage('Invalid email')
	req.check('password','Password is required').notEmpty()
	.isLength({
		min:8
	})
	.withMessage('password must be more than 8 characters');
     
	const errors=req.validationErrors();
	if(errors){
		const firstError=errors.map(error=>error.msg)[0];
		return res.status(400).json({error:firstError})
	}
	next();

};

//validation for password reset
exports.passwordResetValidation=(req,res,next)=>{
	
	req.check('email','email is required').notEmpty()
	
	.isEmail()
	.withMessage('Invalid email')
	req.check('password','Password is required').notEmpty()
	.isLength({
		min:8
	})
	.withMessage('password must be more than 8 characters');
     
	const errors=req.validationErrors();
	if(errors){
		const firstError=errors.map(error=>error.msg)[0];
		return res.status(400).json({error:firstError})
	}
	next();

};