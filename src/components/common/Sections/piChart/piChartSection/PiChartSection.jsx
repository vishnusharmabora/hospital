import React from "react";
import InputDate from "../../../FormComponents/inputDate/InputDate";
import { PiChart } from "../PiChart";
import "./piChartSection.css";

const PiChartSection = () => {
  return (
    <div className="panel pi_chart_section">
      <div className="panel-heading top_corner">
        <div className="panel-title d-flex justify-content-between align-items-center">
          <h4 className="me-3">Percentage</h4>
        </div>
      </div>
      <div className="panel-body">
        <PiChart />
      </div>
    </div>
  );
};

export default PiChartSection;
