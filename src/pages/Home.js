import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Home extends Component {
  render() {
    return (
      <div>

        <header className=" py-5 mb-5 bg-cat">
          <div className="container h-100">
            <div className="row h-100 align-items-center ">
              <div className="col-lg-12" style={{ "color": "black" }}>
                <h1 className="display-4 text-dark mt-4 mb-5 ">CatStore</h1>
                <p className="lead mb-5 text-dark-50 txt">At CatsStore, we are all about providing cats and their people with high quality products.<br />
          We have selectively choosen the best, high quality products for you and your felines. </p>
              </div>
            </div>
          </div>
        </header>


        <div className="container">

          <div className="row">
            <div className="col-md-8 mb-5">
              <h2>What We Do</h2>
              <hr />
              <p>Presents for cat lovers and their cats! At CatStore the Cat Shop you can find adorable cat-themed items and apparel, accessories and gifts for cat lovers, cat toys and much more!</p>
            </div>

          </div>

          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="/imgs/ForCatLovers_02.jpg" alt="" />
                <div className="card-body">
                  <h4 className="card-title">SHOP FOR CAT LOVERS</h4>
                  <p className="card-text">Presents for cat lovers!<br /> Find the most adorable cat-themed items.<br />Ev’rybody wants to be a cat! 😼</p>
                </div>
                <div className="card-footer">
                  <Link className=" btn btn-primary" to="/products/cats_lovers">Find Out More!</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="imgs/ForCats_02.jpg" alt="" />
                <div className="card-body">
                  <h4 className="card-title">SHOP FOR CATS</h4>
                  <p className="card-text">Cutest products for the cutest cat, only the best for your kitten.<br />Just so you know, we appreciate the cardboard box. 😸</p>
                </div>
                <div className="card-footer">
                  <Link className=" btn btn-primary" to="/products/shop_for_cats">Find Out More!</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="/imgs/1.jpg" height="347.99px" alt="" />
                <div className="card-body">
                  <h4 className="card-title">KITTENS & CATS FOR SALE</h4>
                  <p className="card-text">We provide cats for sale and adoption.<br />So hurry up to get your new family member</p>
                </div>
                <div className="card-footer">
                  <Link className=" btn btn-primary" to="/products/cats">Find Out More!</Link>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="container-fluid bg-dark text-white pt-3">
          <div className="row">
            <div className="col-md-6">
              <div id="map-container-google-11" className="z-depth-1-half map-container-6"  >
                <iframe
                  title="a" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.7502605475215!2d-6.576695685610426!3d32.851863487474105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUxJzA2LjciTiA2wrAzNCcyOC4yIlc!5e0!3m2!1sen!2sma!4v1588129916739!5m2!1sen!2sma"
                  width="100%" height="280px" frameBorder="0" style={{ "border": "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              </div>
            </div>
            <div className="col-md-6 text-center align-self-center">
              <h5 id="contact">Contact us</h5>
              <ul className="list-unstyled mb-0">
                <li><i className="fas fa-envelope mt-1 fa-2x"></i>
                  <p> walidmouatamid@gmail.com</p>
                </li>
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Oued-zem, CA 94126, MA</p>
                </li>
                <li><i className="fas fa-phone mt-1 fa-2x"></i>
                  <p>+212 766 677 091</p>
                </li>
              </ul>
              <p>Delivery to all Moroccan cities via CTM Messagerie</p>

            </div>
          </div>
          <div className="row align-items-center">
            <div className="col ">
              <div className="copyright text-center">
                Copyright &copy; 2020 <span>Walid MOUATAMID</span>
              </div>
            </div>
          </div>
        </div>



      </div>



    )
  }
}

export default Home
