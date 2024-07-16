import React from "react";
import { useGlobalContext } from "../utils/context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <section className="flex flex-col items-center justify-center text-center p-4 shadow-slate-800 shadow-md bg-gradient-to-b from-gray-800 to-black min-h-[50vh] w-full">
      <h2 className="text-2xl mb-4 font-bold font-serif text-white">
        Search Your Favourite Movie
      </h2>
      <form
        action="#"
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-sm"
      >
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            type="text"
            placeholder="Search here"
            autoFocus={true}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="font-serif appearance-none bg-transparent border-none w-full text-slate-100 mr-3 py-1 px-2 leading-tight focus:outline-none bg-slate-500"
          />
        </div>
      </form>
      <div className="card-error mt-4">
        <p className="text-blue-800">{isError.show && isError.msg}</p>
      </div>
    </section>
  );
};

export default Search;
