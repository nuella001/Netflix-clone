// import { data } from 'autoprefixer'
import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../request";

const Main = () => {
  const [movies, setmovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setmovies(response.data.results);

      //  console.log(response.data.results)
    });
  }, []);
  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full absolute h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
       <div className="absolute top-[20%] w-full p-4 md:p-8">
        <h1 className="mb-4 font-bold">{movie?.title}</h1>
        <p className="mb-4">{movie?.overview}</p>
        <p className="mb-4">{movie?.release_date}</p>
            <div>
                <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                    Play
                </button>
                <button className="border ml-4 text-white border-gray-300 py-2 px-5">
                    Watch Later
                </button>
            </div>
       </div>
      </div>
    </div>
  );
};

export default Main;
