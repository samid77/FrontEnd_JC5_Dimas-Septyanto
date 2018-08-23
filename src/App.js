import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import DetailProduct from './components/DetailProduct';
import ProductList from './components/ProductsList';
import DiscountList from './components/DiscountList';
import ShoppingCart from './components/ShoppingCart';
import SearchResults from './components/SearchResults';
import Signin from './components/Signin';
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
          <Route path="/searchresults" component={SearchResults}/>
          <Route path="/signin" component={Signin}/>
        </div>
    );
  }
}

export default App;
