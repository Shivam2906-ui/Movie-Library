import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex justify-between items-center p-4  bg-gray-800 text-white shadow-lg shadow-red-600">
        <h2 className="text-2xl font-bold font-serif">Playlists</h2>
        <NavLink
          to="/browse"
          className="hover:underline bg-blue-600 p-2 rounded-md hover:bg-blue-500"
        >
          Go Back
        </NavLink>
      </div>
      <div
        className="text-center m-8 p-8 bg-cover bg-center bg-no-repeat shadow-2xl shadow-blue-800 rounded-lg"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {cartItems.length > 0 ? (
            cartItems.map((curMovie) => {
              const { imdbID, Title, Poster, Year } = curMovie;
              const movieName = Title.substring(0, 15);
              return (
                <div key={imdbID} className="max-w-xs flex-shrink-0">
                  <div className="card bg-slate-500 rounded-lg w-72 m-4 hover:bg-slate-400 shadow-lg transition duration-100 transform hover:scale-105">
                    <div className="card-info p-4">
                      <h2 className="text-center font-serif font-bold text-xl text-slate-100 mb-2">
                        {movieName.length >= 15 ? `${movieName}...` : movieName}
                      </h2>
                      <img
                        className="w-full h-64 md:h-72 lg:h-80 mx-auto py-2 rounded-2xl shadow-lg shadow-blue-700"
                        src={Poster}
                        alt={imdbID}
                      />
                      <h2 className="text-center font-serif font-bold text-xl text-blue-950 mt-2">
                        {Year}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-xl text-white">Your cart is empty.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
