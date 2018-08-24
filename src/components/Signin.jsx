import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Signin extends Component {
  render() {
    return (
        <div>
            <div className="content-wrapper" style={{fontSize: '18px'}}>
                <div className="login-box" style={{minHeight: '800px'}}>
                    <div className="login-logo">
                        <a href="#">
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
                            <div className="form-group has-feedback">
                                <Link to="/" className="btn btn-primary btn-block btn-flat"><i className="fa fa-paper-plane"></i> Login</Link>
                                <Link to="/registration" className="btn btn-success btn-block">Daftar Anggota Baru</Link>
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
export default Signin;