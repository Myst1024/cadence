import React, { Component } from 'react';

class GetToken extends Component {

    tokenRequestUrl() {
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const clientId = 'aed1fb11b28a4236aafa2241b827155f';
        const scopes = ['playlist-modify-public'];
        const redirectUri = encodeURIComponent(window.location);
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
            <a className="GetToken" target = "" href={this.tokenRequestUrl()}>Get Token</a>
        );
    }
}

export default GetToken