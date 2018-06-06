// Profile.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Profile extends Component {
    render(){
        return(
            <div>
                <Header />
                <div className="content-wrapper">
                    <div className="container">
                        {/* Content Header (Page header) */}
                        <section className="content-header">
                        <h3 className="headingMenu">
                            <i className="fa fa-user" /> User Profile
                        </h3>
                        <ol className="breadcrumb">
                            <li>
                            <a href="#">
                                <i className="fa fa-home" /> Home</a>
                            </li>
                            <li className="active">User profile</li>
                        </ol>
                        </section>
                        {/* Main content */}
                        <section className="content">
                        <div className="row">
                            <div className="col-md-3">
                            {/* Profile Image */}
                            <div className="box box-success">
                                <div className="box-body box-profile">
                                <img className="profile-user-img img-responsive img-circle" src="dist/img/samid.jpg" alt="User profile picture" />
                                <h3 className="profile-username text-center">Dimas Septyanto</h3>
                                <p className="text-muted text-center">Pelapak Newbie</p>
                                <ul className="list-group list-group-unbordered">
                                    <li className="list-group-item">
                                    <b>Pembelian Berhasil</b>
                                    <a className="pull-right">32</a>
                                    </li>
                                    <li className="list-group-item">
                                    <b>Penjualan Berhasil</b>
                                    <a className="pull-right">11</a>
                                    </li>
                                    <li className="list-group-item">
                                    <b>Rating Overall</b>
                                    <a className="pull-right"><i className="fa fa-star" /> 4.7</a>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary btn-block btn-flat">
                                    <b>Button</b>
                                </a>
                                </div>
                                {/* /.box-body */}
                            </div>
                            {/* /.box */}
                            </div>
                            {/* /.col */}
                            <div className="col-md-9">
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs">
                                <li className="active">
                                    <a href="#timeline" data-toggle="tab">Invoice History</a>
                                </li>
                                <li>
                                    <a href="#settings" data-toggle="tab">Profile Settings</a>
                                </li>
                                </ul>
                                <div className="tab-content">
                                <div className="active tab-pane" id="timeline">
                                    <table className="table table-hover">
                                    <tbody><tr>
                                        <th>Invoice ID</th>
                                        <th>Order ID</th>
                                        <th>User</th>
                                        <th>Date</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        </tr>
                                        <tr>
                                        <td>#007612</td>
                                        <td>ORD0023</td>
                                        <td>John Doe</td>
                                        <td>11 Maret 2018</td>
                                        <td>Rp.670,000,00</td>
                                        <td>
                                            <span className="label label-success">Paid</span>
                                        </td> 
                                        </tr>
                                        <tr>
                                        <td>#007612</td>
                                        <td>ORD0023</td>
                                        <td>John Doe</td>
                                        <td>11 Maret 2018</td>
                                        <td>Rp.670,000,00</td>
                                        <td>
                                            <span className="label label-danger">Failed</span>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>#007612</td>
                                        <td>ORD0023</td>
                                        <td>John Doe</td>
                                        <td>11 Maret 2018</td>
                                        <td>Rp.670,000,00</td>
                                        <td>
                                            <span className="label label-warning">Pending</span>
                                        </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                                {/* /.tab-pane */}
                                <div className="tab-pane" id="settings">
                                    <form className="form-horizontal">
                                    <div className="form-group">
                                        <label htmlFor="inputName" className="col-sm-2 control-label">Nama Lengkap</label>
                                        <div className="col-sm-10">
                                        <input className="form-control" id="inputName" placeholder="Nama lengkap" type="email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                                        <div className="col-sm-10">
                                        <input className="form-control" id="inputEmail" placeholder="Alamat Email anda" type="email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName" className="col-sm-2 control-label">Username</label>
                                        <div className="col-sm-10">
                                        <input className="form-control" id="inputName" placeholder="Isi dengan username anda" type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputSkills" className="col-sm-2 control-label">Nomor Identitas</label>
                                        <div className="col-sm-10">
                                        <input className="form-control" id="inputSkills" placeholder="Masukan nomor KTP/SIM" type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" className="btn btn-success btn-flat"><i className="fa fa-paper-plane" /> Submit</button>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                {/* /.tab-pane */}
                                </div>
                                {/* /.tab-content */}
                            </div>
                            {/* /.nav-tabs-custom */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Profile;