import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'
import CartIcon from './components/CartIcon'
import {Provider} from 'react-redux'
import Store from './store/Store'
import NotFound from './components/NotFound'


class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">CatsStore</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
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
<Route path="/products/:id" component={ProductDetail} exact/>
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