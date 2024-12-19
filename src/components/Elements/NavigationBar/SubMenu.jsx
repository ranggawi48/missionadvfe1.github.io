import { IoMdExit } from "react-icons/io";
import { FaStar, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SubMenu = () => {
  return (
    <div className="absolute top-6 md:top-7 right-0 md:right-10 w-44 md:w-56 bg-background rounded-lg shadow-lg border border-slate-800 p-5">
      <Link to="/profile" className="flex gap-2 items-center text-white no-underline my-1 md:my-3 hover:text-[#1d4ed8] font-normal"
      >
        <FaUser className="icon fill-current" />
        <p className="w-full transition-colors duration-300">Profile Saya</p>
      </Link>
      <a
        href="#"
        className="flex gap-2 items-center text-white no-underline my-1 md:my-3 hover:text-[#1d4ed8] font-normal"
      >
        <FaStar className="icon fill-current" />
        <p className="w-full transition-colors duration-300">Ubah Premium</p>
      </a>
      <a
        href="/ "
        className="flex gap-2 items-center text-white no-underline my-1 md:my-3 hover:text-[#1d4ed8] font-normal"
      >
        <IoMdExit className="icon fill-current" />
        <p className="w-full transition-colors duration-300">Keluar</p>
      </a>
    </div>
  );
};

export default SubMenu;
