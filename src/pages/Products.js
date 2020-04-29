import React, { Component } from 'react'
import Cats from '../components/Cats'
import CatsLovers from '../components/CatsLovers'
import ShopForCats from '../components/ShopForCats'
export class Products extends Component {

   
    render() {
        return (
            <div className="container">
               <CatsLovers/><br/>
               <ShopForCats/><br/>
               <Cats/>
          
            </div>
        )
    }
}

export default Products
