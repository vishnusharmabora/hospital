import React from "react";
import "./SubmitReset.css";

const SubmitReset = ({
  resetTitle,
  submitTitle,
  onReset,
  activeReset,
  activeSave,
}) => {
  return (
    <div className="btn_two">
      <button
        type="button"
        className={`${activeReset ? "active" : ""}`}
        onClick={onReset}
      >
        {resetTitle}
      </button>
      <span class="or">or</span>
      <button className={`${activeSave ? "active" : ""}`} type="submit">
        {submitTitle}
      </button>
    </div>
  );
};

export default SubmitReset;
