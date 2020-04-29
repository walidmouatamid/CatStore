import React, { Component } from 'react'
import Product from './Product'
import {getProducts} from '../Api/Api'

export class ShopForCats extends Component {
state = {
    products:[]
}

    componentDidMount=()=>{
        window.scrollTo(0, 0);
            getProducts("shop_for_cats").then(result=>this.setState({
                products:result
            }))
        
    }
   
    render() {
        return (
            <div className="container">
                   <h3>SHOP FOR CATS</h3>
                   <hr/>
               <div className="row">
                   {this.state.products.map((product,index)=><Product type="shop_for_cats" index={index} product={product}/>)}
              
               </div>
            </div>
        )
    }
}

export default ShopForCats
