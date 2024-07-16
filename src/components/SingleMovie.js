import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/context";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ReactLoading from "react-loading";

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 500);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Loading...</h1>
        <ReactLoading type="balls" color="#0000FF" height={100} width={50} />
      </div>
    );
  }

  return (
    <>
      <div className="relative min-h-screen">
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
        <section className="movie-section flex justify-center items-center min-h-screen bg-gray-200 bg-opacity-70 p-4 relative z-10">
          <div className="movie-card flex flex-col md:flex-row p-6 md:p-10 shadow-2xl shadow-red-500 rounded-2xl overflow-hidden font-serif bg-white">
            <img
              className="md:w-64 md:h-96 w-full h-auto object-cover rounded-lg"
              src={movie.Poster}
              alt={movie.Title}
            />
            <div className="card-content p-6 bg-gray-100 md:ml-10 flex flex-col justify-center">
              <p className="title text-lg font-bold mb-2 text-center md:text-left">
                {movie.Title}
              </p>
              <p className="card-text mb-2">{movie.Released}</p>
              <p className="card-text mb-2">{movie.Genre}</p>
              <p className="card-text mb-2">{movie.imdbRating} / 10</p>
              <p className="card-text mb-4">{movie.Country}</p>
              <NavLink
                to="/browse"
                className="back-btn hover:underline bg-blue-700 p-2 text-white rounded-md hover:bg-blue-600 text-center w-full md:w-auto"
              >
                Go Back
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleMovie;
