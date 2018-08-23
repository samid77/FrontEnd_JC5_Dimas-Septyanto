// Cart.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class Invoice extends Component {
    render(){
        return(
            <div>
            <Navbar />
                <div className="content-wrapper">
                    <div className="container">
                        <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                            <section className="content-header">
                                <h3 className="headingMenu">
                                <i className="fa fa-credit-card" /> Invoice
                                </h3>
                                <ol className="breadcrumb">
                                <li>
                                    <a href="#">
                                    <i className="fa fa-home" /> Home</a>
                                </li>
                                <li className="active">Cart</li>
                                <li className="active">Invoice</li>
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
                                            <th>Serial #</th>
                                            <th>Description</th>
                                            <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>Call of Duty</td>
                                            <td>1</td>
                                            <td>455-981-221</td>
                                            <td>El snort testosterone trophy driving gloves handsome</td>
                                            <td>Rp.150,000,00</td>
                                            </tr>
                                            <tr>
                                            <td>Need for Speed IV</td>
                                            <td>1</td>
                                            <td>247-925-726</td>
                                            <td>Wes Anderson umami biodiesel</td>
                                            <td>Rp.150,000,00</td>
                                            </tr>
                                            <tr>
                                            <td>Monsters DVD</td>
                                            <td>1</td>
                                            <td>735-845-642</td>
                                            <td>Terry Richardson helvetica tousled street art master</td>
                                            <td>Rp.150,000,00</td>
                                            </tr>
                                            <tr>
                                            <td>Grown Ups Blue Ray</td>
                                            <td>1</td>
                                            <td>422-568-642</td>
                                            <td>Tousled lomo letterpress</td>
                                            <td>Rp.150,000,00</td>
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
                                        <p className="lead">Payment Methods:</p>
                                        <img src="dist/img/credit/visa.png" alt="Visa" />
                                        <img src="dist/img/credit/mastercard.png" alt="Mastercard" />
                                        <img src="dist/img/credit/paypal2.png" alt="Paypal" />
                                        <p className="text-muted well well-sm no-shadow" style={{marginTop: 10}}>
                                        Jika dalam keadaan tertentu, terdapat kesalahan harga ataupun informasi mengenai suatu produk tertentu yang disebabkan oleh
                                        kesalahan pengetikan (Typo) atau kesalahan harga dan informasi, WiseMonkey berhak untuk menolak ataupun
                                        membatalkan pesanan yang menggunakan harga yang salah termasuk pesanan yang sudah dibayarkan.
                                        </p>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-xs-6">
                                        <p className="lead">Amount Due 2/22/2018</p>
                                        <div className="table-responsive">
                                        <table className="table">
                                            <tbody><tr>
                                                <th style={{width: '50%'}}>Subtotal:</th>
                                                <td>Rp.600,000,00</td>
                                            </tr>
                                            <tr>
                                                <th>Tax (10%)</th>
                                                <td>Rp.60,000,00</td>
                                            </tr>
                                            <tr>
                                                <th>Shipping:</th>
                                                <td>Rp.100,000,00</td>
                                            </tr>
                                            <tr>
                                                <th>Total:</th>
                                                <td>Rp.760,000,00</td>
                                            </tr>
                                            </tbody></table>
                                        </div>
                                        <a href="invoice-print.html" target="_blank" className="btn btn-sm btn-flat btn-default">
                                        <i className="fa fa-print" /> Print Invoice</a>
                                    </div>
                                    {/* /.col */}
                                    </div>
                                </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}
export default Invoice;