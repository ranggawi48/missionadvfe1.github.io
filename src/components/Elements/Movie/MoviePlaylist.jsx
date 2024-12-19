import React, { useState } from "react";
import SliderArrowButton from "../Button/SliderArrowButton";
import { trendingMovies, newReleases } from "./movieData";

const MoviePlaylist = () => {
  const combinedMovies = [...trendingMovies, ...newReleases].sort(
    () => Math.random() - 0.5
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? combinedMovies.length - 8 : prevIndex - 1
    );
  };

  const nextMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === combinedMovies.length - 8 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {combinedMovies.slice(currentIndex, currentIndex + 8).map((movie) => (
          <div key={movie.id} className="flex-none ">
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
                alt={`Movie ${movie.id}`}
                className="w-full h-full object-cover"
              />
              {movie.icon && (
                <div className="absolute right-2">
                  <img
                    src={movie.icon}
                    alt="Trending icon"
                    className="w-5 h-13 md:w-7 md:h-15"
                  />
                </div>
              )}
              {movie.iconRelease && (
                <div className="absolute left-1 md:left-3">
                  <img
                    src={movie.iconRelease}
                    alt="Release icon"
                    className="w-16 mt-1 md:w-full md:h-full md:mt-2"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <SliderArrowButton direction="left" onClick={prevMovie} />
      <SliderArrowButton direction="right" onClick={nextMovie} />
    </div>
  );
};

export default MoviePlaylist;
