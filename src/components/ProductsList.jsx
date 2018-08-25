import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Footers from './Footers';
import photo from './pics/DEWALT_001.jpg';
import photo2 from './pics/DEWALT_002.jpg';
import photo3 from './pics/DEWALT_003.jpg';
import photo4 from './pics/DEWALT_004.jpg';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class ProductList extends Component {
  state = {
    fullname: '',
    username:'',
    userphoto: '',
    userID: '',
    isLoggedin: false,
    loginbutton: <li><Link to="/signin"><i className="fa fa-user"></i> Login / Register</Link></li>,
    profileArea: false,
    productList: [],
    categoryList: [],
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
                userphoto: response.data[0].user_image,
                profileArea: true,
            })
        })
        axios.get('http://localhost:8005/listbycat').then((getData) => {
            this.setState({
                productList: getData.data,
            });
        });
        axios.get('http://localhost:8005/getCategory').then((getData) => {
            this.setState({
                categoryList: getData.data
            });
        })
    }
  }
  render() {
    const categoryList = this.state.categoryList.map((isi, index) => {
        var urutan = index + 1;
        var catID = isi.subcatid;
        var subCatName = isi.subcategory_name;
        var categoryName = isi.category_name;
        return <li key={urutan}>
            <a href="#">
            <i className="fa fa-gift" /> {subCatName}
            <span className="label label-primary pull-right">12</span>
            </a>
        </li>
    })
    const productList = this.state.productList.map((isi, index) => {
        var urutan = index + 1;
        var productID = isi.id;
        var nama = isi.product_name;
        var harga = isi.price;
        var fotoproduk = isi.fotoproduk_1;
        return <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div className="col-item" style={{paddingBottom: '20px'}}>
            <div className="photo">
                <img src={'http://localhost:8005/pics/'+fotoproduk} className="img-responsive" alt />
            </div>
            <div className="info">
                <div className="row">
                    <div className="produk text-center" style={{textAlign: 'center'}}>
                        <span>{nama}</span>
                        <p className="hargaproduk">Rp.{harga}</p>
                    </div>
                </div>
                <div className="al-btn text-center">
                    <Link to={{pathname: '/detailproduct/'+productID, state:{productID: productID}}}>Buy Product</Link>
                </div>
            </div>
        </div>
    </div>
    });
    return (
      <div>
        <Navbar loginbutton={this.state.loginbutton} fullname={this.state.fullname} userphoto={this.state.userphoto} profile={this.props.profileArea}/>
        <div className="content-wrapper">
            <section className="content-header">
                <ol className="breadcrumb" style={{fontSize: '15px', fontWeight:'bold', marginRight: '30px'}}>
                    <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                    <li className="active">Product List</li>
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
                                        {categoryList}
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
                            <h3 className="headingMenu"><i className="fa fa-chevron-circle-right" /> Product List</h3>
                            <hr style={{border: '1px solid rgb(42, 78, 133)'}} />
                            <div id="carousel-example" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row">
                                        {productList}
                                    </div> {/** row */}

                                {/* <div className="row">
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
                                </div> */}

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
export default ProductList;
