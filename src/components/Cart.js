// Cart.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Cart extends Component {
    render(){
        return(
            <div>
            <Header />
                <div className="content-wrapper">
                    <div className="container">
                        <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                            <section className="content-header">
                                <h3 className="headingMenu">
                                <i className="fa fa-shopping-cart" /> Cart
                                </h3>
                                <ol className="breadcrumb">
                                <li>
                                    <a href="#">
                                    <i className="fa fa-home" /> Home</a>
                                </li>
                                <li className="active">Cart</li>
                                </ol>
                            </section>
                            <section className="content">
                                <div className="box box-success">
                                <div className="box-body">
                                    <div className="row">
                                    <div className="col-xs-12 table-responsive">
                                        <table className="table table-striped">
                                        <thead>
                                            <tr>
                                            <th>Product</th>
                                            <th>Qty</th>
                                            <th>Description</th>
                                            <th>Subtotal</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>Call of Duty</td>
                                            <td><input style={{width: 25}} type="text" /></td>
                                            <td>El snort testosterone trophy driving gloves handsome</td>
                                            <td>Rp.150,000,00</td>
                                            <td>
                                                <a className="btn btn-xs btn-danger btn-flat" href="#">
                                                <i className="fa fa-trash" />
                                                </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>Need for Speed IV</td>
                                            <td>
                                                <input style={{width: 25}} type="text" />
                                            </td>
                                            <td>Wes Anderson umami biodiesel</td>
                                            <td>Rp.150,000,00</td>
                                            <td>
                                                <a className="btn btn-xs btn-danger btn-flat" href="#">
                                                <i className="fa fa-trash" />
                                                </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>Monsters DVD</td>
                                            <td>
                                                <input style={{width: 25}} type="text" />
                                            </td>
                                            <td>Terry Richardson helvetica tousled street art master</td>
                                            <td>Rp.150,000,00</td>
                                            <td>
                                                <a className="btn btn-xs btn-danger btn-flat" href="#">
                                                <i className="fa fa-trash" />
                                                </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>Grown Ups Blue Ray</td>
                                            <td>
                                                <input style={{width: 25}} type="text" />
                                            </td>
                                            <td>Tousled lomo letterpress</td>
                                            <td>Rp.150,000,00</td>
                                            <td>
                                                <a className="btn btn-xs btn-danger btn-flat" href="#">
                                                <i className="fa fa-trash" />
                                                </a>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                    <div className="row">
                                    {/* accepted payments column */}
                                    <div className="col-xs-6">
                                        <p className="text-muted well well-sm no-shadow" style={{marginTop: 10}}>
                                        <b>Syarat dan Ketentuan:</b><br />
                                        Jika dalam keadaan tertentu, terdapat kesalahan harga ataupun informasi mengenai suatu produk tertentu yang disebabkan oleh
                                        kesalahan pengetikan (Typo) atau kesalahan harga dan informasi, WiseMonkey berhak untuk menolak ataupun membatalkan
                                        pesanan yang menggunakan harga yang salah termasuk pesanan yang sudah dibayarkan.
                                        </p>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-xs-6">
                                        <div className="table-responsive">
                                        <table className="table">
                                            <tbody><tr>
                                                <th style={{width: '50%'}}>Subtotal:</th>
                                                <td>Rp.600,000,00</td>
                                            </tr>
                                            </tbody></table>
                                        </div>
                                        <a href="invoice.html" className="btn btn-sm btn-flat bg-purple"><i className="fa fa-chevron-circle-right" /> Checkout</a>
                                    </div>
                                    {/* /.col */}
                                    </div>
                                </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        );
    }
}
export default Cart;