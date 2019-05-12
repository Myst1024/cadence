import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
            <Button  variant="contained" color="primary" className="get_token" target = "" href={this.tokenRequestUrl()}>Authorize Spotify App</Button>
        );
    }
}

export default GetToken