import React, { Component } from 'react'
import ProductInCart from './ProductInCart'
import {connect} from 'react-redux'

class Cart extends Component {


    render() {
        return (
            
                 <div className="container">
                   <h1>Cart</h1>
               <div className="row">
                   {this.props.cart.map((cat,index)=><ProductInCart product={cat} index={index}/>)}
              
               </div>
               
            <h3>Total : {this.props.total}$</h3>
               <button  className="btn btn-primary btn-block">Pay</button>
            </div>
           
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        cart : state.cart,
        total:state.cart.reduce((total,item)=>total+item.product.price*item.quantity,0)
    }
}
export default connect(mapStateToProps)(Cart)
