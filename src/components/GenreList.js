import React, { Component } from 'react';
import Select from 'react-select';

class GenreList extends Component {
    constructor(props) {
        super(props);
        this.updateChosenGenres = this.updateChosenGenres.bind(this);
        
        this.state = {
            error: null,
            isLoaded: false,
            genres: ['Loading Genres'],            
        };
    }

    //react-select options need to be value:label formatted
    formatGenreData(data) {
        let options = [];
        data.genres.map(x => options.push({value: x, label: x}))
        return options;
    }

    updateChosenGenres(genres) {
        this.props.updateChosenGenres(genres);
    }   

    componentDidMount(){
        let self = this;
        this.props.spotify.getAvailableGenreSeeds()
            .then(
                (result) => {
                self.setState({
                    genres: self.formatGenreData(result),
                    isLoaded: true
                });
            },
            (error) => {
                console.log('asdf');
                this.props.invalidateToken();
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }
    
    
    render() {
        if (this.state.error){
            if (this.state.error.status === 401)
            return(<h3>Token expired, please request a new one:</h3>)
            else
                return(<h3>Error loading Genre List</h3>)
        } else if (this.isLoaded){
            return(<h3>Loading Genre List...</h3>)
        } else {
            return (
                <ul className="genreList">
                    <span>Genres:</span> 
                    <Select onChange={this.updateChosenGenres} autoFocus={true} isMulti={true} options={this.state.genres} />
                </ul>
            );
        }

    }
}

export default GenreList