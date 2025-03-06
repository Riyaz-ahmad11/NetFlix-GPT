import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movie);

  return (
    <div className="bg-black">
      <div className=" relative z-10 -mt-9 md:-mt-48">
        <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movie.trendingMovies} />
        <MovieList title={"Popular"} movies={movie.popularMovies} />
        <MovieList title={"Top Rated"} movies={movie.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
