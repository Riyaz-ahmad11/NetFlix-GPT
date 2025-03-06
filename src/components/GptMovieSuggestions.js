import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const userName = useSelector((store) => store.user.displayName);

  const { gptMoviesName, gptMoviesResult, gptMessage } = useSelector(
    (store) => store.gpt
  );
  if (!gptMoviesResult) return;

  return (
    <div className="p-2 mt-6 md:m-4 bg-gray-500 bg-opacity-50">
      <p className="md:pl-12 pt-2 mx-4 text-white font-bold text-lg md:text-xl">
        {"Hi " + userName + "! " + gptMessage}
      </p>
      {gptMoviesResult.map((movie, index) => (
        <MovieList
          key={index}
          title={gptMoviesName[index]}
          movies={gptMoviesResult[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
