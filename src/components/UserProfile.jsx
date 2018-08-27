import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Navbar from './Navbar';
import Footers from './Footers';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();


class UserProfile extends Component {
  state = {
    fullname: '',
    username:'',
    userphoto: '',
    useremail: '',
    userphone: '',
    useraddress: '',
    userID: '',
    isLoggedin: false,
    loginbutton: <li><Link to="/signin"><i className="fa fa-user"></i> Login / Register</Link></li>,
    profileArea: false,
    userFullName: '',
    userName: '',
    userEmail: '',
    userAddress: '',
    userpassword: '',
    purchaseHistory: [],
    unpaidPurchaseHistory: [],
  }
  componentWillMount = () => {
    if(cookies.get('userSession') !== undefined) {
        axios.post('http://localhost:8005/getUserData', {
            userID: cookies.get('userSession')
        }).then((response) => {
            this.setState({
                isLoggedin: true,
                loginbutton: <li></li>,
                userID: response.data[0].id,
                fullname: response.data[0].full_name,
                userName: response.data[0].username,
                userFullName: response.data[0].full_name,
                userphoto: response.data[0].user_image,
                useremail: response.data[0].email,
                userpassword: response.data[0].password,
                userEmail: response.data[0].email,
                userphone: response.data[0].phone,
                useraddress: response.data[0].address,
                userAddress: response.data[0].address,
                profileArea: true,
            })
        })
        axios.post('http://localhost:8005/getPaidHistory', {
            userID: cookies.get('userSession')  
        }).then((getData) => {
            console.log(getData.data);
            this.setState({
                purchaseHistory: getData.data
            });
        })
        axios.post('http://localhost:8005/getUnpaidHistory', {
            userID: cookies.get('userSession')  
        }).then((getData) => {
            console.log(getData.data);
            this.setState({
                unpaidPurchaseHistory: getData.data
            });
        })
    }
  }
  render() {
    const purchaseHistory = this.state.purchaseHistory.map((isi, index) => {
        var urutan = index + 1;
        var id = isi.id;
        var invoiceNumber = isi.invoice_number;
        var quantity = isi.quantity;
        var productName = isi.product_name;
        var date = isi.created;
        var total = isi.total;
        var status = isi.status;

        return <tr key={urutan}>
        <td>INV{invoiceNumber}</td>
        <td>{productName}</td>
        <td>{quantity}</td>
        <td>Rp.{total}</td>
        <td><span className="label label-success">paid</span></td>
        <td>{date}</td>
    </tr>
    })
    const unpaidPurchaseHistory = this.state.unpaidPurchaseHistory.map((isi, index) => {
        var urutan = index + 1;
        var id = isi.id;
        var invoiceNumber = isi.invoice_number;
        var quantity = isi.quantity;
        var productName = isi.product_name;
        var date = isi.created;
        var total = isi.total;
        var status = isi.status;

        return <tr key={urutan}>
        <td>INV{invoiceNumber}</td>
        <td>{productName}</td>
        <td>{quantity}</td>
        <td>Rp.{total}</td>
        <td><span className="label label-danger">unpaid</span></td>
        <td>{date}</td>
    </tr>
    })
    return (
      <div>
        <Navbar loginbutton={this.state.loginbutton} fullname={this.state.fullname} userphoto={this.state.userphoto} profile={this.props.profileArea}/>
        <div className="content-wrapper">
            <div className="container">
                <section className="content" style={{minHeight: '700px'}}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="box box-primary">
                            {/* /.box-header */}
                            <div className="box-body">
                                <img className="profile-user-img img-responsive img-circle" src={'http://localhost:8005/pics/'+this.state.userphoto} alt="User profile picture" />
                                <h3 className="profile-username text-center">{this.state.fullname}</h3>
                                {/* <p className="text-muted text-center">Software Engineer</p> */}
                                <hr />
                                <strong><i className="fa fa-envelope-o margin-r-5" /> Email</strong>
                                    <p className="text-muted">
                                    {this.state.useremail}
                                    </p><hr />
                                <strong><i className="fa fa-phone margin-r-5" /> Phone</strong>
                                    <p className="text-muted">
                                    081285972197
                                    </p><hr />
                                <strong><i className="fa fa-map-marker margin-r-5" /> Address</strong>
                                    <p className="text-muted">
                                    {this.state.useraddress}
                                    </p><hr />
                                <strong><i className="fa fa-file-text-o margin-r-5" /> Notes</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                            </div>
                            {/* /.box-body */}
                            </div>
                            {/* /.box */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-9">
                            <div className="nav-tabs-custom">
                            <ul className="nav nav-tabs">
                                <li className="active"><a href="#activity" data-toggle="tab">Paid Purchase History</a></li>
                                <li><a href="#timeline" data-toggle="tab">Unpaid Purchase History</a></li>
                                <li><a href="#settings" data-toggle="tab">Edit Profile</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="active tab-pane" id="activity">
                                    <div className="table-responsive">
                                        <table className="table no-margin">
                                            <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {purchaseHistory}
                                            </tbody>
                                        </table>
                                        </div>
                                </div>
                                <div className="tab-pane" id="timeline">
                                    <div className="table-responsive">
                                        <table className="table no-margin">
                                            <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {unpaidPurchaseHistory}
                                            </tbody>
                                        </table>
                                        </div>
                                </div>
                                {/* /.tab-pane */}
                                <div className="tab-pane" id="settings">
                                    <form className="form-horizontal">
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Full Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="inputName" value={this.state.userFullName} placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Username</label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.userName}className="form-control" id="inputName" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" value={this.state.userEmail} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Password</label>
                                            <div className="col-sm-10">
                                                <input type="password" value={this.state.userpassword} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Address</label>
                                            <div className="col-sm-10">
                                                <input type="text"  value={this.state.userAddress} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <button type="submit" className="btn btn-danger">Submit</button>
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
                </section>
            </div>
        </div>
        <Footers />
      </div>
    )
  }
}
export default UserProfile;
