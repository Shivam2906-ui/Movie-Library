import React, { useState, useRef } from "react"; //
import Header from "./Header"; //
import { checkValidData } from "../utils/validate"; //
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true); //
  const [errorMessage, setErrorMessage] = useState(null); //
  const [isSignedIn, setIsSignedIn] = useState(false);

  const navigate = useNavigate();

  const email = useRef(null); //
  const password = useRef(null); //

  const handleButtonClick = () => {
    //
    // validate

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return; //

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // const user = userCredential.user;
          setIsSignedIn(true);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          setIsSignedIn(true);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      {isSignedIn && <Header />}
      <div className="absolute inset-0">
        <img
          alt=""
          aria-hidden="true"
          data-uia="nmhp-card-hero+background+image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 bg-black bg-opacity-75 text-white rounded-lg shadow-lg"
      >
        <h1 className="font-bold text-2xl py-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            autoFocus={true}
            className="p-2 my-2 w-full bg-slate-900 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          autoFocus={true}
          className="p-2 my-2 w-full bg-slate-900 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoFocus={true}
          className="p-2 my-2 w-full bg-slate-900 rounded"
        />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer text-center"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to skm-movie-app? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
