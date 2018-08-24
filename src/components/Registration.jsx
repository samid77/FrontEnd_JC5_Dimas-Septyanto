import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Registration extends Component {
  render() {
    return (
      <div className="content-wrapper" style={{fontSize: '18px'}}>
        <div className="container">
            <div className="login-box" style={{minHeight: '800px'}}>
                <div className="login-logo">
                    <a href="#">
                    <b id="brand">Wise</b>Monkey</a>
                </div>
                {/* /.login-logo */}
                <div className="login-box-body">
                    <p className="login-box-msg">Register as a new member</p>
                    <form method="post">
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Full Name" type="text" />
                            <span className="glyphicon glyphicon-user form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Email" type="email" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Phone Number" type="text" />
                            <span className="glyphicon glyphicon-phone form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Address" type="text" />
                            <span className="fa fa-map-pin form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input className="form-control" placeholder="Password" type="password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <Link to="/" className="btn btn-primary btn-block btn-flat"><i className="fa fa-paper-plane"></i> Sign Up</Link>
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
