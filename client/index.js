if (process.env.NODE_ENV !== 'production') {console.log('DEVELOPMENT MODE');}
import React,{Component} from 'react';
import {render} from 'react-dom';
import Home from './src/view/home.js';
import io from 'socket.io-client';
var socket = io('http://localhost:3000');

socket.on('connect', function(s){
  // s.on('chat message', function(msg){
  //   console.log('message: ' + msg);
  // });
});

class Root extends Component{
  render(){
    return(
      <Home />
    )
  }
}

render(
  <Root />,
  document.getElementById('ReactTarget')
);
