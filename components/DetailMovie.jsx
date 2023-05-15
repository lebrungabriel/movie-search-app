import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";

const DetailMovie = () => {
  // Retrieve the selected movie from the Redux store
  const selectedMovie = useSelector((state) => state.movies.value[0]);

  // Return null or fallback UI when no movie is selected
  if (!selectedMovie) {
    return null;
  }

  // Destructure the movie data
  const {
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = selectedMovie;

  // Calculate the score based on vote_average
  const score = Math.round(vote_average / 2);

  // Set the text color based on the score
  const starColor = score >= 3 ? "text-yellow-400" : "";

  // Create an array of stars based on the score
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<AiFillStar key={i} className={i < score && starColor} />);
  }

  // Format the release date using en-GB locale
  const formattedReleaseDate = new Date(release_date).toLocaleDateString(
    "en-GB"
  );

  return (
    <>
      <div className="w-full h-[60%] flex flex-row justify-between p-10">
        <div className="w-[50%] h-full flex flex-col justify-center items-center px-5">
          {/* Movie title */}
          <h1 className="text-lg font-semibold text-center tracking-wider">
            {title}
          </h1>
          {/* Formatted release date */}
          <p className="text-sm my-4 text-zinc-800">{formattedReleaseDate}</p>
          <div className="flex flex-row items-center">
            {/* Star ratings */}
            {stars}
            {/* Vote count */}
            <p className="text-xs ml-2">({vote_count} votes)</p>
          </div>
        </div>
        <div className="w-[50%] h-full relative">
          {/* Movie poster */}
          <Image
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            layout="fill"
            alt="movie picture"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="w-full h-[40%] flex flex-col items-center justify-start py-4 px-10">
        <h3 className="font-semibold mb-8">Synopsis</h3>
        {/* Movie overview */}
        <p className="text-sm text-center">{overview}</p>
      </div>
    </>
  );
};

export default DetailMovie;
