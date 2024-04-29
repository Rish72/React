import { Component } from "react";
import MovieList from "./MovieList";
import NavBar from "./Navbar";
import { movies } from "./movieData";


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartItemCount : 0,
    };
  }

  handleFav = (movie) => {
    const { movies } = this.state;
    const movInd = movies.indexOf(movie);

    movies[movInd].fav = !movies[movInd].fav;
    this.setState({
      movies: movies,
    });
  };

  handleCart = (movie) => {
    const { movies } = this.state;
    let {cartItemCount} = this.state;
    console.log("initially "+cartItemCount);
    const movIndex = movies.indexOf(movie);

    movies[movIndex].isCarted = !movies[movIndex].isCarted;
    console.log(movies[movIndex].isCarted );

    if(movies[movIndex].isCarted ){
      cartItemCount += 1;
    }else {
      cartItemCount -= 1;
    }
    this.setState({
      movies, // short hand
      cartItemCount
    });

    console.log(cartItemCount);
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const movIndex = movies.indexOf(movie);

    if (movies[movIndex].stars > 0) {
      movies[movIndex].stars -= 0.5;
      this.setState({
        movies: movies,
      });
    }
  };

  handleIncStar = (movie) => {
    const { movies } = this.state;
    const movInd = movies.indexOf(movie);

    if (movies[movInd].stars < 5) {
      movies[movInd].stars += 0.5;
      this.setState({
        movies: movies, //{state} : {local copy}
      });
    } else return;
  };

  render(){
    const {movies, cartItemCount} = this.state;
    return (
      <>
       <NavBar cartItemCount={cartItemCount}/>
       <h1 style={{textAlign: "center", fontSize: "50px"}}>Movie App</h1>
       <MovieList movies={movies} handleCart={this.handleCart} handleDecStar={this.handleDecStar} handleFav={this.handleFav} handleIncStar={this.handleIncStar} />
       </>

     );
  }
}

export default App;
