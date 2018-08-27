import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Footers from './Footers';
import delivery from './pics/delivery.png';
import cash from './pics/cash.png';
import location from './pics/location.png';
import gift from './pics/gift.png';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Checkout extends Component {
   state = {
        fullname: '',
        sendername: '',
        username:'',
        userphoto: '',
        useremail: '',
        userphone: '',
        useraddress: '',
        userID: '',
        isLoggedin: false,
        loginbutton: <li><Link to="/signin"><i className="fa fa-user"></i> Login / Register</Link></li>,
        profileArea: false,
        grandTotal: 0,
        tax: 0,
        deliveryList: [],
        bankList: [],
        deliveryPrice: 15000,
        totalPayment: 0,
        defaultDeliv: '',
        redirectInvoice: false
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
                sendername: response.data[0].full_name,
                userphoto: response.data[0].user_image,
                useremail: response.data[0].email,
                userphone: response.data[0].phone,
                useraddress: response.data[0].address,
                profileArea: true,
            })
        })
        axios.get('http://localhost:8005/getBank').then((bank) => {
            this.setState({
                bankList: bank.data
            });
        })
        axios.get('http://localhost:8005/getDelivery').then((delivery) => {
            this.setState({
                deliveryList: delivery.data
            });
        })
        axios.post('http://localhost:8005/displayCart', {
          userID: cookies.get('userSession'),
        }).then((cartData) => {
          var totalCart = cartData.data[0].length;
          if(totalCart > 0){
            var datacart = cartData.data[0];
            var totalPerItem = cartData.data[1];
            var status = cartData.data[0][0].status;

            if(status === 2){
              this.setState({
                detailCart: datacart,
                totalPerItem: totalPerItem,
              })
              
            } else if(status !== 2){
              this.setState({
                detailCart: [],
              });
            }

            var totalPrice = 0;
            var itemPrice = this.state.totalPerItem;
            for(var i=0; i < itemPrice.length; i++){
              totalPrice = totalPrice + itemPrice[i].total_sub_price;
            }
            var totalPayment = totalPrice + totalPrice * (10/100) + this.state.deliveryPrice;
            this.setState({
              grandTotal: totalPrice,
              tax: totalPrice * (10/100),
              totalPayment: totalPayment,
            });
          } else {
            this.setState({
              detailCart: []
            });
          }
        })
    }
  }
  changeDelivCost = (e) => {
      var delivID = e.target.value;
      delivID = parseInt(delivID, 10);
      var listdelivery = this.state.deliveryList;
      for(var i=0; i < listdelivery.length; i++){
          if(listdelivery[i].id === delivID){
              var delivprice = listdelivery[i].price;
          }
      }
      var totalPayment = this.state.grandTotal + this.state.grandTotal * (10/100) + delivprice;
      this.setState({
        deliveryPrice: delivprice,
        totalPayment: totalPayment,
      });
  }
  changeName = (e) => {
      this.setState({
          sendername: e.target.value,
      });
  }
  sendToInvoice = (e) => {
    var fullname = e.fullname.value;
    var email = e.email.value;
    var address = e.address.value;
    var phone = e.phone.value;
    var bank = e.bank.value;
    var delivery = e.delivery.value;
    var listCart = this.state.detailCart;

    axios.post('http://localhost:8005/insertInvoice', {
        fullname: fullname,
        email: email,
        address: address,
        phone: phone,
        bank: bank,
        delivery: delivery,
        listCart: listCart,
        
    }).then((response) => {
        if(response.data === 1){
            this.setState({
                redirectInvoice: true
            });
        }
    });
    console.log(fullname);
  }
  render() {
    const bankList = this.state.bankList.map((item, index) => {
        var urutan = index + 1;
        var bankID = item.id;
        var bankName = item.bank_name;
        var bankAccount = item.account;
        return <option key={urutan} value={bankName}>{bankName}</option>
    })
    const deliveryList = this.state.deliveryList.map((item, index) => {
        var urutan = index + 1;
        var delivID = item.id;
        var delivMethod = item.method;
        var delivPrice = item.price;
        return <option key={urutan} value={delivID}>{delivMethod}</option>
    })
    if(this.state.redirectInvoice){
        return <Redirect to="/invoice"/>
    }
    return (
      <div>
          <Navbar loginbutton={this.state.loginbutton} fullname={this.state.fullname} userphoto={this.state.userphoto} profile={this.props.profileArea} />
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
                                        <input type="text" ref="fullname" className="form-control" placeholder="Enter your full name" onChange={this.changeName} value={this.state.sendername}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" ref="email" onChange={this.changeEmail} value={this.state.useremail} className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="text" ref="phone" onChange={this.changePhone}  value={this.state.userphone} className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <label>Delivery Address</label>
                                        <input type="text" ref="address" onChange={this.changeAddress}  value={this.state.useraddress} className="form-control" placeholder="Address" />
                                    </div>
                                <h3><b>Payment Method</b> <span><img style={{width: '40px', height:'40px'}} src={cash}/></span></h3>
                                    <div className="form-group">
                                        <label>Bank Transfer</label>
                                        <select ref="bank" class="form-control">
                                            {bankList}
                                        </select>
                                    </div>
                                    
                                <h3><b>Delivery Method</b> <span><img style={{width: '40px', height:'40px'}} src={delivery}/></span></h3>
                                <hr />
                                    <div className="form-group">
                                        <label>Domestic</label>
                                        <select onChange={this.changeDelivCost} ref="delivery" class="form-control">
                                            {deliveryList}
                                        </select>
                                    </div>
                                    <button type="button" onClick={() => this.sendToInvoice(this.refs)} className="btn btn-lg btn-block btn-success"><i className="fa fa-paper-plane"></i> Submit</button>
                                    <Link to="/cart" className="btn btn-warning btn-lg btn-flat btn-block"><i className="fa fa-shopping-cart"></i> Back to cart</Link>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box box-widget" style={{padding: '20px'}}>
                                <h3><b>Order Summary</b> <span><img style={{width: '40px', height:'40px'}} src={gift}/></span></h3>
                                <hr />
                                <dl className="dl-horizontal" style={{fontSize: '18px'}}>
                                    <dt style={{textAlign: 'left'}}>Product(s) Total</dt>
                                    <dd>Rp.{this.state.grandTotal}</dd>
                                    <dt style={{textAlign: 'left'}}>Tax (10%)</dt>
                                    <dd>Rp.{this.state.tax}</dd>
                                    <dt style={{textAlign: 'left'}}>Delivery Cost</dt>
                                    <dd>Rp.{this.state.deliveryPrice}</dd>
                                    <hr />
                                    <dt style={{textAlign: 'left'}}>Total Payment</dt>
                                    <dd>Rp.{this.state.totalPayment}</dd>
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