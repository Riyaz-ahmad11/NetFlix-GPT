export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_API,
  },
};

export const ImageURL = "https://image.tmdb.org/t/p/w500/";
export const netflixBackground =
  "https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg";
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
export const GEMINI_API = process.env.REACT_APP_GEMINI_API;