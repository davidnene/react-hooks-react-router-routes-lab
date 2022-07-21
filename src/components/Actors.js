import React, { useEffect, useState } from "react";
import { actors } from "../data";

function Actors() {
  const [actorsData, setActorsData] = useState(actors)
  useEffect(()=>{
    setActorsData(actors)
  }, [])

  const actorsDisp = actorsData.map((actor)=>{
    const moviesDisp = actor.movies.map((movie)=>(
      <li key={movie}>{movie}</li>
    ))
    return (
      <div key={actor.name}>
        <h4>Name: {actor.name}</h4>
        <ul>
         Movies {moviesDisp}
        </ul>
      </div>
    )
  })
  return(
    <div>
      <h1>Actors Page</h1>
      {actorsDisp}
    </div>
  )
}

export default Actors;
