import React,{useState} from 'react'
import {Link} from 'react-router-dom'
function Search({history}) {

    const [keyword,setKeyword]=useState('')
 const searchHandler=(e)=>{
     e.preventDefault()
     if(keyword.trim){
      history.push(`/search/${keyword}`)
     }else{
         history.push('/')
     }
 }
    return (
        <div className="container-fluid search">
            <div className="row">
            <div className="col-md-3">
             <div className="col-md-6">
               <form className="d-flex" onSubmit={searchHandler}>
                  <input className="form-control "   onChange={(e)=>setKeyword(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
                  
                </form> 
                <div className="col-md-3">
               <div className="icon navbaricon">
                  <Link className="nav-link bi"  aria-current="page" to="">Wish List<i class="bi bi-heart-fill mx-2"></i></Link>
                  <Link className="nav-link bi"  aria-current="page" to="">Cart<i class="bi bi-cart-fill mx-2" ></i></Link>
                  <Link className="nav-link bi"  aria-current="page" to=""><i class="bi bi-people-fill mx-2"></i></Link>
               
                </div>
               </div>
               </div>
            </div>
            </div>
        </div>
    )
}

export default Search
