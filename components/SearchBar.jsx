import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addMovieToStore, removeMovieToStore } from "../reducers/movies";

const SearchBar = () => {
  // State to hold the search input value
  const [searchMovie, setSearchMovie] = useState("");

  const dispatch = useDispatch();

  const searchMoviehandler = () => {
    // Fetch movie data based on the search query
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchMovie}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Dispatch actions to remove existing movie and add the first result to the store
        dispatch(removeMovieToStore());
        dispatch(addMovieToStore(data.results[0]));
        // Reset the search input value
        setSearchMovie("");
      });
  };

  return (
    <div className="w-full flex flex-row justify-evenly">
      <div className="w-[60%] py-2 bg-white border border-gray-200 shadow flex flex-row justify-evenly items-center left-20 rounded-xl">
        <CiSearch />
        <input
          type="text"
          name="search"
          className="w-[80%] focus:outline-none"
          placeholder="Search a movie"
          onChange={(e) => setSearchMovie(e.target.value.toLowerCase())}
          value={searchMovie}
        />
      </div>
      <button
        onClick={() => searchMoviehandler()}
        className="py-2 px-10 bg-gradient-to-r from-[#3E3D3D] to-[#272727] text-white rounded-md hover:shadow-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
