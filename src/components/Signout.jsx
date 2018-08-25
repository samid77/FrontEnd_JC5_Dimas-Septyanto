import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom';
const cookies = new Cookies();

class Signout extends Component {
  render() {
    cookies.remove('userSession');
    if(cookies.get('userSession') === undefined){
        return <Redirect to="/signin"/>
    }
    return (
      <div>
        
      </div>
    )
  }
}
export default Signout;
