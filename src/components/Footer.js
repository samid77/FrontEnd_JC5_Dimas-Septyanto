//Footer.js
import React, {Component} from 'react';

export default class Footer extends Component {
  render(){
    return(
      <footer className="main-footer" id="footER">
      <div className="container">
        <div className="pull-right hidden-xs whiteColor">
          <b>Version</b> 1.0
        </div>
        <p className="whiteColor">Copyright &copy; 2018
          <a className="whiteColor" href="https://adminlte.io">&mdash;Samid77</a>.
        </p>
      </div>
    </footer>
    )
  }
}