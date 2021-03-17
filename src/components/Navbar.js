import React from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'



import Search from './Search'

function Navbar({history}) {
    return (
        <div>
          <Route render={({history})=> <Search history={history}/> }/>
            <nav className="navbar navbar-expand-lg  navbar-light">
          <div className="container-fluid">
          <a className="navbar-brand" href="#">
          {/* <img src="http://placehold.it/3*3?text=Logo" id="brandlogo" alt=""/> */}
          </a>
          {/* <img src="images/logo/logo2.jpg" id="logoid"></img> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav  mx-auto" >
                <li className="nav-item">
                  <Link className="nav-link" activeClassName="nav-active" aria-current="page" to="/Home">Home<i class="fas fa-home"></i></Link>
                </li>
                <li className="nav-item" id="productid">
                  <Link className="nav-link" activeClassName="nav-active" to="/Products">Products<i class="fas fa-seedling"></i></Link>
                  <ul className="products">
                    <li><a href="/fruit">Fruits</a></li>
                    <li><a href="/veg">Vegetables</a></li>
                    </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" activeClassName="nav-active" to="/contact">Contact us <i class="fas fa-phone"></i></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" activeClassName="nav-active" to="/about">About Us <i class="fas fa-address-book"></i></Link>
                </li>

                <form id="login" className="d-flex ml-4" style={{position:'absolute',right:'100px'}}>
                    
                    <Link className="btn" activeClassName="nav-active" to="/form" type="submit">login<i class="fas fa-sign-in-alt"></i></Link>
                    {/* <Link className="btn" activeClassName="nav-active" to="/signup" type="submit">Register</Link> */}
                </form>
                
              <div>
               
              </div>
              </ul>
              
            </div>
          </div>
        </nav>
        </div>
    )
}

export default Navbar
