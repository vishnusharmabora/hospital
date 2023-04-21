import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ url, title, icon }) => {
  return (
    <div className="page_header_section">
      <div className="panel_sec panel-default thumbnail">
        <div className="panel-heading no-print">
          <div className="btn-group">
            <Link className="btn btn-primary" href={url}>
              <i className={`${icon}`}></i> {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
