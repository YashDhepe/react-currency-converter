import React from "react";

const Input = ({
  label,
  type = "text",
  value,
  width = "w-100",
  isDisabled = false,
  onInputChange,
}) => {
  return (
    <>
      <div className={width}>
        <label className="text-black/60 mb-2 inline-block" htmlFor="">
          {label}
        </label>
        <input
          type={type}
          className="border-b border-gray-300 focus:outline-none focus:border-b focus:border-gray-500 py-1.5"
          value={value}
          disabled={isDisabled}
          //   onChange={(e) => onInputChange && onCurrencyChange(e.target.value)}
          onChange={(e) =>
            onInputChange && onInputChange(Number(e.target.value))
          }
        />
      </div>
    </>
  );
};

export default Input;
