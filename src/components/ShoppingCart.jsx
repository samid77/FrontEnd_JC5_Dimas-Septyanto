import React, { Component } from 'react';
import Navbar from './Navbar';
import Footers from './Footers';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content-wrapper">
          <div className="container">
            <section className="section">
              <div className="jumbotron">
                <center>
                  <h2><b>Shopping Cart</b></h2>
                </center>
              </div>
            </section>
          </div>
        </div>
        <Footers />
      </div>
    )
  }
}
export default ShoppingCart