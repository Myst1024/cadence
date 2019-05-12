import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';

class GetSongs extends Component {
    constructor(props) {
        super(props);
        this.getRecommendations = this.getRecommendations.bind(this);
    }

    updateSongList(songs) {
        this.props.updateSongListNeedsUpdate(false);
        this.props.updateSongList(songs);
    }

    getSeedValues(seeds) {
        let seedValues = [];
        seeds.forEach(function(element){
            seedValues.push(element.value);
        })
        return seedValues;
    }

    getRecommendations() {
        let self = this;
        let seeds = {
            limit: 50,
            seed_genres: this.getSeedValues(this.props.chosenGenres),
            target_danceability: 0.9,
            min_tempo: this.props.minCadence,
            max_tempo: this.props.maxCadence
        }
        this.props.spotify.getRecommendations(seeds, function(error, data) {
            if (error) console.log(error);
            else self.updateSongList(data.tracks);
        })
    }

    render() {
        if (this.props.seedCount >= 1 && this.props.seedCount <= 5) {
            if (this.props.songListNeedsUpdate) {
                return(
                    <div>
                        <Button variant="contained" color="primary" onClick={this.getRecommendations}>
                            Get Songs
                            <SearchIcon className="rightIcon" />
                        </Button>
                    </div>
                )
            } else {
                return(
                    <div>
                        <Button variant="outlined" color="primary" onClick={this.getRecommendations}>
                            Get Songs
                            <SearchIcon className="rightIcon" />
                        </Button>
                    </div>
                )
            }
        } else if (this.props.seedCount === 0) {
            return(<Button variant="contained" color="primary" disabled>Get Songs</Button>)
        } else if (this.props.seedCount > 5) {
            return(<div>Please select 5 or less options</div>)
        } else {
            return(<div>Something went wrong...</div>)
        }
    }
}

export default GetSongs