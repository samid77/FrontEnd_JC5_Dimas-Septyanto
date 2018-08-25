// Content.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Navbar from './Navbar';
import Footers from './Footers';
import MasterCard from './pics/mastercard.png';
import Visa from './pics/visa.png';
import Doku from './pics/doku.png';
import Gopay from './pics/gopay.jpg';
import photo from './pics/DEWALT_001.jpg';
import photo2 from './pics/DEWALT_002.jpg';
import photo3 from './pics/DEWALT_003.jpg';
import axios from 'axios';
const cookies = new Cookies();

class Home extends Component {
    state = {
        alert: null,
        fullname: '',
        username:'',
        userphoto: '',
        userID: '',
        isLoggedin: false,
        loginbutton: <li><Link to="/signin"><i className="fa fa-user"></i> Login / Register</Link></li>,
        profileArea: false,
        featuredProduct: [],
        discountedProduct: []
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
        }
        axios.get('http://localhost:8005/featuredProduct').then((getData) => {
            this.setState({
                featuredProduct: getData.data,
                discountedProduct: getData.data
            });
        });
    }
    render(){    
        var productData = this.state.featuredProduct;
        console.log(productData);
        console.log(typeof(productData));
        var featuredOne = [];
        var featuredTwo = [];
        for(var i=0; i < productData.length; i++){
            if(i < 4){
                featuredOne.push(productData[i]);
            } else {
                featuredTwo.push(productData[i]);
                console.log(featuredTwo);
            }
        }
        const featuredProductOne = featuredOne.map((isi, index) => {
            var id = index + 1;
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
        const featuredProductTwo = featuredTwo.map((isi, index) => {
            var id = index + 1;
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
                            <p className="hargaproduk">{harga}</p>
                        </div>
                    </div>
                    <div className="al-btn text-center">
                        <Link to="/detailproduct">Buy Product</Link>
                    </div>
                </div>
            </div>
        </div>
        });
        var discountData = this.state.discountProduct;
        console.log(productData);
        console.log(typeof(productData));
        var discountOne = [];
        var discountTwo = [];
        for(var i=0; i < productData.length; i++){
            if(i < 4){
                discountOne.push(productData[i]);
            } else {
                discountTwo.push(productData[i]);
                console.log(discountTwo);
            }
        }
        const discountProductOne = discountOne.map((isi, index) => {
            var id = index + 1;
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
                        <Link to="/detailproduct">Buy Product</Link>
                    </div>
                </div>
            </div>
        </div>
        });
        const discountProductTwo = discountTwo.map((isi, index) => {
            var id = index + 1;
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
                            <p className="hargaproduk">{harga}</p>
                        </div>
                    </div>
                    <div className="al-btn text-center">
                        <Link to="/detailproduct">Buy Product</Link>
                    </div>
                </div>
            </div>
        </div>
        });
        return (
        <div>
            <Navbar loginbutton={this.state.loginbutton} fullname={this.state.fullname} userphoto={this.state.userphoto} profile={this.props.profileArea} />
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
                                            <a style={{textDecoration:'none'}}>Tools</a>
                                        </div>
                                        <a>
                                            <div className="frontLogo kategori8">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a style={{textDecoration:'none'}}>Safety & Security</a>
                                        </div>
                                        <a>
                                            <div className="frontLogo kategori1">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a style={{textDecoration:'none'}}>Smarthome</a>
                                        </div>
                                        <a>
                                            <div className="frontLogo kategori2">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a style={{textDecoration:'none'}}>Applicances</a>
                                        </div>
                                        <a>
                                            <div className="frontLogo kategori3">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a style={{textDecoration:'none'}}>Lighting</a>
                                        </div>
                                        <a>
                                            <div className="frontLogo kategori4">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a style={{textDecoration:'none'}}>Kitchen</a>
                                        </div>
                                        <a>
                                            <div className="frontLogo kategori5">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a style={{textDecoration:'none'}}>Electrical</a>
                                        </div>
                                        <a>
                                            <div className="frontLogo kategori6">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover panel">
                                    <div className="front">
                                        <div className="frontTitle">
                                            <a style={{textDecoration:'none'}}>Wall Treatments</a>
                                        </div>
                                        <a>
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
                            <hr className="garisHR" />
                                <div className="tab-content">
                                    <div id="menu" className="tab-pane fade active in">
                                        <div id="carousel-example" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="item active">
                                                    <div className="row">
                                                        {featuredProductOne}
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="row">
                                                        {featuredProductTwo}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  {/* tab1 */}
                                </div>   {/* tab-content */}
                            <Link to="/productlist" style={{marginTop: '10px'}} className="pull-left btn btn-warning btn-flat btn-md"><i className="fa fa-chevron-circle-right"></i> See All Products</Link>
                        </div>
                    </section>
                    <section className="content">
                        <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12" style={{marginBottom: '50px', marginTop: '20px'}}>
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
                                        <div classNam="row">
                                            {discountProductOne}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="row">
                                            {discountProductTwo}
                                        </div>
                                    </div>
                                </div>
                            </div><br />
                            <Link to="/discountlist" className="pull-left btn btn-warning btn-flat btn-md"><i className="fa fa-chevron-circle-right"></i> See All Products</Link>
                        </div>
                    </section>
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
                                <a className="facebook-bg">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a className="twitter-bg">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a className="googleplus-bg">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li>
                                <a className="rss-bg">
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
                                <a>
                                    <img src={MasterCard} width="50" height="50"/>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={Visa} width="50" height="50"/>
                                </a>
                            </li>
                            <li>
                                <a className="googleplus-bg">
                                    <img src={Doku} width="50" height="50"/>
                                </a>
                            </li>
                            <li>
                                <a className="rss-bg">
                                    <img src={Gopay} width="90" height="50"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
         <Footers />
        </div>
        );
    }
}
export default Home;