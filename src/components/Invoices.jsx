import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Navbar from './Navbar';
import Footers from './Footers';
import Ok from './pics/ok.png';
import monkey from './pics/monkey.png';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Invoices extends Component {
 state = {
    fullname: '',
    username:'',
    userphoto: '',
    userID: '',
    userphone: '',
    useremail: '',
    useraddress: '',
    isLoggedin: false,
    loginbutton: <li><Link to="/signin"><i className="fa fa-user"></i> Login / Register</Link></li>,
    profileArea: false,
    item: [],
    invoicenumber: '',
    isRedirect: false,
    paymentMethod: '',
    createdTime: '',
    totalPayment: 0,
    deliveryList: [],
    grandTotal: 0,
  }
  componentWillMount = () => {
    if(cookies.get('userSession') !== undefined) {
        axios.post('http://localhost:8005/getUserData', {
            userID: cookies.get('userSession')
        }).then((response) => {
            this.setState({
                isLoggedin: true,
                loginbutton: <li></li>,
                userID: response.data[0].id,
                fullname: response.data[0].full_name,
                useraddress: response.data[0].address,
                userphoto: response.data[0].user_image,
                userphone: response.data[0].phone,
                useremail: response.data[0].email,
                profileArea: true,
            })
        })
        
        axios.post('http://localhost:8005/getInvoiceData', {
            userID: cookies.get('userSession')
        }).then((response) => {
            console.log(response.data);
            var totalCost = response.data;
            axios.get('http://localhost:8005/getDelivery').then((delivery) => {
                this.setState({
                    deliveryList: delivery.data
                });
                var deliverylist = delivery.data;
                for(var i=0; i < deliverylist.length; i++){
                    if(deliverylist[i].id === response.data[0].delivery){
                        var delivCost = deliverylist[i].price;
                    }
                }
                this.setState({
                    item: response.data,
                    itemID: response.data[0].id,
                    invoicenumber: response.data[0].invoice_number,
                    paymentMethod: response.data[0].payment_method,
                    createdTime: response.data[0].created,
                });
                var totalPayment = 0
                for(var i=0; i < totalCost.length; i++){
                    totalPayment += totalCost[i].total;
                }
                var tax = totalPayment * (10/100)
                this.setState({
                    totalPayment: totalPayment + tax + delivCost
                });
            })
            
        })
    }
  }
  confirmPayment = () => {
      axios.post('http://localhost:8005/confirmPayment', {
        userID: cookies.get('userSession')
      }).then((response) => {
          if(response.data === 1){
              this.setState({
                  isRedirect: true,
              });
          }
      })
  }

  render() {
    const itemList = this.state.item.map((isi, index) => {
        var urutan = index + 1;
        var invoice_number = isi.invoice_number;
        var productName = isi.product_name;
        var quantity = isi.quantity;
        var address = isi.shipping_address
        var price = isi.total;

        return <tr key={urutan}>
        <td>{quantity}</td>
        <td>{productName}</td>
        <td>{price}</td>
        </tr>
    })
    if(this.state.isRedirect){
        return <Redirect to="/"/>
    }
    return (
      <div>
          <Navbar loginbutton={this.state.loginbutton} fullname={this.state.fullname} userphoto={this.state.userphoto} profile={this.props.profileArea}/>
          <div className="content-wrapper">
            <div className="container">
                <section className="content" style={{minHeight: '500px'}}>
                    <div className="col-md-10 col-md-offset-1">
                        <div className="box box-widget">
                            <center>
                                <img src={Ok}/>
                                <h3>Thank you for your order</h3>
                            </center>
                            <hr style={{border: '1px solid grey'}}/>
                                <section className="invoice">
                                    {/* title row */}
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <h2 className="page-header">
                                                <img src={monkey} style={{width:'30px'}}/> WiseMonkey, Inc.
                                                <small className="pull-right">Date: {this.state.createdTime}</small>
                                            </h2>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* info row */}
                                    <div className="row invoice-info">
                                        <div className="col-sm-4 invoice-col">
                                            From
                                            <address>
                                                <strong>WiseMonkey, Inc.</strong><br />
                                                Wisma Bakrie, Floor 24<br />
                                                Phone: (804) 123-5432<br />
                                                Email: info@wisemonkey.com
                                            </address>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-sm-4 invoice-col">
                                            To
                                            <address>
                                                <strong>{this.state.fullname}</strong><br />
                                                {this.state.useraddress}<br />
                                                Phone: {this.state.userphone}<br />
                                                Email: {this.state.useremail}
                                            </address>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-sm-4 invoice-col">
                                            <b>Invoice #INV{this.state.invoicenumber}</b><br />
                                            <br />
                                            <b>Payment Due:</b> 10/09/2018<br />
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                    {/* Table row */}
                                    <div className="row">
                                        <div className="col-xs-12 table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Qty</th>
                                                    <th>Product</th>
                                                    <th>Subtotal</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    {itemList}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                    <div className="row">
                                        {/* accepted payments column */}
                                        <div className="col-xs-6">
                                        <p className="lead">Payment Methods: {this.state.paymentMethod}</p>
                                        {/* <img src="../../dist/img/credit/visa.png" alt="Visa" />
                                        <img src="../../dist/img/credit/mastercard.png" alt="Mastercard" />
                                        <img src="../../dist/img/credit/american-express.png" alt="American Express" />
                                        <img src="../../dist/img/credit/paypal2.png" alt="Paypal" /> */}
                                        
                                        <p className="text-muted well well-sm no-shadow" style={{marginTop: 10}}>
                                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg
                                            dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                                        </p>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-xs-6">
                                            <p className="lead">Amount Due 10/09/2018</p>
                                            <div className="table-responsive">
                                                <table className="table">
                                                <tbody><tr>
                                                    {/* <th style={{width: '50%'}}>Subtotal:</th>
                                                    <td>{this.state.grandTotal}</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Tax (10%)</th>
                                                    <td>{this.state.tax}</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Delivery:</th>
                                                    <td>{this.state.deliveryPrice}</td>
                                                    </tr>
                                                    <tr> */}
                                                    <th>Total:</th>
                                                    <td>{this.state.totalPayment}</td>
                                                    </tr>
                                                </tbody></table>
                                            </div>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                    {/* this row will not appear when printing */}
                                    <div className="row no-print">
                                        <div className="col-xs-12">
                                            <button type="button" onClick={() => this.confirmPayment()} className="btn btn-success pull-right"><i className="fa fa-credit-card" /> Confirm Payment
                                            </button>
                                            <button type="button" className="btn btn-primary btn-flat pull-right" style={{marginRight: 5}}>
                                                <i className="fa fa-print" /> Print Invoice
                                            </button>
                                        </div>
                                    </div>
                            </section>
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
export default Invoices;