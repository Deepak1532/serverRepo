import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import Home from './Home'

function Routes() {
    return (
        <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/products/:id" exact component={ProductDetails}/> 
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default Routes

