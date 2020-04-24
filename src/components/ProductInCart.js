import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./CartIcon.css"

export class ProductInCart extends Component {
    render(props) {
        return (
            <div className="col-md-2" key={this.props.product.product.id}>

                <div className="card" >
  <img src={this.props.product.product.image} className="card-img-top" alt="..." style={{maxHeight:"400px"}}/>
  <div className="card-body">
    <h5 className="card-title">{this.props.product.product.name}</h5>
        <p className="card-text">Price {this.props.product.product.price}$</p>
        <p className="card-text">Quantity: {this.props.product.quantity}</p>
        <p className="card-text">Total: {this.props.product.product.price*this.props.product.quantity}$</p>
        <a className="btn btn-danger" id="delete"><i className="fa fa-trash"></i> Delete</a>
  </div>
</div>
            </div>
        )
    }
}

export default ProductInCart
