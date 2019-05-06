import React, { Component } from 'react';

class MovieDetail  extends Component {

    render() {
        return (
             <div>
                 {this.props.movie.descrShort}
             </div>
        )
    }
}

export default MovieDetail ;