import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [searchSelectedMovie, setSearchSelectedMovie] = useState([]);

  const searchMoviehandler = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e5edb3314b490ab559c107e652e204fe&query=${searchMovie}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("DATE FROM SEARCH BAR ... : ", data.results[0]);
        setSearchSelectedMovie(data.results[0]);
      });
  };

  // console.log("SEARCH MOVIE", searchMovie);

  return (
    <>
      <div className="w-[60%] py-2 bg-white border border-gray-200 shadow flex flex-row justify-evenly items-center left-20 rounded-xl">
        <CiSearch />
        <input
          type="text"
          name="search"
          className="w-[80%] focus:outline-none"
          placeholder="Search"
          onChange={(e) => setSearchMovie(e.target.value)}
          value={searchMovie}
        />
      </div>
      <button
        onClick={() => searchMoviehandler()}
        className="py-2 px-10 bg-gradient-to-r from-[#E8DBFC] to-[#F8F9D2] text-slate-800 border border-slate-800 rounded-full shadow"
      >
        Search
      </button>
    </>
  );
};

export default SearchBar;
