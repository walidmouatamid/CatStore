import React, { Component } from 'react'
import Product from './Product'
import {getProducts} from '../Api/Api'

export class Cats extends Component {
state = {
    cats:[]
}

    componentDidMount=()=>{
        window.scrollTo(0, 0);
            getProducts("cats").then(result=>this.setState({
                cats:result
            }))
        
    }
   
    render() {
        return (
            <div className="container">
                   <h3 >KITTENS & CATS FOR SALE</h3>
                   <hr/>
               <div className="row">
                   {this.state.cats.map((cat,index)=><Product type="cats" index={index} product={cat}/>)}
              
               </div>
            </div>
        )
    }
}

export default Cats
