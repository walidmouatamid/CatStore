import React, { Component } from 'react'
import Cats from '../components/Cats'
import CatsLovers from '../components/CatsLovers'

export class Products extends Component {

   
    render() {
        return (
            <div className="container">
                <CatsLovers/>
                <br/>
                <Cats/>
            </div>
        )
    }
}

export default Products
