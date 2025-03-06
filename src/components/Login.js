import React, { useRef, useState } from "react";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { netflixBackground } from "../utils/constants";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const signInUpHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const clickSubmit = () => {
    // validation through regex

    if (!isSignIn && name.current.value === "") {
      // check name validation only when sign up page
      setErrorMessage("Name cannot be Empty!");
      return;
    }
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      // sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // update the profile
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser; // do not take user infor from store here bcz that has not yet been updatd with name -> so use the firebase current user from auth.currentUser
              // also we have already dispatched addUser in onAuthStateChange to add the user in our store then why here also? 
              // bcz when one signs up , then from "onAuthStateChange", the email and uid is added in store but it has no displayName at that time bcz user returned from fireBase had only mail and uid , hence to add the name we have updated the firebase user Profile -> but updating the firebase user will ot update the store until and unless "onAuthStateChange" is triggered again to dispath the action  , and hence we update our store from here 
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorMessage("something went wrong");
            });
        })
        .catch((error) => {
          setErrorMessage("something went wrong");
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
        })
        .catch((error) => {
          setErrorMessage("wrong credential");
        });
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div className="absolute  -z-20  filter brightness-50">
          <img className="h-screen object-cover md:object-none md:h-auto" src={netflixBackground} alt="netflixBackground" />
        </div>

        <form
          onClick={(e) => e.preventDefault()}
          className=" min-w-64 w-3/12 p-4 bg-black bg-opacity-80  absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-evenly text-white rounded-lg"
        >
          <h1 className="text-white font-bold text-2xl p-2 m-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="border rounded-sm border-white p-2 m-4 bg-gray-700"
            />
          )}

          {errorMessage === "Name cannot be Empty!" && (
            <p className="font-semibold text-red-600 my-1 mx-4 border border-red-500 p-2">
              {errorMessage}
            </p>
          )}

          <input
            ref={email}
            type="email"
            name="email"
            placeholder="Email adress"
            className="border rounded-sm border-white p-2 m-4 bg-gray-700"
          />
          {errorMessage === "Please Enter Valid Email" && (
            <p className="font-semibold text-red-600 my-1 mx-4 border border-red-500 p-2">
              {errorMessage}
            </p>
          )}

          <input
            ref={password}
            type="password"
            name="password"
            placeholder={isSignIn ? "Enter password" : "Create Password"}
            className="border rounded-sm border-white p-2 m-4 bg-gray-700 "
          />

          {errorMessage === "Please Enter Valid Password" && (
            <p className="font-semibold text-red-600 my-1 mx-4 border border-red-500 p-2">
              {errorMessage}
            </p>
          )}

          {/* error from Firebase due to problem in Sign Up/In -> like email already in use / wrong password*/}
          {(errorMessage === "something went wrong" ||
            errorMessage === "wrong credential") && (
            <p className="font-semibold text-red-600 my-1 mx-4 border border-red-500 p-2 text-centre">
              {errorMessage}
            </p>
          )}

          <button
            onClick={clickSubmit}
            className="bg-red-600 active:bg-red-900 text-white font-bold border rounded-sm  p-2 m-4 "
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="p-2 m-4">
            {" "}
            {isSignIn ? "New to Netflix? " : "Already a User? "}{" "}
            <span
              onClick={signInUpHandler}
              className="cursor-pointer hover:underline "
            >
              {isSignIn ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

// rafce -> react arrow fn export comp
