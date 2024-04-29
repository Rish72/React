import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  
  render() {
    const {movies, handleIncStar, handleDecStar, handleCart, handleFav} = this.props;
    console.log(this.props);
    let listItems = this.props.movies.map((item, ind) => (
      <MovieCard
        key={ind}
        movies={item}
        handleIncStar={handleIncStar}
        handleDecStar={handleDecStar}
        handleCart={handleCart}
        handleFav={handleFav}
      />
    ));

    return <>{listItems};</>;
  }
}

export default MovieList;
