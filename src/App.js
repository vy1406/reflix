import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import User from './components/User';
import Rented from './components/Rented';

class App extends Component {
  constructor() {
    super()
    this.state = {
      curUser: null,
      users:
        [
          { id: "1", name: "Zlatan Ibrahimovic", movies: [] },
          { id: "2", name: "R2D2", movies: [] },
          { id: "3", name: "John Wick", movies: [] },
          { id: "4", name: "Lady Gaga", movies: [] }
        ],
      movies:
        [
          { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
          { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
          { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
          { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
          { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
        ]
    }
  }
  selectUser = (argUserID) => {
    let userDetails = this.state.users.find(u => argUserID === u.id)
    this.setState({
      curUser: userDetails
    })
  }
  addMovieToUser = (movieID) => {
    let arrMovies = [...this.state.curUser.movies]
    arrMovies.push(movieID)
    let currentUser = this.state.curUser
    currentUser.movies.push(movieID)

    this.setState({
      curUser: currentUser
    })

    this.changeRentingStatus(movieID)
  }

  changeRentingStatus = (movieID) => {
    let arrMovies = [...this.state.movies]
    let movieToUpdate = arrMovies.find(m => m.id === movieID)
    movieToUpdate.isRented = true

    this.setState({
      movies: arrMovies
    })
  }
  createArrayOfRentedMovies = () => {
    let arrResult = []
    this.state.curUser.movies.forEach(
      movieID => {
        let curMovie = this.state.movies.find(stateMovie => stateMovie.id === movieID)
        arrResult.push(curMovie)
      }
    )
    return arrResult
  }

  returnMovie = (movieID) => {
    let arrMovies = [...this.state.movies]
    let movieToReturn = arrMovies.find(m => m.id === movieID)
    movieToReturn.isRented = false

    this.setState({
      movies: arrMovies
    })

    this.removeMovieFromCurrentUser(movieID)
  }

  removeMovieFromCurrentUser = movieID => {
    let arrMovies = [...this.state.curUser.movies]

    for (let i = 0; i < arrMovies.length; i++) {
      if (arrMovies[i] === movieID)
        arrMovies.splice(i, 1);
    }

    this.updateUserRents(arrMovies)
  }
  updateUserRents = arrMovies => {
    let currentUserToUpdte = this.state.curUser
    currentUserToUpdte.movies = arrMovies
    this.setState({
      curUser: currentUserToUpdte
    })
  }
  render() {
    return (
      <div className="App">
        <Landing users={this.state.users} chooseUser={this.selectUser} />
        {this.state.curUser ? <div>
          <User user={this.state.curUser} />
          <Rented userMovies={this.createArrayOfRentedMovies()} returnMovie={this.returnMovie} />
        </div>
          :
          null}
        <Catalog movies={this.state.movies} addMovieToUser={this.addMovieToUser} returnMovie={this.returnMovie} />
      </div>
    )
  }
}

export default App;
