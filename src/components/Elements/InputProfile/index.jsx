import React, { useState, useEffect } from "react";
import Input from "./Input";
import InputEmail from "./InputEmail";

const InputForm = ({ label, name, type, value, onChange }) => {
  return (
    <div className="mb-4">
      {type === "email" ? (
        <InputEmail
          name={name}
          label={label}
          value={value} 
          onChange={onChange} 
        />
      ) : (
        <Input
          name={name}
          type={type}
          label={label}
          value={value} 
          onChange={onChange} 
        />
      )}
    </div>
  );
};

export default InputForm;
