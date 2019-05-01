import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
import GetToken from './GetToken.js';
import GenreList from './GenreList.js';
import BpmRange from './BpmRange.js';
import SongList from './SongList.js';

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
    updateSongList = (songList) => {
        console.log(songList);
    }
    render() { 
        this.seedCount = this.state.chosenGenres.length;
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
                    <SongList spotify={this.spotify} updateSongList={this.updateSongList} seedCount={this.seedCount} chosenGenres={this.state.chosenGenres}/>
                </div>
            )
        }
    }
}
 
export default Body;