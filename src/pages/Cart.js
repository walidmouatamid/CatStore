import React, { Component } from 'react'
import ProductInCart from '../components/ProductInCart'
import {connect} from 'react-redux'
import {clearCart} from '../store/actions/Actions'

class Cart extends Component {

placeorder=()=>{
    //after send order
    window.alert("we received your order, and we are working on it.")
    this.props.clearCart();
}
    render() {
        return (
            
                 <div className="container">
                   <h1>Cart</h1>
               <div className="row">
                   {this.props.cart.map((cat,index)=><ProductInCart product={cat} index={index}/>)}
              
               </div>
               
            <h3>Total : {this.props.total}$</h3>
               <button  onClick={this.placeorder} className="btn btn-primary btn-block">Pay</button>
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

const mapDispatchToProps=(dispatch)=>{
    return {
        clearCart:()=> dispatch(clearCart())

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
