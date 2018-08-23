import React, { Component } from 'react'
import Navbar from './Navbar';
import Footers from './Footers';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content-wrapper">
            <div className="container">
                <section className="content" style={{minHeight: '500px'}}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="box box-primary">
                            {/* /.box-header */}
                            <div className="box-body">
                                <img className="profile-user-img img-responsive img-circle" src="../../dist/img/samid.jpg" alt="User profile picture" />
                                <h3 className="profile-username text-center">Dimas Septyanto</h3>
                                <p className="text-muted text-center">Software Engineer</p><hr />
                                <strong><i className="fa fa-envelope-o margin-r-5" /> Email</strong>
                                <p className="text-muted">
                                dimaseptyanto@windowslive.com
                                </p><hr />
                                <strong><i className="fa fa-phone margin-r-5" /> Phone</strong>
                                <p className="text-muted">
                                081285972197
                                </p><hr />
                                <strong><i className="fa fa-map-marker margin-r-5" /> Address</strong>
                                <p className="text-muted">
                                Graha Indah Blok A11 No.5, Bekasi, 17421
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
                                <li className="active"><a href="#activity" data-toggle="tab">Purchase History</a></li>
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
                                            <tr>
                                                <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                <td>Call of Duty IV</td>
                                                <td>2</td>
                                                <td>Rp.450.000,00</td>
                                                <td><span className="label label-success">Shipped</span></td>
                                                <td>
                                                    21/08/2018
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                <td>Samsung Smart TV</td>
                                                <td>2</td>
                                                <td>Rp.450.000,00</td>
                                                <td><span className="label label-warning">Pending</span></td>
                                                <td>
                                                    21/08/2018
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                <td>iPhone 6 Plus</td>
                                                <td>2</td>
                                                <td>Rp.450.000,00</td>
                                                <td><span className="label label-danger">Delivered</span></td>
                                                <td>
                                                    21/08/2018
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                </div>
                                {/* /.tab-pane */}
                                <div className="tab-pane" id="settings">
                                    <form className="form-horizontal">
                                        <div className="form-group">
                                        <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputName" placeholder="Name" />
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputName" placeholder="Name" />
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="inputExperience" className="col-sm-2 control-label">Experience</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" id="inputExperience" placeholder="Experience" defaultValue={""} />
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="inputSkills" className="col-sm-2 control-label">Skills</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
                                            </label>
                                            </div>
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
