import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Footers from './Footers'
import photo from './pics/DEWALT_001.jpg'
import axios from 'axios'
const cookies = new Cookies();

class DetailProduct extends Component {
  state = {
      quantity: 0,
      detailData: [],
      productImage: [],
      fullname: '',
      username:'',
      userphoto: '',
      userID: '',
      isLoggedin: false,
      loginbutton: <li><Link to="/signin"><i className="fa fa-user"></i> Login / Register</Link></li>,
      profileArea: false,
  }
  increment = () => {
      this.setState({
          quantity: this.state.quantity + 1
      })
      console.log('incement')
      console.log(this.state.quantity)
  }
  decrement = () => {
    this.setState({
        quantity: this.state.quantity - 1
    })
    console.log('decrement')
    console.log(this.state.quantity)
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
  render() {
    const productDetail = this.state.detailData.map((isi, index) => {
        var urutan = index + 1;
        var nama = isi.product_name;
        var harga = isi.price;
        var deskripsi = isi.description;
        return <div className="box-body">
            <h2>{nama}</h2>
            <h3><b>Rp.{harga}</b></h3>
            <div className="input-group" style={{width: '150px', marginTop: '30px'}}>
                <span className="input-group-btn">
                    <button type="button" onClick={this.decrement} className="btn btn-flat btn-default btn-number">
                    <span className="glyphicon glyphicon-minus" />
                    </button>
                </span>
                <input type="text" className="form-control input-number" defaultValue={this.state.quantity} style={{textAlign: 'center'}}/>
                <span className="input-group-btn">
                    <button type="button" onClick={this.increment} className="btn btn-flat btn-default btn-number">
                    <span className="glyphicon glyphicon-plus" />
                    </button>
                </span>
            </div>
            <div style={{marginTop: '20px'}}>
                <Link to="/cart"><button className="btn-lg btn-success btn-block btn-flat"><i className="fa fa-shopping-cart"></i> Add to cart</button></Link>
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
                                    {/* <img className="img-responsive pad" src={photo} alt="Photo" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box box-widget">
                                {productDetail}
                                {/* <div className="box-body">
                                    <h2>DEWALT DW745 10-Inch Compact Job-Site Table Saw with 20-Inch Max Rip Capacity - 120V</h2>
                                    <h3><b>Rp.545.000,00</b></h3>
                                    <div className="input-group" style={{width: '150px', marginTop: '30px'}}>
                                        <span className="input-group-btn">
                                            <button type="button" onClick={this.decrement} className="btn btn-flat btn-default btn-number">
                                            <span className="glyphicon glyphicon-minus" />
                                            </button>
                                        </span>
                                        <input type="text" className="form-control input-number" defaultValue={this.state.quantity} style={{textAlign: 'center'}}/>
                                        <span className="input-group-btn">
                                            <button type="button" onClick={this.increment} className="btn btn-flat btn-default btn-number">
                                            <span className="glyphicon glyphicon-plus" />
                                            </button>
                                        </span>
                                    </div>
                                    <div style={{marginTop: '20px'}}>
                                        <Link to="/cart"><button className="btn-lg btn-success btn-block btn-flat"><i className="fa fa-shopping-cart"></i> Add to cart</button></Link>
                                    </div>
                                    <div style={{marginTop: '20px'}}>
                                        <dl>
                                            <dt><h3><b>Description lists</b></h3></dt>
                                            <dd><h4>A description list is perfect for defining terms. A description list is perfect for defining terms. A description list is perfect for defining terms</h4></dd>
                                            <dt><h3><b>Specification</b></h3></dt>
                                            <dd><h4>A description list is perfect for defining terms. A description list is perfect for defining terms. A description list is perfect for defining terms</h4></dd>
                                            
                                        </dl>
                                    </div>
                                </div> */}
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