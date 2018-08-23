import React, { Component } from 'react';
import Navbar from './Navbar';
import Footers from './Footers';
import {Link} from 'react-router-dom';
import photo from './pics/DEWALT_001.jpg'

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content-wrapper">
          <div className="container">
            <section className="content-header">
                <ol className="breadcrumb" style={{fontSize: '15px', fontWeight:'bold', marginRight: '30px'}}>
                    <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                    <li><Link to="/detailproduct">Product Detail</Link></li>
                    <li className="active">Cart Detail</li>
                </ol>
            </section>
            <div className="row">
              <div className="col-md-12">
                <div className="box box-widget">
                  <div className="box-body">
                    <section className="content" style={{marginTop: '35px', minHeight: '600px'}}>
                        <table id="cart" className="table table-hover table-condensed" style={{verticalAlign: 'middle', fontSize: '17px'}}>
                        <thead style={{fontSize:'19px'}}>
                          <tr>
                            <th style={{width: '50%'}}>Product</th>
                            <th style={{width: '10%'}}>Price</th>
                            <th style={{width: '8%'}}>Quantity</th>
                            <th style={{width: '22%'}} className="text-center">Subtotal</th>
                            <th style={{width: '10%'}}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{padding: '10px', borderTop: '2px solid green'}}>
                            <td data-th="Product">
                              <div className="row">
                                <div className="col-sm-2 hidden-xs">
                                  <img src={photo} alt="..." className="img-responsive" />
                                </div>
                                <div className="col-sm-10">
                                  <h4>DEWALT DW745 10-Inch Compact Job-Site Table Saw with 20-Inch Max Rip Capacity - 120V</h4>
                                </div>
                              </div>
                            </td>
                            <td data-th="Price">Rp.545.000,00</td>
                            <td data-th="Quantity">
                              <input type="number" className="form-control text-center" defaultValue={1} />
                            </td>
                            <td data-th="Subtotal" className="text-center">Rp.545.000,00</td>
                            <td className="actions" data-th>
                              <button className="btn btn-danger btn-flat btn-md"><i className="fa fa-remove" /></button>								
                            </td>
                          </tr>
                          <tr style={{padding: '10px', borderTop: '2px solid green'}}>
                            <td data-th="Product">
                              <div className="row">
                                <div className="col-sm-2 hidden-xs"><img src={photo} alt="..." className="img-responsive" /></div>
                                <div className="col-sm-10">
                                  <h4>DEWALT DW745 10-Inch Compact Job-Site Table Saw with 20-Inch Max Rip Capacity - 120V</h4>
                                </div>
                              </div>
                            </td>
                            <td data-th="Price">Rp.545.000,00</td>
                            <td data-th="Quantity">
                              <input type="number" className="form-control text-center" defaultValue={1} />
                            </td>
                            <td data-th="Subtotal" className="text-center">Rp.545.000,00</td>
                            <td className="actions" data-th>
                              <button className="btn btn-danger btn-flat btn-md"><i className="fa fa-remove" /></button>								
                            </td>
                          </tr>
                          <tr style={{padding: '10px', borderTop: '2px solid green'}}>
                            <td data-th="Product">
                              <div className="row">
                                <div className="col-sm-2 hidden-xs"><img src={photo} alt="..." className="img-responsive" /></div>
                                <div className="col-sm-10">
                                  <h4>DEWALT DW745 10-Inch Compact Job-Site Table Saw with 20-Inch Max Rip Capacity - 120V</h4>
                                </div>
                              </div>
                            </td>
                            <td data-th="Price">Rp.545.000,00</td>
                            <td data-th="Quantity">
                              <input type="number" className="form-control text-center" defaultValue={1} />
                            </td>
                            <td data-th="Subtotal" className="text-center">Rp.545.000,00</td>
                            <td className="actions" data-th>
                              <button className="btn btn-danger btn-flat btn-md"><i className="fa fa-remove" /></button>								
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="visible-xs">
                            <td className="text-center"><strong>Total 1.99</strong></td>
                          </tr>
                          <tr>
                            <td><Link to="/productlist" className="btn btn-flat btn-lg btn-warning"><i className="fa fa-chevron-circle-left" />&nbsp;&nbsp;Continue Shopping</Link></td>
                            <td colSpan={2} className="hidden-xs" />
                            <td className="hidden-xs text-center"><strong>Total: Rp.1.500.000,00</strong></td>
                            <td><Link to="/checkout" className="btn btn-flat btn-lg btn-success btn-block">Checkout&nbsp;&nbsp;<i className="fa fa-chevron-circle-right" /></Link></td>
                          </tr>
                        </tfoot>
                      </table>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footers />
      </div>
    )
  }
}
export default ShoppingCart