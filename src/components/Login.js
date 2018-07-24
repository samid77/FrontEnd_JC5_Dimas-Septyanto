// Login.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Login extends Component {
    render(){
        return(
            <div className="content-wrapper">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="index.html">
                        <b id="brand">Wise</b>Monkey</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form action="index2.html" method="post">
                            <div className="form-group has-feedback">
                                <input className="form-control" placeholder="Email" type="email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <input className="form-control" placeholder="Password" type="password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                            </div>
                            <div className="row">
                                <div className="col-xs-4">
                                    <a href="index.html" className="btn btn-primary btn-block btn-flat">Sign In</a>
                                </div>
                            </div>
                        </form>
                        <a href="#">I forgot my password</a>
                        <br />
                        <Link to="/register" className="text-center">Register a new membership</Link>
                    </div>
                    {/* /.login-box-body */}
                </div>
            </div>
        );
    }
}
export default Login;