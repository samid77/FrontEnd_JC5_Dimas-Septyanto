import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Navbar from './Navbar'
import Footers from './Footers'
import photo from './pics/DEWALT_001.jpg'
import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class DetailProduct extends Component {
  state = {
      quantity: 1,
      detailData: [],
      productImage: [],
      fullname: '',
      username:'',
      userphoto: '',
      userID: '',
      isLoggedin: false,
      loginbutton: <li><Link to="/signin"><i className="fa fa-user"></i> Login / Register</Link></li>,
      profileArea: false,
      redirectCart: false,
      redirectLogin: false,
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
    var productID = this.props.location.state.productID;
    axios.get('http://localhost:8005/productDetail/'+productID).then((getData) => {
        console.log(getData.data);
        this.setState({
            detailData: getData.data,
            productImage: getData.data
        });
    })
  }
  Quantity = (e) => {
      this.setState({
          quantity: e.target.value
      });
  }
  increment = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
  }
  decrement = () => {
    this.setState({
        quantity: this.state.quantity - 1
    })
    if(this.state.quantity < 2){
        this.setState({
            quantity: 1
        });
    }
  }
  addToCart = (order) => {
    const cookie = new Cookies();
    var userID = cookie.get('userSession');

    if(userID !== undefined){
        axios.post('http://localhost:8005/cart', {
            userID: userID,
            num: order.quantity.value,
            idproduct: order.idproduct.value,
            productname: order.productname.value,
            productprice: order.productprice.value,
            productcode: order.productcode.value,
            productimage: order.productimage.value,
        }).then((response) => {
            var storestat = response.data;
            if(storestat === 1){
                this.setState({
                    redirectCart: true
                });
            }
        })
    } else {
        this.setState({
            redirectLogin: true
        });
    }

  }
  render() {
    if(this.state.redirectCart){
        return <Redirect to="/cart"/>
    }
    if(this.state.redirectLogin){
        return <Redirect to="/signin"/>
    }
    const productDetail = this.state.detailData.map((isi, index) => {
        var urutan = index + 1;
        var idproduct = isi.id;
        var productcode = isi.product_code;
        var nama = isi.product_name;
        var harga = isi.price;
        var gambar = isi.fotoproduk_1;
        var deskripsi = isi.description;
        return <div className="box-body">
            <h2>{nama}</h2>
            <h3><b>Rp.{harga}</b></h3>
            <div className="input-group" style={{width: '150px', marginTop: '30px'}}>
                <span className="input-group-btn">
                    <button type="button" onClick={() => this.decrement()} className="btn btn-flat btn-default btn-number">
                    <span className="glyphicon glyphicon-minus" />
                    </button>
                </span>
                <input type="text" ref="quantity" className="form-control input-number" value={this.state.quantity} style={{textAlign: 'center'}}/>
                <input className="text-center styleproddet" ref="idproduct" type="hidden" value={idproduct}/>
                <input className="text-center styleproddet" ref="productcode" type="hidden" value={productcode}/>
                <input className="text-center styleproddet" ref="productname" type="hidden" value={nama}/>
                <input className="text-center styleproddet" ref="productimage" type="hidden" value={gambar}/>
                <input className="text-center styleproddet" ref="productprice" type="hidden" value={harga}/>
                <span className="input-group-btn">
                    <button type="button" onClick={() => this.increment()} className="btn btn-flat btn-default btn-number">
                    <span className="glyphicon glyphicon-plus" />
                    </button>
                </span>
            </div>
            <div style={{marginTop: '20px'}}>
                <button onClick={()=>this.addToCart(this.refs)} className="btn-lg btn-success btn-block btn-flat"><i className="fa fa-shopping-cart"></i> Add to cart</button>
            </div>
            <div style={{marginTop: '20px'}}>
                <dl>
                    <dt><h3><b>Description lists</b></h3></dt>
                    <dd><h4>{deskripsi}</h4></dd>
                    <dt><h3><b>Specification</b></h3></dt>
                    <dd><h4>A description list is perfect for defining terms. A description list is perfect for defining terms. A description list is perfect for defining terms</h4></dd>
                    
                </dl>
            </div>
        </div>
    })
    const productImage = this.state.productImage.map((isi, index) => {
        var fotoproduk = isi.fotoproduk_1;
        return <img className="img-responsive pad" src={'http://localhost:8005/pics/'+fotoproduk} alt="Photo" />
    })
    return (
      <div>
        <Navbar loginbutton={this.state.loginbutton} fullname={this.state.fullname} userphoto={this.state.userphoto} profile={this.props.profileArea} />
        <div className="content-wrapper">
            <div className="container">
                <section className="content-header">
                    <ol className="breadcrumb" style={{fontSize: '15px', fontWeight:'bold', marginRight: '30px'}}>
                        <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                        <li className="active">Product Detail</li>
                    </ol>
                </section>
                <section className="content" style={{minHeight: '800px', marginTop: '35px'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box box-widget">
                                <div className="box-body">
                                    {productImage}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box box-widget">
                                {productDetail}
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
export default DetailProduct;