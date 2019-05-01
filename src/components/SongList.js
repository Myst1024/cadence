import React, { Component } from 'react';

class SongList extends Component {
    constructor(props) {
        super(props);
        this.getRecommendations = this.getRecommendations.bind(this);
        this.state = {
            songs: {},
        };
    }
    componentDidMount() {
    }

    updateSongList(songs) {
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
            limit: 5,
            seed_genres: this.getSeedValues(this.props.chosenGenres),
            target_danceability: 0.9,
            min_tempo: 170,
            max_tempo: 190
        }
        this.props.spotify.getRecommendations(seeds).then(
            function(response){
                self.updateSongList(response);
            },
            function(error){
                console.error(error);
            }
        )
    }

    render() {
        if (this.props.seedCount >= 1 && this.props.seedCount <= 5) {
            return(
                <div>
                    {this.props.seedCount}
                    <button onClick={this.getRecommendations}>Get Songs</button>
                </div>
            )
        } else if (this.props.seedCount === 0) {
            return(<div></div>)
        } else if (this.props.seedCount > 5) {
            return(<div>Please select 5 or less options</div>)
        } else {
            return(<div>Something went wrong...</div>)
        }
    }
}

export default SongList