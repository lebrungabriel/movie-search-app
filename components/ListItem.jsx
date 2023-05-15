import React from "react";
import Image from "next/image";

const ListItem = ({ onClick, poster, title }) => {
  return (
    <div
      //   key={id}
      onClick={onClick}
      className="w-full flex flex-col cursor-pointer mb-2"
    >
      <div className="w-full flex flex-row items-center mt-4">
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt="movie-picture"
          width={50}
          height={40}
          objectFit="cover"
          className="rounded-lg"
        />
        <h1 className="text-left text-sm font-semibold ml-4">{title}</h1>
      </div>
    </div>
  );
};

export default ListItem;
