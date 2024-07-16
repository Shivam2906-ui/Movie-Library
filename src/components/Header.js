import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unSubscribe when component is unmounts
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  // useSelector() is a hook that is used to read or see which cart items you are selected.
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-screen">
      <nav className="container mx-auto flex flex-wrap justify-between items-center bg-gray-800 p-4 rounded-lg">
        <img className="w-12 rounded-xl" src={LOGO} alt="logo" />
        <div className="flex items-center mt-2 sm:mt-0">
          <NavLink to="/cart" className="text-white mx-2 sm:mx-4">
            <h2 className="font-serif font-semibold hover:text-slate-300">
              Playlists
            </h2>
          </NavLink>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-500 rounded-md font-bold text-slate-100 p-2 shadow-md shadow-slate-700 mx-2 sm:mx-4"
          >
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
