import React, { Component } from 'react'
import "./CartIcon.css"
import {connect} from 'react-redux';
import {deleteFromCart} from '../store/actions/Actions'

class ProductInCart extends Component {
    render(props) {
        return (
            <div className="col-md-3" key={this.props.index}>

                <div className="card" >
  <img src={this.props.product.product.image} className="card-img-top" alt="..." style={{maxHeight:"400px"}}/>
  <div className="card-body">
    <h5 className="card-title">{this.props.product.product.name}</h5>
        <p className="card-text">Price {this.props.product.product.price}$</p>
        <p className="card-text">Quantity: {this.props.product.quantity}</p>
        <p className="card-text">Total: {(this.props.product.product.price*this.props.product.quantity).toFixed(2)}$</p>
        <button onClick={()=>this.props.deleteFromCart(this.props.index)} className="btn btn-danger" id="delete"><i className="fa fa-trash"></i> Delete</button>
  </div>
</div>
            </div>
        )
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        deleteFromCart: (index)=>dispatch(deleteFromCart(index)),
    }
}

export default connect(null,mapDispatchToProps)(ProductInCart)
