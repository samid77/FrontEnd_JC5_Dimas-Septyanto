import React, { Component } from 'react'
import Navbar from './Navbar';
import Footers from './Footers';
import Ok from './pics/ok.png';
import monkey from './pics/monkey.png';

class Invoices extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="content-wrapper">
            <div className="container">
                <section className="content" style={{minHeight: '500px'}}>
                    <div className="col-md-10 col-md-offset-1">
                        <div className="box box-widget">
                            <center>
                                <img src={Ok}/>
                                <h3>Thank you for your order</h3>
                            </center>
                            <hr style={{border: '1px solid grey'}}/>
                                <section className="invoice">
                                    {/* title row */}
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <h2 className="page-header">
                                                <img src={monkey} style={{width:'30px'}}/> WiseMonkey, Inc.
                                                <small className="pull-right">Date: 2/09/2018</small>
                                            </h2>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* info row */}
                                    <div className="row invoice-info">
                                        <div className="col-sm-4 invoice-col">
                                            From
                                            <address>
                                                <strong>WiseMonkey, Inc.</strong><br />
                                                795 Folsom Ave, Suite 600<br />
                                                San Francisco, CA 94107<br />
                                                Phone: (804) 123-5432<br />
                                                Email: info@almasaeedstudio.com
                                            </address>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-sm-4 invoice-col">
                                            To
                                            <address>
                                                <strong>John Doe</strong><br />
                                                795 Folsom Ave, Suite 600<br />
                                                San Francisco, CA 94107<br />
                                                Phone: (555) 539-1037<br />
                                                Email: john.doe@example.com
                                            </address>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-sm-4 invoice-col">
                                            <b>Invoice #007612</b><br />
                                            <br />
                                            <b>Order ID:</b> 4F3S8J<br />
                                            <b>Payment Due:</b> 2/22/2014<br />
                                            <b>Account:</b> 968-34567
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                    {/* Table row */}
                                    <div className="row">
                                        <div className="col-xs-12 table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Qty</th>
                                                    <th>Product</th>
                                                    <th>Serial #</th>
                                                    <th>Description</th>
                                                    <th>Subtotal</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Call of Duty</td>
                                                    <td>455-981-221</td>
                                                    <td>El snort testosterone trophy driving gloves handsome</td>
                                                    <td>$64.50</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Need for Speed IV</td>
                                                    <td>247-925-726</td>
                                                    <td>Wes Anderson umami biodiesel</td>
                                                    <td>$50.00</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Monsters DVD</td>
                                                    <td>735-845-642</td>
                                                    <td>Terry Richardson helvetica tousled street art master</td>
                                                    <td>$10.70</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Grown Ups Blue Ray</td>
                                                    <td>422-568-642</td>
                                                    <td>Tousled lomo letterpress</td>
                                                    <td>$25.99</td>
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
                                        <img src="../../dist/img/credit/visa.png" alt="Visa" />
                                        <img src="../../dist/img/credit/mastercard.png" alt="Mastercard" />
                                        <img src="../../dist/img/credit/american-express.png" alt="American Express" />
                                        <img src="../../dist/img/credit/paypal2.png" alt="Paypal" />
                                        <p className="text-muted well well-sm no-shadow" style={{marginTop: 10}}>
                                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg
                                            dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                                        </p>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-xs-6">
                                            <p className="lead">Amount Due 2/22/2014</p>
                                            <div className="table-responsive">
                                                <table className="table">
                                                <tbody><tr>
                                                    <th style={{width: '50%'}}>Subtotal:</th>
                                                    <td>$250.30</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Tax (9.3%)</th>
                                                    <td>$10.34</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Shipping:</th>
                                                    <td>$5.80</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Total:</th>
                                                    <td>$265.24</td>
                                                    </tr>
                                                </tbody></table>
                                            </div>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                    {/* this row will not appear when printing */}
                                    <div className="row no-print">
                                        <div className="col-xs-12">
                                            <button type="button" className="btn btn-success pull-right"><i className="fa fa-credit-card" /> Confirm Payment
                                            </button>
                                            <button type="button" className="btn btn-primary btn-flat pull-right" style={{marginRight: 5}}>
                                                <i className="fa fa-print" /> Print Invoice
                                            </button>
                                        </div>
                                    </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
          </div>
          <Footers />
      </div>
    )
  }
}
export default Invoices;