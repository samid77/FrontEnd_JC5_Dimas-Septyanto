import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import DetailProduct from './components/DetailProduct';
import ProductList from './components/ProductsList';
import DiscountList from './components/DiscountList';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import SearchResults from './components/SearchResults';
import Signin from './components/Signin';
import Signout from './components/Signout';
import Invoices from './components/Invoices';
import UserProfile from './components/UserProfile';
import Registration from './components/Registration';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/productlist" component={ProductList}/>
          <Route path="/discountlist" component={DiscountList}/>
          <Route path="/detailproduct" component={DetailProduct}/>
          <Route path="/cart" component={ShoppingCart}/>
          <Route path="/invoice" component={Invoices}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/searchresults" component={SearchResults}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signout" component={Signout}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/userprofile" component={UserProfile}/>
        </div>
    );
  }
}

export default App;
