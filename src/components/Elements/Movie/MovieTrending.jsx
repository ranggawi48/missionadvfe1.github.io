import React, { useState } from "react";
import SliderArrowButton from "../Button/SliderArrowButton";
import { trendingMovies } from "./movieData";

const MovieTrending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trendingMovies.length - 8 : prevIndex - 1
    );
  };

  const nextMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === trendingMovies.length - 8 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {trendingMovies.slice(currentIndex, currentIndex + 8).map((movie) => (
          <div key={movie.id} className="flex-none">
            <div
              className="relative flex flex-col items-center shadow-lg rounded-md m-[10px] overflow-hidden 
              w-[105px] 
              xl:w-[200px] 
              lg:w-[180px] 
              md:w-[160px]
              transform transition duration-300 hover:scale-105"
            >
              <img
                src={movie.image}
                alt={`Trending movie ${movie.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute right-2">
                <img
                  src={movie.icon}
                  alt="Trending icon"
                  className="w-5 h-13 md:w-7 md:h-15"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <SliderArrowButton direction="left" onClick={prevMovie} />
      <SliderArrowButton direction="right" onClick={nextMovie} />
    </div>
  );
};

export default MovieTrending;
