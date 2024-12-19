import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import SliderArrowButton from "../Button/SliderArrowButton";
import { movies } from "./movieData";

const MovieContinue = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 3 : prevIndex - 1
    );
  };

  const nextMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {movies.slice(currentIndex, currentIndex + 3).map((movie, index) => (
          <div key={index} className="flex-none mx-2">
            <div className="relative w-[330px] h-[160px] md:w-[560px] md:h-[280px] rounded-[10px] overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-left">
                    {movie.title}
                  </h3>
                  <div className="flex items-center">
                    <FaStar className="text-white w-4 h-4 mr-1" />
                    <h4>{movie.rating}</h4>
                  </div>
                </div>
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

export default MovieContinue;
