import React, { useEffect, useState } from "react";
import Image from "next/image";

const List = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e5edb3314b490ab559c107e652e204fe"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  const clickHandler = (movieInfo) => {
    console.log("MOVIE INFO .......... : ", movieInfo);
    props.selectedMovie(
      movieInfo.title,
      movieInfo.overview,
      movieInfo.backdrop_path,
      movieInfo.release_date,
      movieInfo.vote_average,
      movieInfo.vote_count
    );
  };

  return (
    <div className="w-full h-[500px] flex flex-col bg-white shadow-xl border border-gray-100 p-4">
      <div className="overflow-auto">
        {movies.map((movie, id) => (
          <div
            key={id}
            onClick={() => clickHandler(movie)}
            className="w-full flex flex-col cursor-pointer mb-2"
          >
            <div className="w-full flex flex-row items-center mt-4">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="movie-picture"
                width={50}
                height={40}
                objectFit="cover"
                className="rounded-lg"
              />
              <h1 className="text-left text-sm font-semibold ml-4">
                {movie.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
