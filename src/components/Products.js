import React, { Component } from 'react'
import Product from './Product'
import {getProducts} from '../Api/Api'

export class Products extends Component {
state = {
    cats:[]
}

    componentDidMount=()=>{
            getProducts().then(result=>this.setState({
                cats:result
            }))
        
    }
   
    render() {
        return (
            <div className="container">
                   <h1>Products</h1>
               <div className="row">
                   {this.state.cats.map((cat,index)=><Product index={index} product={cat}/>)}
              
               </div>
            </div>
        )
    }
}

export default Products
