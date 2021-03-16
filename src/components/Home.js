import React,{useEffect, useState} from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getProductDetails, getProducts} from '../actions/productAction'
import Cardtest from './Cardtest'
import Loader from './Loader'
function Home() {
    const dispatch =useDispatch()
    const {loading,products,error}=useSelector(state=>state.products)

    useEffect(()=>{
        dispatch(getProducts());
        dispatch(getProductDetails());
    },[dispatch])
    return (
        <div>

            <Navbar/>
            <Carousel/><br/>
            <div className="container c2">
            {loading?<Loader/>:(
                
                products && products.map(item=>(
                    <div className="col-md-4">
                        <a href="#" className="card-link">
                        <div className="container vegcard">
                            <img src={"/public/uploads/"+item.product_image} class="card-img-top" alt="..."/>
                            {/* <h1>{"/public/uploads/"+item.product_image}</h1> */}
                            <div class="card-body">
                               <Link to={`products/${item._id}`}><h5 class="card-title">{item.product_name}</h5></Link> 
                                <p class="card-text">{item.product_description}</p>
                                <a href="#" class="btn btn-primary">See more</a>
                            </div>
                        </div>
                         </a>
                    </div>
                ))
            )}
            </div>
            
            
            <Footer/>
        </div>
    )
}

export default Home
