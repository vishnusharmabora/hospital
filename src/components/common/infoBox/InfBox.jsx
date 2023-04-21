import React from "react";
import { Link } from "react-router-dom";
import "./infoBox.css";

const InfBox = ({ bg, number, title, btnText, btnUrl, icon }) => {
  return (
    <>
      <div className="info_sec">
        <div className={`small-box ${bg}`}>
          <div className="d-flex justify-content-between p-3">
            <div className="inner">
              <h3 className="text_white fs_36 mb-0">{number}</h3>
              <p className="text_white fs_15 mb-0">{title}</p>
            </div>
            <div className="icon">
              <i className={`fa fs_70 ${icon}`}></i>
            </div>
          </div>
          <Link to={btnUrl} className="small-box-footer">
            {btnText}
            <i className="fa fa-arrow-circle-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfBox;
