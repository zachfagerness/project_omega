import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/styles.css';
if (process.env.NODE_ENV !== 'production') {console.log('DEVELOPMENT MODE');}

class Root extends Component{
  render(){
    return(
      <div><input type="button" className="btn" value="Button"></input></div>
    )
  }
}
ReactDOM.render(
  <Root />,
  document.getElementById('ReactTarget')
);
