import React, { Component  } from 'react';
import Body from './components/Body.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    	haveToken: this.props.accessToken ? true : false,
    	tokenValid: true
    }
}
  
  	invalidateToken() {
  	  	this.setState({tokenValid: false})
  	}

  	render() {
  	  	return(  
  	  	  	<div className="App">
  	  	  	  	<header className="App-header">
  	  	  	  		<h1>Cadence</h1>
  	  	  	  	</header>
  	  	  	  	<Body 
  	  	  	  		token={this.props.accessToken} 
  	  	  	  		haveToken={this.state.haveToken} 
  	  	  	  		tokenValid={this.state.tokenValid }
  	  	  	  		invalidateToken={this.invalidateToken}/>
  	  	  	</div>
  	  	)
  	};

}

export default App;
