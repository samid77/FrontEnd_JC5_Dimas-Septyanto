// Content.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MasterCard from './mastercard.png';
import Visa from './visa.png';
import Doku from './doku.png';
import Gopay from './gopay.jpg';

class Content extends Component {
    render(){
        return (
        <div>
            <Header />
            <div className="content-wrapper">
                <div className="container">
                    <section className="content">
                        <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                            <h3 className="headingMenu"><i className="fa fa-chevron-circle-right"></i> Kategori</h3>
                            <hr className="garisHR" />
                            <div className="text-center">

                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a href="#" style={{textDecoration:'none'}}>Tools</a>
                                        </div>
                                        <a href="#">
                                            <div className="frontLogo kategori8">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a href="#" style={{textDecoration:'none'}}>Safety & Security</a>
                                        </div>
                                        <a href="#">
                                            <div className="frontLogo kategori1">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a href="#" style={{textDecoration:'none'}}>Smarthome</a>
                                        </div>
                                        <a href="#">
                                            <div className="frontLogo kategori2">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a href="#" style={{textDecoration:'none'}}>Applicances</a>
                                        </div>
                                        <a href="#">
                                            <div className="frontLogo kategori3">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a href="#" style={{textDecoration:'none'}}>Lighting</a>
                                        </div>
                                        <a href="#">
                                            <div className="frontLogo kategori4">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a href="#" style={{textDecoration:'none'}}>Kitchen</a>
                                        </div>
                                        <a href="#">
                                            <div className="frontLogo kategori5">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a href="#" style={{textDecoration:'none'}}>Electrical</a>
                                        </div>
                                        <a href="#">
                                            <div className="frontLogo kategori6">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a href="#" style={{textDecoration:'none'}}>Wall Treatments</a>
                                        </div>
                                        <a href="#">
                                            <div className="frontLogo kategori7">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
                    <section className="content"></section>
                    <section className="content">
                        <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                            <div className="row">
                            <div className="col-md-7 col-sm-6 col-xs-6">
                                <h3 className="headingMenu">
                                <i className="fa fa-chevron-circle-right"></i> Discount Products</h3>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="controls pull-right">
                                <a className="left fa fa-chevron-left btn btn-flat btn-sm btn-primary" href="#carousel-example2" data-slide="prev"></a>
                                <a className="right fa fa-chevron-right btn btn-primary btn-flat btn-sm" href="#carousel-example2" data-slide="next"></a>
                                </div>
                            </div>
                            </div>
                            <hr className="garisHR"/>
                            <div id="carousel-example2" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <a href="detail.html">
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
                                            </a>
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
                    <section className="content"></section>
                </div>            
            </div>
            <section className="contact" style={{paddingTop: '10px', paddingBottom: '20px'}}>
                <div className="container">
                    <div className="col-md-3">
                        <h3>About Us</h3>
                        <hr style={{border: '1px solid white', marginTop: '-5px'}}/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                        <hr style={{border: '1px solid white', marginTop: '-5px'}}/>
                        <address>
                            <ul className="list-unstyled">
                                <li>Menara SunLife
                                <br/> Jakarta, JKT 222222</li>
                                <li>Phone: (1800) 765 - 4321</li>
                                <li>Email: email@yourdomain.com</li>
                            </ul>
                        </address>
                    </div>
                    <div className="col-md-3">
                        <h3>Social Media</h3>
                        <hr style={{border: '1px solid white', marginTop: '-5px'}}/>
                        <ul className="list-inline social-icons" style={{marginTop: '30px'}}>
                            <li>
                                <a href="#" className="facebook-bg">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter-bg">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="googleplus-bg">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="rss-bg">
                                    <i className="fa fa-rss"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Payment Method</h3>
                        <hr style={{border: '1px solid white', marginTop: '-5px'}}/>
                        <ul className="list-inline social-icons" style={{marginTop: '30px'}}>
                            <li>
                                <a href="#">
                                    <img src={MasterCard} width="50" height="50"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={Visa} width="50" height="50"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="googleplus-bg">
                                    <img src={Doku} width="50" height="50"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="rss-bg">
                                    <img src={Gopay} width="90" height="50"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        );
    }
}
export default Content;