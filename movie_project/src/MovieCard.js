import { Component } from "react";

class MovieCard extends Component { 
  constructor(){
    super();
    this.state = {
      title : "SpiderMan",
      plot : " A man who gets bitten by a spider acquires power of a spider and becomes superhuman" , 
      price : 120,
      rating : 8.9,
      stars : 0,
      fav: true
    } 
  }

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


  handleClick = () => {
    this.setState({
      fav : !this.state.fav
    })
  }

  //making state
  render() {
    const {title, plot, price , rating, stars, fav} = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="poster"
              src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  onClick={this.decStars}
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
                  className="str-btn" onClick={this.addStars.bind(this)}
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                />
                <span> {stars} </span>
              </div>
              <button onClick={this.handleClick} className={fav?"favourite-btn" : "unfavourite-btn"}>{fav?"Favourite" : "Unfavourite"}</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
