import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import CartIcon from './components/CartIcon'
import {Provider} from 'react-redux'
import Store from './store/Store'
import NotFound from './pages/NotFound'
import CatsLovers from './components/CatsLovers'
import Cats from './components/Cats'


class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
       
        <Link className="navbar-brand" to="/">
    <img src="./imgs/icon.png" width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
    CatsStore
  </Link>
         
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>


              <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/products"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Products
        </Link>
        <div class="dropdown-menu" to="/products" aria-labelledby="navbarDropdown">
        <Link class="dropdown-item" to="/products" >All products</Link>
          <Link class="dropdown-item" to="/products/cats_lovers" >Shop for cat lovers</Link>
          <Link class="dropdown-item" to="/products/cats" >Shop for cats</Link>
          </div>
      </li>




              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>
<CartIcon/>
  </div>
</nav>
<Switch>
<Route path="/" component={Home} exact/>
<Route path="/products" component={Products} exact/>
<Route path="/products/:type/:id" component={ProductDetail} exact/>
<Route path="/products/cats_lovers" component={CatsLovers} exact/>
<Route path="/products/cats" component={Cats} exact/>
<Route path="/cart" component={Cart} exact />
<Route  component={NotFound}/>
</Switch>


      </Router>
    )
  }
}


function appWithStore(){
  return(
    <Provider store={Store}>
      <App/>
    </Provider>
  )
}
export default appWithStore;