import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "SpiderMan",
          plot: " A man who gets bitten by a spider acquires power of a spider and becomes superhuman",
          price: 120,
          rating: 8.9,
          stars: 0,
          src: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          fav: false,
          isCarted: false,
        },
        {
          title: "Deadpool and Wolverine",
          plot: " Deadpool and Wolverine Recent moive ",
          price: 120,
          rating: 8.9,
          stars: 0,
          src: "https://lrmonline.com/wp-content/uploads/2024/04/Deadpool-Wolverine-poster-1-691x1024.jpg",
          fav: false,
          isCarted: false,
        },
        {
          title: "Demon Slayer",
          plot: " A man who gets bitten by a spider acquires power of a spider and becomes superhuman",
          price: 120,
          rating: 8.9,
          stars: 0,
          src: "https://th.bing.com/th/id/OIP.G6dCMXGPS7UFuamaTfLltwHaLH?rs=1&pid=ImgDetMain",
          fav: false,
          isCarted: false,
        },
        {
          title: "Haikyuu",
          plot: " A man who gets bitten by a spider acquires power of a spider and becomes superhuman",
          price: 120,
          rating: 8.9,
          stars: 0,
          src: "https://th.bing.com/th/id/OIP.6d6bsgql9KfbqOY5wtBFLwHaJ4?rs=1&pid=ImgDetMain",
          fav: false,
          isCarted: false,
        },
      ],
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
    const movIndex = movies.indexOf(movie);

    movies[movIndex].isCarted = !movies[movIndex].isCarted;
    console.log(movies[movIndex].isCarted);
    this.setState({
      movies, // short hand
    });
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

  render() {
    let listItems = this.state.movies.map((item, ind) => (
      <MovieCard
        key={ind}
        movies={item}
        handleIncStar={this.handleIncStar}
        handleDecStar={this.handleDecStar}
        handleCart={this.handleCart}
        handleFav={this.handleFav}
      />
    ));

    return <>{listItems};</>;
  }
}

export default MovieList;
