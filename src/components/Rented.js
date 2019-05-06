import React, { Component } from 'react';
import Movie from './Movie';

class Rented extends Component {
    returnMovie = movieID => {
        this.props.returnMovie(movieID)
    }
    render() {
        return (
            <div>
                {this.props.userMovies.map(m => <Movie movie={m} returnMovie={this.returnMovie}/>)}
            </div>
        )
    }
}

export default Rented;