import React, { Component } from 'react'
import Navbar from './Navbar'
import Footers from './Footers'

class DetailProduct extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content-wrapper">
            <div className="container">
                <section className="content" style={{minHeight: '850px'}}>

                </section>
            </div>
        </div>
        <Footers />
      </div>
    )
  }
}
export default DetailProduct;