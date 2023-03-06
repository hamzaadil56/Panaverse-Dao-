import React from "react";

const Button = ({ children }: { children: any }) => {
  return (
    <div>
      <button className="p-2  text-center text-md text-gray-800 font-semibold rounded-md  bg-cyan-green  hover:text-green-700 hover:bg-white mx-auto hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all focus:ring-offset-1">
        {children}
      </button>
    </div>
  );
};

export default Button;
