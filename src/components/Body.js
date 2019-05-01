import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
import GetToken from './GetToken.js';
import GenreList from './GenreList.js';
import BpmRange from './BpmRange.js'

class Body extends Component {
    constructor(props) {
        super(props);
        this.spotify = new Spotify();
        if (this.props.haveToken) {
            this.spotify.setAccessToken(this.props.token);
        }
        this.state = { 
            chosenGenres: [],
            minCadence: 85,
            maxCadence: 95,
        };

    }

    updateChosenGenres = (genreList) => {
        this.setState({chosenGenres: genreList});
    }

    render() { 
        if (!this.props.haveToken) {
            return (  
                <div className="bodyContainer">
                    <GetToken />
                </div>
            );
        } else {
            return (
                <div className="bodyContainer">
                    <GenreList spotify={this.spotify} updateChosenGenres={this.updateChosenGenres}/>
                    <BpmRange minCadence={this.state.minCadence} maxCadence={this.state.maxCadence}/>
                </div>
            )
        }
    }
}
 
export default Body;