import React, { useState } from "react";

const Select = ({
  label,
  name,
  value,
  id,
  options,
  width = "w-100",
  isDisabled = false,
  onSelectChange,
}) => {
  return (
    <>
      <div className={width}>
        <label
          className="text-black/60 mb-2 inline-block float-right"
          htmlFor=""
        >
          {label}
        </label>
        <select
          name={name}
          id={id}
          disabled={isDisabled}
          value={value}
          className="border-b border-gray-300 focus:outline-none focus:border-b focus:border-gray-500 w-full py-1.5"
          onChange={(e) => onSelectChange && onSelectChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
