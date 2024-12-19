import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

const FooterGenre = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center mb-2">
        <h3 className="text-lg font-semibold text-white flex-grow">Genre</h3>
        <div
          onClick={toggleMenu}
          className="text-white text-xl cursor-pointer transition-transform ml-[15.1rem] md:hidden"
        >
          <FaChevronRight
            className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
          />
        </div>
      </div>

      {isMobile ? (
        isOpen && (
          <div className="mb-2 md:mt-5 text-white text-sm md:text-lg">
            <div className="flex md:flex-nowrap flex-col md:gap-5 gap-3">
              {[
                ["Aksi", "Anak-anak", "Anime", "Britania"],
                ["Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama"],
                ["Komedi", "Petualangan", "Perang", "Romantis"],
                ["Sains & Alam", "Thriller"],
              ].map((group, index) => (
                <ul key={index}>
                  {group.map((genre, genreIndex) => (
                    <li
                      key={genreIndex}
                      className="hover:text-[#1d4ed8] font-normal"
                    >
                      <a href="#">{genre}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="flex flex-wrap gap-6 md:gap-15 lg:gap-20 md:flex-nowrap md:mr-10 mt-5 text-white">
          {[
            ["Aksi", "Anak-anak", "Anime", "Britania"],
            ["Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama"],
            ["Komedi", "Petualangan", "Perang", "Romantis"],
            ["Sains & Alam", "Thriller"],
          ].map((group, index) => (
            <ul key={index}>
              {group.map((genre, genreIndex) => (
                <li
                  key={genreIndex}
                  className="hover:text-[#1d4ed8] font-normal"
                >
                  <a href="#">{genre}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterGenre;
