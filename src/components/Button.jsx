import React from "react";

const Button = ({ label, customClass, onClickFunction }) => {
  return (
    <>
      <button type="submit" className={customClass} onClick={onClickFunction}>
        {label}
      </button>
    </>
  );
};

export default Button;
