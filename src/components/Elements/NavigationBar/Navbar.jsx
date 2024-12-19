import React, { useState } from "react";
import NavbarNav from "./NavbarNav";
import SubMenu from "./SubMenu";
import logo from "../../../assets/logo.png";
import logo2 from "../../../assets/logo2.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useProfile } from "../../../context/ProfileContext";

const Navbar = () => {
  const { profileImage } = useProfile(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-background">
      <div className="relative h-14 md:h-20 flex justify-start items-center px-5 md:px-10 lg:px-20 gap-2 -ml-5 md:ml-0">
        <a href="/home" className="mr-5 md:mr-8">
          <img
            src={logo}
            alt="logo"
            className="hidden md:block w-full h-auto"
          />
          <img
            src={logo2}
            alt="logo2"
            className="block md:hidden w-full mr-4 ml-1 pl-2"
          />
        </a>
        <NavbarNav />
        <div className="flex items-center relative right-10 md:right-0 md:ml-auto">
          <img
            src={profileImage}
            alt="User"
            className="w-7 h-7 md:w-12 md:h-12 rounded-full object-cover cursor-pointer z-[1001]"
            onClick={toggleMenu}
          />
          <div
            className="ml-4 text-white text-lg cursor-pointer z-[1001]"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute right-2 w-48 rounded-lg shadow-md mt-2 z-50">
            <SubMenu />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
