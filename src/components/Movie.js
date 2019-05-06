import React, { Component } from 'react';
import MovieDetail from './MovieDetail ';

class Movie extends Component {
    constructor() {
        super()

    }

    showDetails = () => {
        console.log(<MovieDetail movie={this.props.movie} />)
        // return  <MovieDetail movie={this.props.movie}/>
    }
    addMovieToUser = () => {
        this.props.addMovieToUser(this.props.movie.id)
    }
    returnMovie = () => {
        this.props.returnMovie(this.props.movie.id)
    }
    render() {
        return (
            <div>
                <span>{this.props.movie.title}</span>
                <button onClick={this.showDetails}>Details</button>
                <button onClick={this.addMovieToUser}>AddMovieToUser</button>
                <button onClick={this.returnMovie}>ReturnMovie</button>
                {this.props.movie.isRented ? <span> true </span> : <span> false </span>}
            </div>
        )

    }
}

export default Movie;