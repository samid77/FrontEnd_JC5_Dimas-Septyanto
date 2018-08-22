// Detail.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class Detail extends Component {
    render(){
        return(
            <div>
              <Navbar />
              <div className="content-wrapper">
                <div className="container">
                  <div className="col-md-12" style={{marginTop: 30}}>
                    <div className="preview col-md-6">
                      <div className="preview-pic tab-content">
                        <div className="tab-pane active" id="pic-1">
                          <img src="http://placehold.it/350x260" />
                        </div>
                        <div className="tab-pane" id="pic-2">
                          <img src="http://placehold.it/350x260" />
                        </div>
                        <div className="tab-pane" id="pic-3">
                          <img src="http://placehold.it/350x260" />
                        </div>
                        <div className="tab-pane" id="pic-4">
                          <img src="http://placehold.it/350x260" />
                        </div>
                        <div className="tab-pane" id="pic-5">
                          <img src="http://placehold.it/350x260" />
                        </div>
                      </div>
                      <ul className="preview-thumbnail nav nav-tabs">
                        <li className="active">
                          <a data-target="#pic-1" data-toggle="tab">
                            <img src="http://placehold.it/350x260" />
                          </a>
                        </li>
                        <li>
                          <a data-target="#pic-2" data-toggle="tab">
                            <img src="http://placehold.it/350x260" />
                          </a>
                        </li>
                        <li>
                          <a data-target="#pic-3" data-toggle="tab">
                            <img src="http://placehold.it/350x260" />
                          </a>
                        </li>
                        <li>
                          <a data-target="#pic-4" data-toggle="tab">
                            <img src="http://placehold.it/350x260" />
                          </a>
                        </li>
                        <li>
                          <a data-target="#pic-5" data-toggle="tab">
                            <img src="http://placehold.it/350x260" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="details col-md-6">
                      <h3 className="product-title">Nama Produk</h3>
                      <div className="rating">
                        <div className="stars">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="review-no">41 reviews</span>
                      </div>
                      <p className="product-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ut porro vitae eligendi laborum inventore autem. Pariatur nobis debitis eaque mollitia, exercitationem harum saepe reiciendis nulla aut eum iure iste?
                        sociosqu delectus posuere.</p>
                      <h4 className="price">Harga:
                        <span>Rp.150,000,00</span>
                      </h4>
                      <p className="vote">
                        <strong>91%</strong> of buyers enjoyed this product!
                        <strong>(87 votes)</strong>
                      </p>
                      <h5 className="sizes">sizes:
                        <span className="size" data-toggle="tooltip" title="small">s</span>
                        <span className="size" data-toggle="tooltip" title="medium">m</span>
                        <span className="size" data-toggle="tooltip" title="large">l</span>
                        <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                      </h5>
                      <h5 className="colors">Warna:
                        <span className="color orange not-available" data-toggle="tooltip" title="Not In store" />
                        <span className="color green" />
                        <span className="color blue" />
                      </h5>
                      <h5 className="sizes">Jumlah:
                        <input className="form-control" style={{width: 50}} type="text" />
                      </h5>
                      <div className="action">
                        <button className="add-to-cart btn btn-default btn-flat" type="button">Tambah ke Cart</button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10" style={{marginTop: 30}}>
                      <div className="nav-tabs-custom">
                        <ul className="nav nav-tabs">
                          <li className="active">
                            <a href="#tab_1" data-toggle="tab">Tab 1</a>
                          </li>
                          <li>
                            <a href="#tab_2" data-toggle="tab">Tab 2</a>
                          </li>
                          <li>
                            <a href="#tab_3" data-toggle="tab">Tab 3</a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab_1">
                            <b>How to use:</b>
                            <p>Exactly like the original bootstrap tabs except you should use the custom wrapper
                              <code>.nav-tabs-custom</code> to achieve this style.</p>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole
                            heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                            I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
                            I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater
                            artist than now.
                          </div>
                          {/* /.tab-pane */}
                          <div className="tab-pane" id="tab_2">
                            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,
                            Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common
                            words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
                            To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages
                            coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
                          </div>
                          {/* /.tab-pane */}
                          <div className="tab-pane" id="tab_3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </div>
                          {/* /.tab-pane */}
                        </div>
                        {/* /.tab-content */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
export default Detail;