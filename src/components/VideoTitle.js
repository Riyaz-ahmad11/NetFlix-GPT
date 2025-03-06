import React from "react";

const VideoTitle = ({ videoTitle, videoDesc }) => {
  return (
    <div className="absolute  w-full md:aspect-video mt-12 md:mt-16 md:pt-36 md:pl-16 md:bg-gradient-to-r from-black  z-10">
      <h1 className=" font-semibold md:font-bold text-white  md:text-3xl p-2 mx-4 my-1">
        {videoTitle}
      </h1>

      <p className="hidden md:inline-block w-4/12 p-2 mx-4 my-1 text-white">{videoDesc}</p>
      <div className="mx-5 md:my-2">
        <button className=" py-2 px-2 md:px-16 font-semibold border border-white bg-white rounded-md hover:bg-gray-300">
        <img
            src="/images/playIcon.png"
            alt="playIcon"
            className="w-4 md:w-6 inline mr-1 md:mr-3"
          />
          <span className="md:text-lg text-sm">Play</span>
        </button>
        <button className="py-2 px-2 md:px-16 mx-2 md:mx-4  text-white font-semibold border border-white bg-gray-400 bg-opacity-50 rounded-md text-center">
          <img
            src="/images/moreInfo.png"
            alt="moreInfo"
            className=" w-4 md:w-6 inline invert mr-2 md:mr-3"
          />
          <span>more Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
