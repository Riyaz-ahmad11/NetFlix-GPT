import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { netflixBackground } from "../utils/constants";
import LoaderPage from "../utils/LoaderPage";
import { useSelector } from "react-redux";
import ErrorPage from "../utils/ErrorPage";

const GptSearchPage = () => {
  const errMessage = useSelector((store) => store.errorSlice.errMessage);
  const showLoader = useSelector((store) => store.gpt.showLoader);
  return (
    <>
      <div className="fixed  -z-20  filter brightness-50 ">
        <img
          className="h-screen object-cover md:object-none md:h-auto"
          src={netflixBackground}
          alt="netflixBackground"
        />
      </div>
      <div >
        <GptSearchBar />
        {showLoader ? (
          <LoaderPage />
        ) : errMessage ? (
          <ErrorPage />
        ) : (
          <GptMovieSuggestions />
        )}
      </div>
    </>
  );
};

export default GptSearchPage;
