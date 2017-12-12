import React,{Component} from 'react';
import {render} from 'react-dom';
import Login from '../controller/login.js';

export default class Home extends Component{
  constructor(props){
    super(props);

    this.submitLogin = this.submitLogin.bind(this);
  }
  componentDidMount(){

  }
  submitLogin() {
    let loginObj = {username:this.refs.username.value,password:this.refs.password.value}
    if(Login.isValid(loginObj)){
      console.log('valid login');
    }
  }
  render(){
    return(
      <div>
        <input type="text" ref="username"/>
        <input type="password" ref="password"/>
        <button onClick={this.submitLogin}>Enter</button>
      </div>
    )
  }
};
