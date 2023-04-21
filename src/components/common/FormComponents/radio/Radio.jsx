import React from "react";

const Radio = ({ title, name }) => {
  return (
    <>
      <label class="radio-inline">
        <input type="radio" name={name} value="1" className="fs_15" />
        <span className="ps-2">{title}</span>
      </label>
    </>
  );
};

export default Radio;
