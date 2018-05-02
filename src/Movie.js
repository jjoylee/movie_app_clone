import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

Movie.propTypes = {
    title : PropTypes.number.isRequired,
    poster : PropTypes.string.isRequired
}

function MoviePoster({poster}){
    return(
        <img src={poster}/>
    )
}

export default Movie