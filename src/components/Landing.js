import React, { Component } from 'react';
import User from './User';
import Rented from './Rented';
import Catalog from './Catalog';

class Landing extends Component {

    chooseUser = user => {
        this.props.chooseUser(user)
    }

    createArrayOfRentedMovies = () => {
        let arrResult = []
        this.props.state.curUser.movies.forEach(
            movieID => {
                let curMovie = this.props.state.movies.find(stateMovie => stateMovie.id === movieID)
                arrResult.push(curMovie)
            }
        )
        return arrResult
    }
    returnMovie = (movieID) => {
        let arrMovies = [...this.props.state.movies]
        let movieToReturn = arrMovies.find(m => m.id === movieID)
        movieToReturn.isRented = false

        this.setState({
            movies: arrMovies
        })
        this.updateBudget(3)
        this.removeMovieFromCurrentUser(movieID)
    }
    addMovieToUser = (movieID) => {
        let arrMovies = [...this.props.state.curUser.movies]
        arrMovies.push(movieID)
        let currentUser = this.props.state.curUser
        currentUser.movies.push(movieID)

        this.setState({
            curUser: currentUser
        })
        this.updateBudget(-3)
        this.changeRentingStatus(movieID)
    }
    updateBudget = argBudget => {
        let currentUser = this.props.state.curUser
        currentUser.budget = currentUser.budget + argBudget

        this.setState({
            curUser: currentUser
        })
    }

    changeRentingStatus = (movieID) => {
        let arrMovies = [...this.props.state.movies]
        let movieToUpdate = arrMovies.find(m => m.id === movieID)
        movieToUpdate.isRented = true

        this.setState({
            movies: arrMovies
        })
    }
    
  removeMovieFromCurrentUser = movieID => {
    let arrMovies = [...this.props.state.curUser.movies]

    for (let i = 0; i < arrMovies.length; i++) {
      if (arrMovies[i] === movieID)
        arrMovies.splice(i, 1);
    }

    this.updateUserRents(arrMovies)
  }
  updateUserRents = arrMovies => {
    let currentUserToUpdte = this.props.state.curUser
    currentUserToUpdte.movies = arrMovies
    this.setState({
      curUser: currentUserToUpdte
    })
  }
    render() {
        return (
            <div>
                <h3>Landing Component</h3>
                {this.props.users.map(u =>
                    <User user={u} chooseUser={this.chooseUser} />
                )}
                <hr />
                {this.props.state.curUser ? <div>
                    <User user={this.props.state.curUser} />
                    <Rented userMovies={this.createArrayOfRentedMovies()} returnMovie={this.returnMovie} />
                </div>
                    :
                    null}
            </div>
        )
    }
}

export default Landing;