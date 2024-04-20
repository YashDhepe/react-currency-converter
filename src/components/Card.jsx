import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        {children}
      </div>
    </>
  );
};

export default Card;
