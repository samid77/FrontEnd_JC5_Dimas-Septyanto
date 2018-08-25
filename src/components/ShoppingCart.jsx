import React, { Component } from 'react';
import Navbar from './Navbar';
import Footers from './Footers';
import {Link, Redirect} from 'react-router-dom';
import photo from './pics/DEWALT_001.jpg'
import Cookies from 'universal-cookie';
import axios from 'axios';
import $ from 'jquery';

const cookies = new Cookies();

class ShoppingCart extends Component {
  state = {
      fullname: '',
      username:'',
      userphoto: '',
      userID: '',
      isLoggedin: false,
      loginbutton: <li><Link to="/signin"><i className="fa fa-user"></i> Login / Register</Link></li>,
      profileArea: false,
      detailCart: [],
      totalPerItem: [],
      grandTotal: 0,
      deliveryMethod: [],
      subPrice: [],
      deliveryCost: 0,
      emptycart: ['Cart is empty'],
  }
  componentWillMount = () => {
    var self = this;
    if(cookies.get('userSession') !== undefined) {
        axios.post('http://localhost:8005/getUserData', {
            userID: cookies.get('userSession')
        }).then((response) => {
            this.setState({
                isLoggedin: true,
                loginbutton: <li></li>,
                userID: response.data[0].id,
                fullname: response.data[0].full_name,
                userphoto: response.data[0].user_image,
                profileArea: true,
            })
        })
        axios.post('http://localhost:8005/displayCart', {
          userID: cookies.get('userSession'),
        }).then((cartData) => {
          var totalCart = cartData.data[0].length;
          if(totalCart > 0){
            var datacart = cartData.data[0];
            var totalPerItem = cartData.data[1];
            var status = cartData.data[0][0].status;
            console.log(status);

            if(status === 2){
              this.setState({
                detailCart: datacart,
                totalPerItem: totalPerItem,
              })
              console.log(this.state.detailCart);
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
            this.setState({
              grandTotal: totalPrice
            });
          } else {
            this.setState({
              detailCart: []
            });
          }
        })
        axios.get('http://localhost:8005/displayCart').then((response) => {
          var delivery = response.data;
          this.setState({
            deliveryMethod: delivery
          });
        })
    }
  }
  deleteCart = (value) => {
    axios.post('http://localhost:8005/deleteCart', {
      cartID: value
    }).then((response) => {
      if(response){
        var userID = cookies.get('userSession');
        axios.post('http://localhost:8005/displayCart', {
          userID: userID
        }).then((res) => {
          var cartData = res.data[0];
          var subPrice = res.data[1];

          this.setState({
            detailCart: cartData,
            subPrice: subPrice,
          });

          var totalPrice = 0;
          var listPrice = this.state.subPrice;
          for(var i=0; i < listPrice.length; i++){
            var totalPrice = totalPrice + listPrice[i].total_sub_price;
          }
          this.setState({
            grandTotal: totalPrice
          });
        })
      }
    })
  }
  changeQuantity = (e, id) => {
    var userID = cookies.get('userSession');
    axios.post('http://localhost:8005/updateCart', {
      newQuantity: e,
      cartID: id,
      userID: userID
    }).then((response) => {
      var cartData = response.data[0];
      var totalPerItem = response.data[1];

      this.setState({
        detailCart: cartData,
        subPrice: totalPerItem,
      });

      var totalPrice = 0;
      var listPrice = this.state.subPrice;
      for(var i=0; i < listPrice.length; i++){
        totalPrice = totalPrice + listPrice[i].total_sub_price;
      }
      this.setState({
        grandTotal: totalPrice
      });

    })
  }
  render() {
    if(cookies.get('userSession') === undefined) {
      return <Redirect to="/signin"/>
    }
    const emptyCart = this.state.emptycart.map((isi, index) => {
      return <div className="alert alert-info alert-dismissible">
      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      <h4><i className="icon fa fa-info"></i> Alert!</h4>
      {isi}
    </div>
    })
    const cartList = this.state.detailCart.map((isi, index) => {
      var cartID = isi.id;
      var productName = isi.product_name;
      var quantity = isi.quantity;
      var price = isi.product_price;
      var image = isi.product_image;
      var total = this.state.totalPerItem;

      for(var i=0; i < total.length; i++){
        if(total[i].id === cartID){
          var totalPrice = total[i].total_sub_price;
        }
      }

      return <tr style={{padding: '10px', borderTop: '2px solid green'}} key={index}>
      <td data-th="Product">
        <div className="row">
          <div className="col-sm-2 hidden-xs">
            <img src={`http://localhost:8005/pics/`+image} alt="..." className="img-responsive" />
          </div>
          <div className="col-sm-10">
            <h4>{productName}</h4>
          </div>
        </div>
      </td>
      <td data-th="Price">Rp.{price}</td>
      <td data-th="Quantity">
        <input type="number" min={1} ref="quantity" defaultValue={quantity} onChange={(e) => this.changeQuantity(e.target.value, cartID)} className="form-control text-center"  />
      </td>
      <td data-th="Subtotal" className="text-center">Rp.{totalPrice}</td>
      <td className="actions" data-th>
        <button className="btn btn-danger btn-flat btn-md" onClick={() => this.deleteCart(cartID)}><i className="fa fa-remove" /></button>								
      </td>
    </tr>
    })
    
    const cartLength = cartList.length;

    return (
      <div>
        <Navbar loginbutton={this.state.loginbutton} fullname={this.state.fullname} userphoto={this.state.userphoto} profile={this.props.profileArea} />
        <div className="content-wrapper">
          <div className="container">
            <section className="content-header">
                <ol className="breadcrumb" style={{fontSize: '15px', fontWeight:'bold', marginRight: '30px'}}>
                    <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                    <li><Link to="/detailproduct">Product Detail</Link></li>
                    <li className="active">Cart Detail</li>
                </ol>
            </section>
            <div className="row">
              <div className="col-md-12">
                <div className="box box-widget">
                  <div className="box-body">
                    <section className="content" style={{marginTop: '35px', minHeight: '600px'}}>
                        <table id="cart" className="table table-hover table-condensed" style={{verticalAlign: 'middle', fontSize: '17px'}}>
                        <thead style={{fontSize:'19px'}}>
                          <tr>
                            <th style={{width: '50%'}}>Product</th>
                            <th style={{width: '10%'}}>Price</th>
                            <th style={{width: '8%'}}>Quantity</th>
                            <th style={{width: '22%'}} className="text-center">Subtotal</th>
                            <th style={{width: '10%'}}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(cartLength === 0) ? emptyCart : cartList}
                        </tbody>
                        <tfoot>
                          <tr className="visible-xs">
                            <td className="text-center"><strong>Total 1.99</strong></td>
                          </tr>
                          <tr>
                            <td><Link to="/productlist" className="btn btn-flat btn-lg btn-warning"><i className="fa fa-chevron-circle-left" />&nbsp;&nbsp;Continue Shopping</Link></td>
                            <td colSpan={2} className="hidden-xs" />
                            <td className="hidden-xs text-center"><strong>Total: {this.state.grandTotal}</strong></td>
                            <td><Link to="/checkout" className="btn btn-flat btn-lg btn-success btn-block">Checkout&nbsp;&nbsp;<i className="fa fa-chevron-circle-right" /></Link></td>
                          </tr>
                        </tfoot>
                      </table>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footers />
      </div>
    )
  }
}
export default ShoppingCart