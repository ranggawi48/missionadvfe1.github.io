import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputPassword = (props) => {
  const { placeholder, name, value, onChange } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full mt-1 mb-6">
      <input
        type={showPassword ? "text" : "password"}
        className="block w-full text-sm px-0 py-1.5 rounded-full border bg-black bg-opacity-5 border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-white pl-4 placeholder:text-sm p-1"
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      <span
        onClick={togglePasswordVisibility}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default InputPassword;
