import React, { Component } from 'react'
import { getProductDetails } from '../Api/Api'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/Actions'

class ProductDetail extends Component {

    state = {
        cat: {},
        quantity: '0',
    }

    componentDidMount = () => {

        const id = this.props.match.params.id
        getProductDetails(parseInt(id)).then(result => this.setState({
            cat: result
        }))

    }
    back = () => {
        this.props.history.push('/products');
    }
    quantityChange = (event) => {
        this.setState({ quantity: event.target.value })
    }

    render() {
        return (
            <div>

                <div className="card mb-3 mx-auto" style={{ "maxWidth": "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.state.cat.image} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.state.cat.name}</h5>
                                <p className="card-text">{this.state.cat.description}</p>
                                <p className="card-text"><small className="text-muted">Price {this.state.cat.price}$</small></p>
                                <input type="number" min="0" value={this.state.quantity} onChange={this.quantityChange} />
                                <button onClick={() => this.props.addToCart(this.state.cat, this.state.quantity)} className="btn btn-info">Add to cart</button><br />
                                <p className="card-text">Total :{this.state.cat.price * this.state.quantity}$</p>
                                <button onClick={this.back} className="btn btn-danger">back</button>
                            </div>
                        </div>
                    </div>
                </div> 




            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, quantity) => dispatch(addToCart(product, quantity))
    };
}
export default connect(null, mapDispatchToProps)(ProductDetail)
