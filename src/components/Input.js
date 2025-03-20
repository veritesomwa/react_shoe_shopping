import React from "react";

const Input = ({ handleChange, value, title, name, color, iswhite }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} value={value} type="radio" name={name} />
      <span
        className={`checkmark ${iswhite}`}
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default Input;
