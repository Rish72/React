import { Component } from "react";

class MovieCard extends Component {
  //making state
  render() {
    const { movies, handleIncStar, handleDecStar, handleCart, handleFav } =
      this.props;
    const { title, plot, price, rating, stars, src, fav, isCarted } =
      this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="poster" src={src} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot"> {plot}</div>
            <div className="price">Rs. {price}</div>

            <div className="footer">
              <div className="rating"> {rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  onClick={() => handleDecStar(movies)}
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                />
                <img
                  alt="star"
                  className="stars"
                  src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                />
                <img
                  alt="increase"
                  className="str-btn"
                  onClick={() => handleIncStar(movies)}
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                />
                <span> {stars} </span>
              </div>
              <button
                onClick={() => handleFav(movies)}
                className={fav ? "unfavourite-btn" : "favourite-btn"}
              >
                {fav ? "Unfavourite" : "Favourite"}
              </button>
              <button
                onClick={() => handleCart(movies)}
                className={isCarted ? "remove-cart-btn" : "cart-btn"}
              >
                {isCarted ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
