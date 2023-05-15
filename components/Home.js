import { useState, useEffect } from "react";
import DetailMovie from "./DetailMovie";
import Filter from "./Filter";
import ListItem from "./ListItem";
import SearchBar from "./SearchBar.jsx";

import { useDispatch } from "react-redux";
import { addMovieToStore, removeMovieToStore } from "../reducers/movies";

function Home() {
  const [moviesList, setMoviesList] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState("popular");

  const dispatch = useDispatch();

  const listMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${selectedFilter}?api_key=${process.env.API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setMoviesList(data.results));
  };

  const getDetails = (movie) => {
    dispatch(removeMovieToStore());
    dispatch(addMovieToStore(movie));
  };

  useEffect(() => {
    listMovies();
  }, [selectedFilter]);

  return (
    <>
      <div className="w-screen h-screen flex flex-row items-center">
        <div className="w-[45%] h-screen flex flex-col p-4 justify-evenly">
          <div className="w-full h-[150px] bg-white shadow-md flex flex-col justify-evenly items-center">
            <SearchBar />
            <div className="w-full flex flex-row justify-evenly">
              <Filter
                category="Popular"
                filterHandler={() => {
                  setSelectedFilter("popular");
                  listMovies();
                }}
                textColor={
                  selectedFilter === "popular" ? "text-black" : "text-zinc-400"
                }
              />
              <Filter
                category="Top rated"
                filterHandler={() => {
                  setSelectedFilter("top_rated");
                  listMovies();
                }}
                textColor={
                  selectedFilter === "top_rated"
                    ? "text-black"
                    : "text-zinc-400"
                }
              />
            </div>
          </div>
          <div className="w-full h-[500px] flex flex-col bg-white shadow-xl border border-gray-100 p-4">
            <div className="overflow-auto">
              {moviesList.map((movie, id) => {
                return (
                  <ListItem
                    title={movie.title}
                    poster={movie.poster_path}
                    key={id}
                    onClick={() => getDetails(movie)}
                  />
                );
              })}
            </div>
          </div>
          {/* <List selectedMovie={selectedMovie} /> */}
        </div>

        <div className="w-[55%] h-screen">
          <DetailMovie />
        </div>
      </div>
    </>
  );
}

export default Home;
