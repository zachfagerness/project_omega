if (process.env.NODE_ENV !== 'production') {console.log('DEVELOPMENT MODE');}
import React,{Component} from 'react';
import {render} from 'react-dom';
import Home from './src/view/home.js';

export default class Root extends Component{
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
