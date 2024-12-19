import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === "left" ? "left-0" : "right-0"
    } top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-1 md:p-2 border-2 border-gray-600 transition duration-300 hover:bg-gray-700 hover:scale-110`}
  >
    {direction === "left" ? <FaArrowLeft /> : <FaArrowRight />}
  </button>
);

export default SliderArrowButton;
