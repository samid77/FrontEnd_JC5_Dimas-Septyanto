// Header.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const aStyle = {
  marginTop: '10px'
}

export default class Header extends Component {
    render(){
        return (
          <header className="main-header">
              <nav className="navbar navbar-static-top" id="navBar">
                  <div className="container">
                      <div className="navbar-header">
                          <Link to="/" className="navbar-brand">
                            <b id="brand">Wise</b>Monkey
                          </Link>
                          <button type="button" className = "navbar-toggle collapsed" data-toggle = "collapsed" data-target = "#navbar-collapse">
                              <i className="fa fa-bars"></i>
                          </button>
                      </div>

                      <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                          <ul className="nav navbar-nav"></ul>
                          <form className="navbar-form navbar-left" role="search">
                              <div className="input-group">
                                  <input type="text" className="form-control" placeholder="Cari produk..." />
                                  <span className="input-group-addon bg-maroon">
                                      <i className="fa fa-search"></i>
                                  </span>
                              </div>
                          </form>
                      </div>

                      <div className="navbar-custom-menu">
                          <ul className="nav navbar-nav">
                              
                              <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <i className="fa fa-cart-arrow-down"></i>
                                  <span className="label label-danger">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                  <li className="header">4 Barang di Cart Belanja Anda</li>
                                  <li>
                                    <ul className="menu">
                                      <li>
                                        <a href="#">
                                          <div className="pull-left">
                                            <img src="http://placehold.it/350x260" className="img-circle" alt="User Image"/>
                                          </div>
                                          <h4>
                                            Nama Product
                                            <small>
                                              <i className="fa fa-clock-o"></i> 5 mins</small>
                                          </h4>
                                          <p>Rp.250k</p>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div className="pull-left">
                                            <img src="http://placehold.it/350x260" className="img-circle" alt="User Image"/>
                                          </div>
                                          <h4>
                                            Nama Product
                                            <small>
                                              <i className="fa fa-clock-o"></i> 5 mins</small>
                                          </h4>
                                          <p>Rp.250k</p>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div className="pull-left">
                                            <img src="http://placehold.it/350x260" className="img-circle" alt="User Image"/>
                                          </div>
                                          <h4>
                                            Nama Product
                                            <small>
                                              <i className="fa fa-clock-o"></i> 5 mins</small>
                                          </h4>
                                          <p>Rp.250k</p>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div className="pull-left">
                                            <img src="http://placehold.it/350x260" className="img-circle" alt="User Image"/>
                                          </div>
                                          <h4>
                                            Nama Product
                                            <small>
                                              <i className="fa fa-clock-o"></i> 5 mins</small>
                                          </h4>
                                          <p>Rp.250k</p>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="footer">
                                    <Link to="/cart">Lihat Cart</Link>
                                  </li>
                                </ul>
                              </li>

                              <li className="dropdown notifications-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <i className="fa fa-bell-o"></i>
                                  <span className="label label-warning">10</span>
                                </a>
                                <ul className="dropdown-menu">
                                  <li className="header">You have 10 notifications</li>
                                  <li>
                                    <ul className="menu">
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the page and may cause design problems
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-users text-red"></i> 5 new members joined
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-user text-red"></i> You changed your username
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="footer">
                                    <a href="#">View all</a>
                                  </li>
                                </ul>
                              </li>

                              <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <img src="dist/img/samid.jpg" className="user-image" alt="User Image"/>
                                  <span className="hidden-xs">Dimas Septyanto</span>
                                </a>
                                <ul className="dropdown-menu">
                                  <li className="user-header">
                                    <img src="dist/img/samid.jpg" className="img-circle" alt="User Image"/>
                                    <p>
                                      Dimas Septyanto
                                      <small>Member since Nov. 2012</small>
                                    </p>
                                  </li>
                                  <li className="user-footer">
                                    <div className="text-center">
                                      <Link to="/profile" className="btn btn-primary btn-flat" style={aStyle}><i className="fa fa-black-tie"></i> Profile</Link>
                                      <a href="admin.html" className="btn btn-warning btn-flat" style={aStyle}>
                                        <i className="fa fa-expeditedssl"></i> Admin Area</a><br />
                                      <Link to="/login" className="btn btn-danger btn-flat" style={aStyle}><i className="fa fa-sign-out"></i> Sign out</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>

                          </ul>
                      </div>
                      
                  </div>
              </nav>
          </header>
        )
    }
}