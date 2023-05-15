import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";

const DetailMovie = () => {
  const selectedMovie = useSelector((state) => state.movies.value[0]);
  // const score = Math.round(voteAverage / 2);
  // const bgColor = score >= 3 && "text-yellow-400"; // set the color based on the score

  const stars = [];
  // for (let i = 0; i < 5; i++) {
  //   stars.push(<AiFillStar key={i} className={i < score && bgColor} />);
  // }

  if (!selectedMovie) {
    return null; // Return null or a fallback UI when no movie is selected
  }

  const {
    title,
    overview,
    poster_path,
    release_date,
    voteAverage,
    vote_count,
  } = selectedMovie;

  return (
    <>
      <div className="w-full h-[60%] flex flex-row justify-between p-10">
        <div className="w-[50%] h-full flex flex-col justify-center items-center px-5">
          <h1 className="text-lg font-semibold text-center">{title}</h1>
          <p className="text-sm my-4">Released on: {release_date}</p>
          <div className="flex flex-row items-center">
            {stars}
            <p className="text-xs ml-2">({vote_count})</p>
          </div>
        </div>
        <div className="w-[50%] h-full relative">
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
        <p className="text-sm text-center">{overview}</p>
      </div>
    </>
  );
};

export default DetailMovie;
