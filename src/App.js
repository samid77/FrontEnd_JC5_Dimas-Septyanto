import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Invoice from './components/Invoice';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import Detail from './components/Detail';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Route exact path="/" component={Content}/>
          <Route path="/product" component={Product}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/invoice" component={Invoice}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/admin" component={Admin}/>
        </div>
    );
  }
}

export default App;
