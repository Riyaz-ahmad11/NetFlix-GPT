import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies);
 

  if (movies === null) return; // show shimmer

  const videoInBackground = movies[0];
  
  const { original_title, overview, id } = videoInBackground;
 

  return (
    <div >
      <VideoTitle videoTitle={original_title} videoDesc={overview} />
          <VideoBackground videoId={ id} />
    </div>
  );
};

export default MainContainer;
