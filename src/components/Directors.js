import React, {useState, useEffect} from "react";
import { directors } from "../data";

function Directors() {

  const [directorsData, setDirectorsData] = useState(directors)
  useEffect(()=>{
    setDirectorsData(directors)
  },[])
  const directorsDisp = directorsData.map((director)=>{
    const moviesDisp = director.movies.map((movie)=>(
      <li key={movie}>{movie}</li>
    ))
    return (
      <div key={director.name}>
        <h4>Name: {director.name}</h4>
        <ul>
         Movies {moviesDisp}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDisp}
    </div>
  
  )
}

export default Directors;
