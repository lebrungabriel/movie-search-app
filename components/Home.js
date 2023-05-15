import Image from "next/image";
import { useState } from "react";
import DetailMovie from "./DetailMovie";
import List from "./List";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar.jsx";

function Home() {
  const [lastMovie, setLastMovie] = useState({});

  const selectedMovie = (
    title,
    overview,
    image,
    date,
    voteAverage,
    voteCount
  ) => {
    console.log("CLICKED", title, overview, image, date, voteAverage);
    setLastMovie({ title, overview, image, date, voteAverage, voteCount });
  };

  // console.log("LAST MOVIE", lastMovie);

  return (
    <>
      {/* <div className="w-screen h-screen relative flex justify-start items-center">
        <Image
          src="https://wallpapercave.com/wp/wp10759820.jpg"
          alt="hero-picture"
          objectFit="cover"
          layout="fill"
        />
        <div className="flex flex-col items-start justify-evenly h-[300px] absolute left-20">
          <div>
            <h1 className="uppercase font-extrabold text-transparent text-4xl tracking-widest bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              FleetMovie App
            </h1>
            <p className="text-white text-sm mt-2 tracking-widest">
              Browse through thousands of movies...
            </p>
          </div>
          <button className="bg-transparent text-white border border-white px-20 py-2 rounded-xl tracking-widest ">
            Discover
          </button>
        </div>
      </div> */}
      <div className="w-screen h-screen flex flex-row items-center">
        <div className="w-[45%] h-screen flex flex-col p-4 justify-evenly">
          <div className="w-full h-[80px] bg-white shadow-md flex justify-evenly items-center">
            <SearchBar />
          </div>
          <List selectedMovie={selectedMovie} />
        </div>

        <div className="w-[55%] h-screen">
          <DetailMovie
            title={lastMovie.title}
            overview={lastMovie.overview}
            image={lastMovie.image}
            date={lastMovie.date}
            voteAverage={lastMovie.voteAverage}
            voteCount={lastMovie.voteCount}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
