import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footers from './Footers';
import photo from './pics/DEWALT_001.jpg';
import photo2 from './pics/DEWALT_002.jpg';
import photo3 from './pics/DEWALT_003.jpg';
import photo4 from './pics/DEWALT_004.jpg';

class DiscountList extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content-wrapper">
            <section className="content-header">
                <ol className="breadcrumb" style={{fontSize: '15px', fontWeight: 'bold', marginRight: '30px'}}>
                    <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                    <li className="active">Discount Products</li>
                </ol>
            </section>
            <div className="container">
                <section className="content" style={{minHeight: '850px'}}>
                    <div className="row">
                        <div className="col-md-3" style={{marginTop: 20}}>
                            <div className="box box-solid">
                                <div className="box-header with-border" style={{backgroundColor: '#448f4a', color: '#fff'}}>
                                    <h3 className="box-title">Product Category</h3>
                                </div>
                                <div className="box-body no-padding">
                                    <ul className="nav nav-pills nav-stacked">
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-gift" /> Kategori 1
                                        <span className="label label-primary pull-right">12</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-gift" /> Kategori 2</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-gift" /> Kategori 3</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-gift" /> Kategori 4
                                        <span className="label label-warning pull-right">65</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-gift" /> Kategori 5</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-gift" /> Kategori 6</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-gift" /> Kategori 7</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-gift" /> Kategori 8</a>
                                    </li>
                                    </ul>
                                </div>
                                {/* /.box-body */}
                            </div>
                            <div className="box box-solid">
                                <div className="box-header with-border" style={{backgroundColor: '#448f4a', color: '#fff'}}>
                                    <h3 className="box-title">Sort By</h3>
                                </div>
                                <div className="box-body">
                                    <div class="form-group">
                                        <select className="form-control">
                                            <option>Newest</option>
                                            <option>Best Deal</option>
                                            <option>Price Low to High</option>
                                            <option>Price High to Low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h3 className="headingMenu"><i className="fa fa-chevron-circle-right" /> Discount Product List</h3>
                            <hr style={{border: '1px solid rgb(42, 78, 133)'}} />
                            <div id="carousel-example" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">

                                <div className="row">

                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="col-item" style={{paddingBottom: '20px'}}>
                                            <div className="photo">
                                                <img src={photo3} className="img-responsive" alt />
                                            </div>
                                            <div className="info">
                                                <div className="row">
                                                    <div className="produk text-center" style={{textAlign: 'center'}}>
                                                        <span>Product Name</span>
                                                        <p className="hargaproduk">Rp.125,000</p>
                                                    </div>
                                                </div>
                                                <div className="al-btn text-center">
                                                    <Link to="/detailproduct">Buy Product</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="col-item" style={{paddingBottom: '20px'}}>
                                            <div className="photo">
                                                <img src={photo3} className="img-responsive" alt />
                                            </div>
                                            <div className="info">
                                                <div className="row">
                                                    <div className="produk text-center" style={{textAlign: 'center'}}>
                                                        <span>Product Name</span>
                                                        <p className="hargaproduk">Rp.125,000</p>
                                                    </div>
                                                </div>
                                                <div className="al-btn text-center">
                                                    <Link to="/detailproduct">Buy Product</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="col-item" style={{paddingBottom: '20px'}}>
                                            <div className="photo">
                                                <img src={photo2} className="img-responsive" alt />
                                            </div>
                                            <div className="info">
                                                <div className="row">
                                                    <div className="produk text-center" style={{textAlign: 'center'}}>
                                                        <span>Product Name</span>
                                                        <p className="hargaproduk">Rp.125,000</p>
                                                    </div>
                                                </div>
                                                <div className="al-btn text-center">
                                                    <Link to="/detailproduct">Buy Product</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="col-item" style={{paddingBottom: '20px'}}>
                                            <div className="photo">
                                                <img src={photo} className="img-responsive" alt />
                                            </div>
                                            <div className="info">
                                                <div className="row">
                                                    <div className="produk text-center" style={{textAlign: 'center'}}>
                                                        <span>Product Name</span>
                                                        <p className="hargaproduk">Rp.125,000</p>
                                                    </div>
                                                </div>
                                                <div className="al-btn text-center">
                                                    <Link to="/detailproduct">Buy Product</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div> {/** row */}
                                <div className="row">

                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="col-item" style={{paddingBottom: '20px'}}>
                                            <div className="photo">
                                                <img src={photo3} className="img-responsive" alt />
                                            </div>
                                            <div className="info">
                                                <div className="row">
                                                    <div className="produk text-center" style={{textAlign: 'center'}}>
                                                        <span>Product Name</span>
                                                        <p className="hargaproduk">Rp.125,000</p>
                                                    </div>
                                                </div>
                                                <div className="al-btn text-center">
                                                    <Link to="/detailproduct">Buy Product</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="col-item" style={{paddingBottom: '20px'}}>
                                            <div className="photo">
                                                <img src={photo3} className="img-responsive" alt />
                                            </div>
                                            <div className="info">
                                                <div className="row">
                                                    <div className="produk text-center" style={{textAlign: 'center'}}>
                                                        <span>Product Name</span>
                                                        <p className="hargaproduk">Rp.125,000</p>
                                                    </div>
                                                </div>
                                                <div className="al-btn text-center">
                                                    <Link to="/detailproduct">Buy Product</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="col-item" style={{paddingBottom: '20px'}}>
                                            <div className="photo">
                                                <img src={photo2} className="img-responsive" alt />
                                            </div>
                                            <div className="info">
                                                <div className="row">
                                                    <div className="produk text-center" style={{textAlign: 'center'}}>
                                                        <span>Product Name</span>
                                                        <p className="hargaproduk">Rp.125,000</p>
                                                    </div>
                                                </div>
                                                <div className="al-btn text-center">
                                                    <Link to="/detailproduct">Buy Product</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="col-item" style={{paddingBottom: '20px'}}>
                                            <div className="photo">
                                                <img src={photo} className="img-responsive" alt />
                                            </div>
                                            <div className="info">
                                                <div className="row">
                                                    <div className="produk text-center" style={{textAlign: 'center'}}>
                                                        <span>Product Name</span>
                                                        <p className="hargaproduk">Rp.125,000</p>
                                                    </div>
                                                </div>
                                                <div className="al-btn text-center">
                                                    <Link to="/detailproduct">Buy Product</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/** row */}
                            </div>
                            </div>
                        </div>

                        {/** Pagination */}
                        <div>
                            <ul className="pagination pagination-lg pull-right">
                            <li><a href="#">«</a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">»</a></li>
                            </ul>
                        </div>
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
export default DiscountList;
