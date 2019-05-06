import React, { Component } from 'react';

class GetToken extends Component {

    tokenRequestUrl() {
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const clientId = 'aed1fb11b28a4236aafa2241b827155f';
        const scopes = ['playlist-modify-public'];
        //Don't want to pass parameters or hashes to spotify api
        const bareUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
        const redirectUri = encodeURIComponent(bareUrl);
        const responseType = 'token';   
        const requestUrl = 
            apiUrl +
            '?client_id=' + clientId +
            '&redirect_uri=' + redirectUri +
            '&response_type=' + responseType +
            '&scope=' + encodeURIComponent(scopes)
        ;     
        return requestUrl;
    }

    render() {
        return (
            <a className="GetToken" target = "" href={this.tokenRequestUrl()}>Authorize Spotify App</a>
        );
    }
}

export default GetToken