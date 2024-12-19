import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

const FooterHelp = () => {
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
      <div className="flex justify-between items-center mb-2 w-full">
        <h3 className="text-lg font-semibold text-white">Bantuan</h3>
        <div
          onClick={toggleMenu}
          className=" text-white text-xl cursor-pointer transition-transform ml-[13.9rem] md:hidden"
        >
          <FaChevronRight
            className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
          />
        </div>
      </div>
      {isMobile ? (
        isOpen && (
          <div className="mb-2 md:mt-5 text-white text-sm md:text-lg">
            <ul>
              {["FAQ", "Kontak Kami", "Privasi", "Syarat dan Ketentuan"].map(
                (item, index) => (
                  <li key={index} className="hover:text-[#1d4ed8] font-normal">
                    <a href="#">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        )
      ) : (
        <div className="mt-5 text-white">
          <ul>
            {["FAQ", "Kontak Kami", "Privasi", "Syarat dan Ketentuan"].map(
              (item, index) => (
                <li key={index} className="hover:text-[#1d4ed8] font-normal">
                  <a href="#">{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FooterHelp;
