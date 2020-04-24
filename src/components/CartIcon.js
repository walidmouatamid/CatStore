import React from 'react'
import "./CartIcon.css"
import {Link} from 'react-router-dom'
import Store from '../store/Store'
import {connect} from 'react-redux'

 function CartIcon(props) {
    return (
        <div id="CartIcon">
            <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-danger">
            {props.totalQuantity}
            </span>
            </Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
return{
    totalQuantity: state.cart.reduce((total,item)=>total + parseInt(item.quantity),0)
}
}
export default connect(mapStateToProps)(CartIcon)