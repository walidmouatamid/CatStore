import React, { Component } from 'react'
import Product from './Product'
import {getProducts} from '../Api/Api'

export class CatsLovers extends Component {
state = {
    products:[]
}

    componentDidMount=()=>{
        window.scrollTo(0, 0);
            getProducts("cats_lover").then(result=>this.setState({
                products:result
            }))
        
    }
   
    render() {
        return (
            <div className="container">
                   <h3>PRODUCTS FOR CAT LOVERS</h3>
                   <hr/>
               <div className="row">
                   {this.state.products.map((product,index)=><Product type="cats_lovers" index={index} product={product}/>)}
              
               </div>
            </div>
        )
    }
}

export default CatsLovers
