import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" md:pl-12 py-2 mx-4">
      <h1 className="font-bold text-lg md:text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar"> 
        <div className="flex gap-5">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  posterPath={movie.poster_path}
                  title={movie.title}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
