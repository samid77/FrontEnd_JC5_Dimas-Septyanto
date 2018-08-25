import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import SweetAlert from 'sweetalert-react';

class Registration extends Component {
  state = {
      fullname: '',
      email: '',
      username: '',
      password: '',
      address: '',
      phone: '',
      redirect: false,
      status: '',
  }
  registrationProcess = (e) => {
    var self = this;
    axios.post(`http://localhost:8005/registration`, {
        fullname: e.fullname.value,
        username: e.username.value,
        password: e.password.value,
        address: e.address.value,
        phone: e.phone.value,
        email: e.email.value,
    }).then((response) => {
        if(response.data === 'oke'){
            self.setState({
                redirect: true,
            })
        } else {
            self.setState({
                status: 'Registrasi gagal'
            });
        }
    });
  }
  renderRedirect = () => {
      if(this.state.redirect){
          return <Redirect to="/signin"/>
      }
  }
  render() {
    return (
      <div className="content-wrapper" style={{fontSize: '18px'}}>
        {this.renderRedirect()}
        <div className="container">
            <div className="login-box" style={{minHeight: '800px'}}>
                <div className="login-logo">
                    <a href="#">
                    <b id="brand">Wise</b>Monkey</a>
                </div>
                {/* /.login-logo */}
                <div className="login-box-body">
                    <p className="login-box-msg">Register as a new member</p>
                    <form role="form">
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Full Name" type="text" ref="fullname"/>
                            <span className="glyphicon glyphicon-user form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Username" type="text" ref="username"/>
                            <span className="glyphicon glyphicon-user form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Email" type="email" ref="email"/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Phone Number" type="text" ref="phone" />
                            <span className="glyphicon glyphicon-phone form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Address" type="text" ref="address"/>
                            <span className="fa fa-map-pin form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Password" type="password" ref="password"/>
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <button type="button" onClick={() => this.registrationProcess(this.refs)} className="btn btn-primary btn-block btn-flat"><i className="fa fa-paper-plane"></i> Sign Up</button>
                        </div>
                    </form>
                </div>
                {/* /.login-box-body */}
            </div>
        </div>
      </div>
    )
  }
}
export default Registration;
