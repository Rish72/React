import { Component } from "react";

class MovieCard extends Component { 

  decStars = () => {
    if(this.state.stars > 0){
      this.setState( {
        stars: this.state.stars -+ 0.5
      })
    }else {
      return;
    }
  }

  addStars () {
    // form 1 --  pass the object
    // this.setState({
    //   stars :this.state.stars +=0.5
    // })

    // form 2 -- works on previous State whatever the state was it changes that 
    if(this.state.stars < 5){
      this.setState((prevState) => {
        return{
          stars : prevState.stars+0.5
        }
      })
    }else {
      return;
    }


    // this.state.stars += 0.5;
    // console.log(this.state.stars);
  }

  // addStars = () => {
  //   console.log(this.state);
  // }


  handleFav = () => {
    this.setState({
      fav : !this.state.fav
    })
  }



  //making state
  render() {
    const {movies, handleIncStar, handleDecStar, handleCart} = this.props;
    const {title, plot, price , rating, stars, src,fav, isCarted} = this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="poster"
              src={src}
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot"> {plot}
            </div>
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
                  className="str-btn" onClick={() => handleIncStar(movies)}
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                />
                <span> {stars} </span>
              </div>
              <button onClick={this.handleFav} className={fav?"unfavourite-btn" : "favourite-btn"}>{fav?"Unfavourite" : "Favourite"}</button>
              <button onClick={()=> handleCart(movies)} className={isCarted?"remove-cart-btn" : "cart-btn"}>{isCarted?"Remove from Cart" : "Add to Cart"}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
