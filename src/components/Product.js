import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Product extends Component {
    render(props) {
        return (
            <div className="col-md-3" key={this.props.index}>

                <div className="card border-0" >
  <img src={this.props.product.image} className="card-img-top" alt="..." style={{maxHeight:"400px"}}/>
  <div className="card-body">
    <h5 className="card-title">{this.props.product.name}</h5>
        <p className="card-text">Price {this.props.product.price}$</p>
    <Link to={"/products/"+this.props.type+"/"+this.props.product.id} className="btn btn-primary" >Details</Link>
  </div>
</div>
            </div>
        )
    }
}

export default Product
