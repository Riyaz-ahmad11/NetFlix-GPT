import React from 'react'
import { ImageURL } from "../utils/constants"; 
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return; 
  return (
      <div className='w-32 md:w-52'>
          <img 
              className='rounded-md'
             alt="movie poster"
            src= {ImageURL+posterPath}
          />
    </div>
  )
}

export default MovieCard