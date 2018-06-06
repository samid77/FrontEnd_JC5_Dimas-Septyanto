// Register.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Register extends Component {
    render(){
        return(
            <div className="content-wrapper">
                <div className="register-box">
                    <div className="register-logo">
                        <a href="index.html">
                        <b id="brand">Wise</b>Monkey</a>
                    </div>
                    <div className="register-box-body">
                        <p className="login-box-msg">Register a new membership</p>
                        <form action="index.html" method="post">
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Full name" type="text" />
                            <span className="glyphicon glyphicon-user form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Email" type="email" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Password" type="password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Retype password" type="password" />
                            <span className="glyphicon glyphicon-log-in form-control-feedback" />
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                            <div className="checkbox icheck">
                                <label>
                                <input type="checkbox" /> I agree to the
                                <Link to="/">terms</Link>
                                </label>
                            </div>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-4">
                                <Link to="/" type="submit" className="btn btn-primary btn-block btn-flat">Register</Link>
                            </div>
                            {/* /.col */}
                        </div>
                        </form>
                        <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat">
                            <i className="fa fa-facebook" /> Sign up using Facebook
                        </a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat">
                            <i className="fa fa-google-plus" /> Sign up using Google+
                        </a>
                        </div>
                        <a href="login.html" className="text-center">I already have a membership</a>
                    </div>
                    {/* /.form-box */}
                </div>
            </div>
        );
    }
}
export default Register;