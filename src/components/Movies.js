import React, {useState, useEffect} from "react";
import { movies} from "../data";

function Movies() {

  const [moviesData, setMoviesData] = useState(movies)
  
  useEffect(() =>{
    setMoviesData(movies)
  }, [])

  let moviesDataLoad = moviesData.map((movie)=>{
    const movieGenre = movie.genres.map((genre)=>(
      <li key={genre}>{genre}</li>
    ))
    
    return <div key={movie.title}>
    <h4>Title: {movie.title}</h4>
    <h4>Time: {movie.time}</h4>
    <ul>
      Genre {movieGenre}
    </ul>
    </div>
  })

  return (
    <div>
      <h1>Movies Page</h1>
        {moviesDataLoad}
    </div>
  )
}

export default Movies;
