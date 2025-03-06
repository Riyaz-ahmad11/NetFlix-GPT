import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const usePopularMovies = () => {
  const dispath = useDispatch();
  const popularMovies = useSelector(store => store.movie.popularMovies);
  const getPopularMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        
        options
      );
      const data = await response.json();
      dispath(addPopularMovies(data?.results));
  };

  useEffect(() => {
   !popularMovies && getPopularMovies();
  }, []);
};
export default usePopularMovies;
