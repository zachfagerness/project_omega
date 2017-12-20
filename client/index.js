if (process.env.NODE_ENV !== 'production') {console.log('DEVELOPMENT MODE');}
import React,{Component} from 'react';
import {render} from 'react-dom';
import Home from './src/view/home.js';
import k from './codebyte.js';

var t = {p:'ddd'};
Object.freeze(t);
t.p = 's';
// keep this function call here


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
