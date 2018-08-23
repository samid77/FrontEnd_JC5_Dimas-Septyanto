import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footers from './Footers';
import delivery from './pics/delivery.png';
import cash from './pics/cash.png';
import location from './pics/location.png';
import gift from './pics/gift.png';

class Checkout extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="content-wrapper">
            <div className="container">
                <section className="content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box box-widget" style={{padding: '20px'}}>
                                <h3><b>Delivery Address</b> <span><img style={{width: '40px', height:'40px'}} src={location}/></span></h3>
                                <hr />
                                <form role="form">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your full name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="number" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <label>Delivery Address</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                <h3><b>Payment Method</b> <span><img style={{width: '40px', height:'40px'}} src={cash}/></span></h3>
                                    <div className="form-group">
                                        <label>Bank Transfer</label>
                                        <select class="form-control">
                                            <option>BNI</option>
                                            <option>Mandiri</option>
                                            <option>BCA</option>
                                            <option>BTPN</option>
                                        </select>
                                    </div>
                                    
                                <h3><b>Delivery Method</b> <span><img style={{width: '40px', height:'40px'}} src={delivery}/></span></h3>
                                <hr />
                                    <div className="form-group">
                                        <label>Domestic</label>
                                        <select class="form-control">
                                            <option>Go-Send</option>
                                            <option>Pos Indonesia</option>
                                            <option>Ninja Express</option>
                                            <option>JNE</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Abroad Delivery</label>
                                        <select class="form-control">
                                            <option>DHL</option>
                                            <option>FedEx</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <Link to="/invoice">
                                        <button className="btn btn-lg btn-block btn-success"><i className="fa fa-paper-plane"></i> Submit</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box box-widget" style={{padding: '20px'}}>
                                <h3><b>Order Summary</b> <span><img style={{width: '40px', height:'40px'}} src={gift}/></span></h3>
                                <hr />
                                <dl className="dl-horizontal" style={{fontSize: '18px'}}>
                                    <dt style={{textAlign: 'left'}}>Product(s) Total</dt>
                                    <dd>Rp.550.000,00</dd>
                                    <dt style={{textAlign: 'left'}}>Tax (10%)</dt>
                                    <dd>Rp.55.000,00</dd>
                                    <dt style={{textAlign: 'left'}}>Shipping Payment</dt>
                                    <dd>Rp.50.000,00</dd>
                                    <hr />
                                    <dt style={{textAlign: 'left'}}>Total Payment</dt>
                                    <dd>Rp.655.000,00</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
          </div>
          <Footers />
      </div>
    )
  }
}
export default Checkout