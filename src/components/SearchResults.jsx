import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footers from './Footers';

class SearchResults extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content-wrapper">
            <div className="container">
                <section className="content">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                        <div className="row">
                        <div className="col-md-7 col-sm-6 col-xs-6">
                            <h3 className="headingMenu">
                            <i className="fa fa-chevron-circle-right"></i> Featured Products</h3>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="controls pull-right">
                            <a className="left fa fa-chevron-left btn btn-flat btn-sm btn-primary" href="#carousel-example" data-slide="prev"></a>
                            <a className="right fa fa-chevron-right btn btn-primary btn-flat btn-sm" href="#carousel-example" data-slide="next"></a>
                            </div>
                        </div>
                        </div>
                        <hr className="garisHR"/>
                        <div id="carousel-example" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row">
                                        <div className="col-sm-3">
                                        <Link to="/detail">
                                            <div className="col-item">
                                            <div className="photo">
                                                <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                            </div>
                                            <div className="info">
                                                <div className="row">
                                                <div className="price col-md-12">
                                                    <h5>
                                                    Sample Product</h5>
                                                    <h5 className="price-text-color">
                                                    Rp.300k</h5>
                                                </div>
                                                <div className="rating">
                                                    <i className="price-text-color fa fa-star"></i>
                                                    <i className="price-text-color fa fa-star"></i>
                                                    <i className="price-text-color fa fa-star"></i>
                                                    <i className="price-text-color fa fa-star"></i>
                                                    <i className="price-text-color fa fa-star"></i>
                                                </div>
                                                </div>
                                                <div className="separator clear-left">
                                                <p className="btn-add">
                                                    <a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </p>
                                                <p className="btn-details">
                                                    <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                                    <i className="fa fa-get-pocket"></i>
                                                    </a>
                                                </p>
                                                </div>
                                                <div className="clearfix">
                                                </div>
                                            </div>
                                            </div>
                                        </Link>
                                        </div>
                                        <div className="col-sm-3">
                                        <div className="col-item">
                                            <div className="photo">
                                            <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                            </div>
                                            <div className="info">
                                            <div className="row">
                                                <div className="price col-md-12">
                                                <h5>
                                                    Product Example</h5>
                                                <h5 className="price-text-color">
                                                    Rp.250k</h5>
                                                </div>
                                                <div className="rating">
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="separator clear-left">
                                                <p className="btn-add">
                                                    <a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </p>
                                                <p className="btn-details">
                                                    <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                                    <i className="fa fa-get-pocket"></i>
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="clearfix">
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-3">
                                        <div className="col-item">
                                            <div className="photo">
                                            <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                            </div>
                                            <div className="info">
                                            <div className="row">
                                                <div className="price col-md-12">
                                                <h5>Next Product</h5>
                                                <h5 className="price-text-color">
                                                    Rp.800k</h5>
                                                </div>
                                                <div className="rating">
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="separator clear-left">
                                                <p className="btn-add">
                                                    <a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </p>
                                                <p className="btn-details">
                                                    <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                                    <i className="fa fa-get-pocket"></i>
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="clearfix">
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-3">
                                        <div className="col-item">
                                            <div className="photo">
                                            <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                            </div>
                                            <div className="info">
                                            <div className="row">
                                                <div className="price col-md-12">
                                                <h5>
                                                    Sample Product</h5>
                                                <h5 className="price-text-color">
                                                    Rp.240k</h5>
                                                </div>
                                                <div className="rating">
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="separator clear-left">
                                                <p className="btn-add">
                                                    <a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </p>
                                                <p className="btn-details">
                                                    <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                                    <i className="fa fa-get-pocket"></i>
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="clearfix">
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-3">
                                        <div className="col-item">
                                            <div className="photo">
                                            <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                            </div>
                                            <div className="info">
                                            <div className="row">
                                                <div className="price col-md-12">
                                                <h5>
                                                    Sample Product</h5>
                                                <h5 className="price-text-color">
                                                    Rp.300k</h5>
                                                </div>
                                                <div className="rating">
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="separator clear-left">
                                                <p className="btn-add">
                                                <a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                                </p>
                                                <p className="btn-details">
                                                <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                                    <i className="fa fa-get-pocket"></i>
                                                </a>
                                                </p>
                                            </div>
                                            <div className="clearfix">
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-3">
                                        <div className="col-item">
                                            <div className="photo">
                                            <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                            </div>
                                            <div className="info">
                                            <div className="row">
                                                <div className="price col-md-12">
                                                <h5>
                                                    Product Example</h5>
                                                <h5 className="price-text-color">
                                                    Rp.250k</h5>
                                                </div>
                                                <div className="rating">
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="separator clear-left">
                                                <p className="btn-add">
                                                <a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                                </p>
                                                <p className="btn-details">
                                                <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                                    <i className="fa fa-get-pocket"></i>
                                                </a>
                                                </p>
                                            </div>
                                            <div className="clearfix">
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-3">
                                        <div className="col-item">
                                            <div className="photo">
                                            <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                            </div>
                                            <div className="info">
                                            <div className="row">
                                                <div className="price col-md-12">
                                                <h5>Next Product</h5>
                                                <h5 className="price-text-color">
                                                    Rp.800k</h5>
                                                </div>
                                                <div className="rating">
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="separator clear-left">
                                                <p className="btn-add">
                                                <a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                                </p>
                                                <p className="btn-details">
                                                <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                                    <i className="fa fa-get-pocket"></i>
                                                </a>
                                                </p>
                                            </div>
                                            <div className="clearfix">
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-3">
                                        <div className="col-item">
                                            <div className="photo">
                                            <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                            </div>
                                            <div className="info">
                                            <div className="row">
                                                <div className="price col-md-12">
                                                <h5>
                                                    Sample Product</h5>
                                                <h5 className="price-text-color">
                                                    Rp.240k</h5>
                                                </div>
                                                <div className="rating">
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                <i className="price-text-color fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="separator clear-left">
                                                <p className="btn-add">
                                                <a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                                </p>
                                                <p className="btn-details">
                                                <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                                    <i className="fa fa-get-pocket"></i>
                                                </a>
                                                </p>
                                            </div>
                                            <div className="clearfix">
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br />
                    <Link to="/product" className="pull-left btn btn-warning btn-flat btn-md"><i className="fa fa-chevron-circle-right"></i> See All Products</Link>
                </div>
                </section>
            </div>
        </div>
        <Footers />
      </div>
    )
  }
}
export default SearchResults;