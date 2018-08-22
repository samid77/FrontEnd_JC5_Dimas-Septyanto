import React, { Component } from 'react';
import Navbar from './Navbar';
import Footers from './Footers';

export default class SearchResults extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content-wrapper">
            <div className="container">
                <section className="content">
                    <h2><b>Search Results</b></h2>
                </section>
            </div>
        </div>
        <Footers />
      </div>
    )
  }
}
