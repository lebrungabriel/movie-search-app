import React from "react";
import Image from "next/image";

const Card = ({ title, release, url }) => {
  return (
    <div className="w-full flex flex-col cursor-pointer mb-4">
      <div className="w-full flex flex-row items-center">
        <Image
          src={`https://image.tmdb.org/t/p/original/${url}`}
          alt="movie-picture"
          width={50}
          height={60}
          objectFit="cover"
          className="rounded-lg"
        />
        <h1 className="text-left text-sm font-semibold ml-4">{title}</h1>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mt-4" />
    </div>
  );
};

export default Card;
