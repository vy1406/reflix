import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {

    addMovieToUser = movieID => {
        this.props.addMovieToUser(movieID)
    }
    returnMovie = movieID => {
        this.props.returnMovie(movieID)
    }
    render() {
        return (
            <div>
                <h5>catalog Component</h5>
                {this.props.movies.map(m =>
                    <Movie movie={m}
                        addMovieToUser={this.addMovieToUser}
                        returnMovie={this.returnMovie}
                    />
                )}
                <hr />
            </div>
        )
    }
}

export default Catalog;