import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispath = useDispatch();
  const topRatedMovies = useSelector(store => store.movie.topRatedMovies);
  const getTopRatedMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        options
      );
      const data = await response.json();
      dispath(addTopRatedMovies(data?.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
