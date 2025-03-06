import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languages from "../utils/languageConfig";
import openai from "../utils/openai";
import { GEMINI_API, options } from "../utils/constants";
import { addGptMoviesResult, setShowLoader } from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { setErrorMessage } from "../utils/errorSlice";

const GptSearchBar = () => {
  const inputSearch = useRef();
  const userName = useSelector((store) => store.user.displayName);
  const dispatch = useDispatch();
  const choosenLanguage = useSelector(
    (store) => store.language.choosenLanguage
  );

  const tmdbSearch = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    ); //

    const data = await response.json();

    return data.results;
  };
  const gptSearchHandler = async () => {
    dispatch(setShowLoader(true));

    const genAI = new GoogleGenerativeAI(GEMINI_API);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const userPrompt =
      "act as a movie recommendation system and suggest some movies for the query : " +
      inputSearch.current.value +
      ".Give response in string json format `{`message`: `make interactive content like ` ]you want horror movies! Here are some You might Like` or like `Oh! good choice looks you are in mood! here are some movies`  ... (make dynamically)` , `movies` : `an array of 5 names of movies like ['golmaal' ,'welcome' ,'three idiots' ,'dhamaal' ,'dhol']`}` ";

    try {
      const result = await model.generateContent(userPrompt);

      const data = result.response.text();
      const jsonData = data.match(/{[\s\S]*}/); // extracting json format from the gpt response
      const gptData = JSON.parse(jsonData); // parse to js obj

      const gptMessage = gptData.message;
      const gptMovies = gptData.movies;

      const tmdbPromiseArray = gptMovies.map((movie) => tmdbSearch(movie));
      // // [promise,promise,promise,promise,promise]

      const tmdbResult = await Promise.all(tmdbPromiseArray);
      dispatch(addGptMoviesResult({ tmdbResult, gptMovies, gptMessage }));
    } catch (err) {
      console.log(err);
      dispatch(setErrorMessage(err));
    } finally {
      dispatch(setShowLoader(false));
    }
  };

  return (
    <div className="pt-[40%] md:pt-[10%]">
      <form
        className="px-[3%] md:px-[20%] grid grid-cols-[5fr_2fr] md:gap-8 gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputSearch}
          className="p-2 md:p-3 border  rounded-lg  border-black"
          type="text"
          placeholder={
            languages[choosenLanguage].placeHolder1 +
            userName +
            languages[choosenLanguage].placeHolder2
          }
        />
        <button
          onClick={gptSearchHandler}
          className="p-1 md:p-3 border border-black rounded-lg bg-red-600 md:text-xl text-white font-bold"
        >
          {languages[choosenLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
