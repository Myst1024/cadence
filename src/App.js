import React, { Component  } from 'react';
import Body from './components/Body.js'
import './App.css';

class App extends Component {
  constructor(props) {
		super(props);
		
		this.invalidateToken = this.invalidateToken.bind(this);

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
									<h4><span role="img" aria-label="bike">🚴</span> Workout playlist generator <span role="img" aria-label="run">🏃</span></h4>
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
