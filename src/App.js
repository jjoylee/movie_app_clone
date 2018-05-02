import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies : [
          {
            title : "Matrix",
            poster : "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
          },
          {
            title : "Full Metal Jacket",
            poster : "https://ia.media-imdb.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
          },
          {
            title : "Oldboy",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title : "Star Wars",
            poster : "http://cdn.collider.com/wp-content/uploads/2018/02/star-wars-the-last-jedi-blu-ray-cover.jpg"
          },
          {
            title : "Transpotting",
            poster : "http://monster-poster.com/site/wp-content/uploads/2016/10/FR_0003-1.jpg"
          }
        ]
      });
    },5000);
  }

  _renderMovies = () => {
   const movies = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster= {movie.poster} key={index}/>
    });
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
}

export default App; 