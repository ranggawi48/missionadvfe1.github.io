import React, { useState, useEffect, useRef } from "react";
import { FaPen } from "react-icons/fa";

const Input = ({ type, name, value, onChange, label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const inputRef = useRef(null); 

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    if (!value) setIsFocused(false);
    setIsEditable(false); 
  };

  const handleToggleEdit = () => {
    setIsEditable((prev) => !prev); 
  };

  useEffect(() => {
    if (isEditable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditable]);

  return (
    <div className="relative w-full">
      <label
        htmlFor={name}
        className={`absolute left-3 px-1 transition-all duration-200 ease-in-out ${
          isFocused || value
            ? "top-1 text-xs text-gray-400"
            : "top-1/2 transform -translate-y-1/2 text-white"
        }`}
      >
        {label || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value} 
        onChange={onChange} 
        disabled={!isEditable}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        className={`w-full h-12 bg-gray-800 text-white border border-gray-700 rounded px-4 pt-4 pb-1 focus:outline-none ${
          isEditable ? "cursor-text" : "cursor-not-allowed"
        }`}
      />
      <span
        className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${
          isEditable ? "text-white" : "text-gray-500"
        }`}
        onClick={handleToggleEdit}
      >
        <FaPen />
      </span>
    </div>
  );
};

export default Input;
