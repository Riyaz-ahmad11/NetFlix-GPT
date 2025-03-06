import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useTrendingMovies = () => {
  const dispath = useDispatch();
  const trendingMovies = useSelector(store => store.movie.trendingMovies);
  const getTrendingMovies= async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        options
      );
      const data = await response.json();
      dispath(addTrendingMovies(data?.results));
  };

  useEffect(() => {
   !trendingMovies && getTrendingMovies();
  }, []);
};
export default useTrendingMovies;
