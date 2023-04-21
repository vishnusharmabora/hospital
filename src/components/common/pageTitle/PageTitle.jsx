import React from "react";
import "./pageTitle.css";

const PageTitle = () => {
  return (
    <>
      <section className="content-header">
        <div className="d-flex p-3 border_b">
          <div className="header-icon">
            <i className="pe-7s-world"></i>
          </div>
          <div className="header-title ps-3">
            <h1 className="fw_bold mb-0 fs_25 text_primary">Dashboard</h1>
            <small>Home</small>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
