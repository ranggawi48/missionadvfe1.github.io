const NavbarNav = () => {
  return (
    <nav className="mr-24 md:mr-28 lg:mr-40">
      <ul className="flex justify-center items-center list-none gap-3 md:gap-8 text-xs md:text-sm lg:text-lg text-white">
        <li className="mr-5 md:mr-7">
          <a href="#series" className="inline-block whitespace-nowrap hover:text-[#1d4ed8] font-normal">
            Series
          </a>
        </li>
        <li className="mr-5 md:mr-7">
          <a href="#film" className="inline-block whitespace-nowrap hover:text-[#1d4ed8] font-normal">
            Film
          </a>
        </li>
        <li className="mr-5 md:mr-7">
          <a
            href="#list"
            className="inline-block whitespace-nowrap hover:text-[#1d4ed8] font-normal"
          >
            Daftar Saya
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarNav;
