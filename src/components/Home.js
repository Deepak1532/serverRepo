import React,{useEffect, useState} from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Navbar from './Navbar'

import {useSelector,useDispatch} from 'react-redux'
import {getProducts} from '../actions/productAction'
import Cardtest from './Cardtest'
import Loader from './Loader'
function Home() {
    const dispatch =useDispatch()
    const {loading,error,products}=useSelector(state=>state.products)

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])
    return (
        <div>

            <Navbar/>
            <Carousel/>
            {loading?<Loader/>:(
                products && products.map(item=>(
                    <div class="card">
                    <img src={"/public/uploads/"+item.product_image} class="card-img-top" alt="..."/>
                    {/* <h1>{"/public/uploads/"+item.product_image}</h1> */}
                    <div class="card-body">
                        <h5 class="card-title">{item.product_name}</h5>
                        <p class="card-text">{item.product_description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div> 
                ))
            )}

            
            
            <Footer/>
        </div>
    )
}

export default Home
