import React, { Component  } from 'react';
import logo from './logo.svg';
import Body from './components/Body.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      haveToken: this.props.accessToken ? true : false,
     }
}
  
  render() {
    return(  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Cadence</h1>
        </header>
        <Body token={this.props.accessToken} haveToken={this.state.haveToken}/>
      </div>
    )
  };

}

export default App;
