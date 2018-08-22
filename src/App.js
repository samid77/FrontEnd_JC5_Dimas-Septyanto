import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';
import Login from './components/Login';
import Register from './components/Register';
import Invoice from './components/Invoice';
import Profile from './components/Profile';
import Detail from './components/Detail';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/product" component={Product}/>
          <Route path="/cart" component={ShoppingCart}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/invoice" component={Invoice}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
    );
  }
}

export default App;
