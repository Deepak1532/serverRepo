import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getProductDetails,clearErrors} from '../actions/productAction'
import Loader from './Loader'

const ProductDetails=({match})=>{
    const dispatch=useDispatch();
    const {loading,product,error}=useSelector(state =>state.productDetails)

    useEffect(()=>{
        dispatch(getProductDetails(match.params.id))
    },[dispatch,match.params.id])

    return (
        <div>
            {loading?<Loader/>:(
                product &&
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                    <div className="col">
                        <div className="card" style={{border:'none'}}>
                            <div className="card-body" data-aos="fade-up" data-aos-delay="100">
                                <h5 className="text-primary">{product.product_name}</h5>
                                <p className="card-text">{product.product_description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProductDetails