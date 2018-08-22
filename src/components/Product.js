//Product List
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';


class Product extends Component {
    render(){
        return(
            <div>
              <Navbar />
              <div className="content-wrapper">
                  <div className="container">
                      <section className="content">
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
                        </div>
                        <div className="col-md-9">
                          <h3 className="headingMenu">
                            <i className="fa fa-chevron-circle-right" /> Product List</h3>
                          <hr style={{border: '1px solid rgb(42, 78, 133)'}} />
                          <div id="carousel-example" className="carousel slide" data-ride="carousel">
                            {/* Wrapper for slides */}
                            <div className="carousel-inner">
                              <div className="item active">
                                <div className="row">
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                    <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                    <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                    <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                    <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                                        <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                                        <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                                        <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                                        <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                                                            <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                                                            <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
                                            </a>
                                          </p>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-3" style={{marginTop: 10, marginBottom: 10}}>
                                    <a href="detail.html">
                                    </a><div className="col-item"><a href="detail.html">
                                        <div className="photo">
                                          <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                                        </div>
                                      </a><div className="info"><a href="detail.html">
                                          <div className="row">
                                            <div className="price col-md-12">
                                              <h5>
                                                Sample Product</h5>
                                              <h5 className="price-text-color">
                                                Rp.300k</h5>
                                            </div>
                                            <div className="rating">
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                              <i className="price-text-color fa fa-star" />
                                            </div>
                                          </div>
                                        </a><div className="separator clear-left"><a href="detail.html">
                                          </a><p className="btn-add"><a href="detail.html">
                                              {/* <i class="fa fa-shopping-cart"></i>
                                                                                                                                            <a href="cart.html" class="hidden-sm">Tambah Barang</a> */}
                                            </a><a title="Tambah ke keranjang" href="#" className="btn btn-sm btn-flat bg-maroon">
                                              <i className="fa fa-shopping-cart" />
                                            </a>
                                          </p>
                                          <p className="btn-details">
                                            <a href="#" className="btn btn-sm btn-flat bg-navy" title="Lihat Detail Produk">
                                              <i className="fa fa-get-pocket" />
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
                          </div>
                        </div>
                      </div>
                      </section>
                  </div>
              </div>
              
            </div>
        )
    }
}
export default Product;