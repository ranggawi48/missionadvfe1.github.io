import React, { useState } from "react";
import SliderArrowButton from "../Button/SliderArrowButton";
import { newReleases } from "./movieData";

const MovieNewReleases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newReleases.length - 8 : prevIndex - 1
    );
  };

  const nextMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newReleases.length - 8 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {newReleases.slice(currentIndex, currentIndex + 8).map((movie) => (
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
                alt={`New release ${movie.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute left-1 md:left-3">
                <img
                  src={movie.iconRelease}
                  alt="Release icon"
                  className="w-16 mt-1 md:w-full md:h-full md:mt-2"
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

export default MovieNewReleases;
