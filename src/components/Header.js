import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { clearGptResults, toggleGptSearchView } from "../utils/gptSlice";
import { setLanguage } from "../utils/languageSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const showGptPage = useSelector((store) => store.gpt.showGptPage);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // ideally i should have added onAuthStateChanged in root of the app -> but since i am using navigate in it , and navigate can only be used with routing context hence i am attaching onAuthStateChanged in the child of Body-> Header bcz Header comp is always present
      if (user) {
        // User is signed-in / sign-Up

        const { uid, email, displayName } = user;

        dispatch(addUser({ uid, email, displayName }));

        navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        dispatch(clearGptResults());
        navigate("/");

      }
    });

    // here onAuthStateChanged helps in protecting routing -> user cannot go to /Browse unless authenticated bcz when user types          "/Browse" , the Browse page does load! -> the Header loads and as the Header loads , the useEffect executes onAuthStateChanged , and onAuthStateChanged sees whether user is logged in or not -> if not navigate to "/"  and same when user is logged in and types "/" , he cannot go to signIn page bcz again header loads , onAuthStateChanged sees whther logged in , if yes navigate to "/Browse" -> Hence protecting Route.

    return () => {
      unsubscribe();
    };
  }, []);

  const handleClick = () => {
    dispatch(toggleGptSearchView());
  };
  const optionHandler = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert("error during sign out");
      });
  };

  return (
    <div className="absolute left-0 top-0  w-[100%] flex justify-between p-2 items-center z-50  md:bg-gradient-to-b from-black ">
      <div>
        <img
          className="md:px-2 w-28 md:w-48  filter contrast-150"
          src="/images/netflixLogo.png"
          alt="Netflix Logo"
        />
      </div>
      {user && (
        <div className=" md:mx-12 flex items-center ">
          {showGptPage && (
            <select
              className="p-1  md:p-2 m-2 bg-gray-300 rounded-lg"
              onChange={optionHandler}
            >
              <option
                className="hover:bg-red-600 hover:text-white"
                name="language"
                value="English"
              >
                English
              </option>
              <option
                className="hover:bg-red-600 hover:text-white"
                name="language"
                value="Hindi"
              >
                Hindi
              </option>
              <option
                className="hover:bg-red-600 hover:text-white"
                value="Urdu"
              >
                Urdu
              </option>
            </select>
          )}
          <button
            onClick={handleClick}
            className="bg-purple-800 text-white w-max p-2 md:px-6 md:py-3  rounded-lg font-medium md:font-bold "
          >
            {showGptPage ? "Home" : "Search with AI"}
          </button>
          <img
            className="hidden md:inline-block w-12 rounded-md mx-4"
            src="/images/netflixProfile.jpg"
            alt="user profile"
          />
          <img
            className="w-10 md:w-12 p-2 inline invert cursor-pointer"
            onClick={logOut}
            src="/images/logoutIcon.png"
            alt="logout"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
