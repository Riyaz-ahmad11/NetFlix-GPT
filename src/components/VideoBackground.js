import React from "react";
import useVideoBackground from "../hooks/useVideoBackground";
import { useSelector } from "react-redux";

const VideoBackground = ({ videoId }) => {
  useVideoBackground(videoId);

  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  if (!trailerVideo) return;
  
  return (
    <div className="w-full ">
      <iframe 
        className="w-full aspect-video "
        src={"https://www.youtube-nocookie.com/embed/" + trailerVideo.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
