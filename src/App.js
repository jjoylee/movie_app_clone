import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movies = [
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
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title = {movie.title} poster= {movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App; 