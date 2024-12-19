import React from "react";
import logo from "../../assets/logo.png";

const AuthLayouts = (props) => {
  const { children, title, description } = props;
  return (
    <div className="w-full max-w-xs sm:max-w-md lg:max-w-[380px] rounded-lg bg-[rgba(24,26,28,0.84)] p-6 sm:p-10 text-[rgba(243,244,246,1)] mx-auto text-left">
      <img
        src={logo}
        className="mx-auto items-center mb-6 sm:mb-8"
        width="130"
        alt="logo"
      />
      <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-1">
        {title}
      </h3>
      <h6 className="text-xs sm:text-sm text-center mb-6 sm:mb-8">
        {description}
      </h6>
      {children}
    </div>
  );
};

export default AuthLayouts;
