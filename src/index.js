import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function getAccessToken() {
    var result = window.location.hash.match(/#(?:access_token)=([\S\s]*?)&/);
    return (result ? result[1] : '');
};


ReactDOM.render(<App accessToken={getAccessToken()}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
