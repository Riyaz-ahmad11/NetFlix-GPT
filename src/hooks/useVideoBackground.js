import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";


const useVideoBackground = (videoId) => {

  const dispatch = useDispatch();
  const trailerVideo = useSelector(store => store.movie.trailerVideo);
      
  const getMovieVideos = async () => {
  
    
        const response = await fetch("https://api.themoviedb.org/3/movie/"+videoId+"/videos?language=en-US",  options);
    
        const data = await response.json();
      
        
        const filterTrailervideos = data.results.filter((video) => {
          return video.type === "Trailer";
        });
        const trailer = filterTrailervideos.length ? filterTrailervideos[0] : data.results[0];
        
        dispatch(addTrailerVideo(trailer));
          
        //  i have railer , now  i have 2 ways to show the trailer , 1. useState varibale to render when trailer is availble  2. use redux store to store the trailer and get it from store only 
      }
  useEffect(() => {
  
       !trailerVideo && getMovieVideos();
      }, []);
}

export default useVideoBackground;