import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
import GetToken from './GetToken.js';
import GenreList from './GenreList.js';
import BpmRange from './BpmRange.js';
import GetSongs from './GetSongs.js';
import SongList from './SongList.js';
import CreatePlaylist from './CreatePlaylist.js';

class Body extends Component {
    constructor(props) {
        super(props);
        this.spotify = new Spotify();
        if (this.props.haveToken) {
            this.spotify.setAccessToken(this.props.token);
        }
        this.state = { 
            chosenGenres: [],
            minCadence: 170,
            maxCadence: 190,
            songList: [],
            songListNeedsUpdate: true
        };
    }

    updateSongListNeedsUpdate = (status) => {
        this.setState({songListNeedsUpdate: status});
    }

    updateChosenGenres = (genreList) => {
        this.setState({
            chosenGenres: genreList,
            songListNeedsUpdate: true});
    }
    updateSongList = (songList) => {
        this.setState({songList: songList});
    }
    updateCadence = (min, max) => {
        this.setState({
            minCadence: min,
            maxCadence: max,
            songListNeedsUpdate: true
        })
    }

    render() { 
        this.seedCount = this.state.chosenGenres.length;
        if (!this.props.haveToken || !this.props.tokenValid) {
            return (  
                <div className="bodyContainer">
                    <GetToken />
                </div>
            );
        } else {
            return (
                <div className="bodyContainer">
                    <GenreList spotify={this.spotify} invalidateToken={this.props.invalidateToken} updateChosenGenres={this.updateChosenGenres}/>
                    <BpmRange minCadence={this.state.minCadence} maxCadence={this.state.maxCadence} updateCadence={this.updateCadence}/>
                    <GetSongs 
                        spotify={this.spotify} 
                        invalidateToken={this.props.invalidateToken} 
                        updateSongList={this.updateSongList} 
                        seedCount={this.seedCount} 
                        chosenGenres={this.state.chosenGenres}
                        minCadence={this.state.minCadence}
                        maxCadence={this.state.maxCadence}
                        songListNeedsUpdate={this.state.songListNeedsUpdate}
                        updateSongListNeedsUpdate={this.updateSongListNeedsUpdate}
                    />
                    {this.state.songList.length > 0
                        ? <CreatePlaylist 
                            spotify={this.spotify} 
                            songList={this.state.songList} />
                        : <React.Fragment />
                    }
                    
                    <SongList songList={this.state.songList} />
                </div>
            )
        }
    }
}
 
export default Body;