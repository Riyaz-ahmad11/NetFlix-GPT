import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispath = useDispatch();
  const nowPlayingMovies = useSelector(store => store.movie.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        options
      );
      const data = await response.json();
      dispath(addNowPlayingMovies(data?.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
