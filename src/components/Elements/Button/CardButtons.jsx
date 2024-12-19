const CardButtons = () => {
  return (
    <div className="flex justify-between items-center w-full mb-[-40px] md:mb-0">
      <div className="flex items-center gap-2 md:gap-4">
        <button className="bg-blue-600 text-white rounded-full px-5 py-1 md:px-8 md:py-2 text-sm md:text-lg transition-colors duration-300 ease-in-out hover:bg-blue-900">
          Mulai
        </button>
        <button className="flex items-center bg-gray-800 text-white rounded-full px-5 py-1 md:px-8 md:py-2 text-sm md:text-lg transition-colors duration-300 ease-in-out hover:bg-gray-600">
          <img
            src="/icon/info.png"
            alt="Info Icon"
            className="w-5 h-5 mr-2 md:w-6 md:h-6 md:mr-2"
          />
          Selengkapnya
        </button>
        <span className="inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full border border-white/50 text-xs md:text-lg text-white">
          18+
        </span>
      </div>
      <div className="md:pr-8">
        <img
          src="/icon/vol.png"
          alt="Volume Icon"
          className="w-7 h-7 md:w-10 md:h-10 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CardButtons;
