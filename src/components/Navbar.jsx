// Header.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const aStyle = {
  marginTop: '10px'
}

class Navbar extends Component {
    state = {
      profileArea: '',
      countCart: [],
      jumlah: [],
    }
    componentWillMount = () => {
      axios.post('http://localhost:8005/countCart', {
        userID: cookies.get('userSession'),
      }).then((response) => {
        this.setState({
          jumlah: response.data[0],
          countCart: response.data[1]
        });
      })
    }
    render(){
      const jumlahCart = this.state.jumlah.map((isi, index) => {
        var jumlah = isi.jumlah;
        return <span className="label label-danger">{jumlah}</span>
      })
      const cart = this.state.countCart.map((isi, index) => {
        var urutan = index + 1;
        var namaProduk = isi.product_name;
        var fotoProduk = isi.product_image;
        var hargaProduk = isi.product_price;
        return <li key={index}>
        <a href="#">
          <div className="pull-left">
            <img src={'http://localhost:8005/pics/'+fotoProduk} className="img-circle" alt="User Image"/>
          </div>
          <h4>
            {namaProduk}
          </h4>
          <p>Rp.{hargaProduk}</p>
        </a>
      </li>
      })
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
                          <ul className="nav navbar-nav">
                            {/* <li><Link to="/signin"><i className="fa fa-user"></i> Login / Register</Link></li> */}
                            {this.props.loginbutton}
                          </ul>
                      </div>

                      <div className="navbar-custom-menu">
                          <ul className="nav navbar-nav">
                              <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <i className="fa fa-cart-arrow-down"></i>
                                  {jumlahCart}
                                </a>
                                <ul className="dropdown-menu">
                                  <li className="header">4 Barang di Cart Belanja Anda</li>
                                  <li>
                                    <ul className="menu">
                                      {cart}
                                    </ul>
                                  </li>
                                  <li className="footer">
                                    <Link to="/cart">Lihat Cart</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <img src={'http://localhost:8005/pics/'+ this.props.userphoto}className="user-image" alt="User Image"/>
                                  <span className="hidden-xs">{this.props.fullname}</span>
                                </a>
                                <ul className="dropdown-menu">
                                  <li className="user-header">
                                    <img src={'http://localhost:8005/pics/'+ this.props.userphoto} className="img-circle" alt="User Image"/>
                                    <p>
                                      {this.props.fullname}
                                    </p>
                                  </li>
                                  <li className="user-footer">
                                    <div className="text-center">
                                      <Link to="/userprofile" className="btn btn-success btn-flat" style={aStyle}><i className="fa fa-user"></i> Profile</Link>&nbsp;
                                      <Link to="/signout" className="btn btn-danger btn-flat" style={aStyle}><i className="fa fa-sign-out"></i> Sign out</Link>
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
export default Navbar;