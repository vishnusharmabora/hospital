import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./tableHeader.css";

const TableHeader = () => {
  const changeParPaage = (e) => {
    console.log(e.target.value, "par page");
  };
  return (
    <>
      <div className="table_head_section mb-3">
        <Row>
          <Col md={4}>
            <div className="dataTables_length" id="DataTables_Table_0_length">
              <label>
                Show
                <select onChange={changeParPaage} value="">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                </select>
                entries
              </label>
            </div>
          </Col>
          <Col md={4}>
            <div className="dt-buttons btn-group">
              <Link
                className="btn btn-default buttons-copy buttons-html5 btn-sm"
                tabindex="0"
                aria-controls="DataTables_Table_0"
              >
                <span>Copy</span>
              </Link>
              <Link
                className="btn btn-default buttons-csv buttons-html5 btn-sm"
                tabindex="0"
                aria-controls="DataTables_Table_0"
              >
                <span>CSV</span>
              </Link>
              <Link
                className="btn btn-default buttons-excel buttons-html5 btn-sm"
                tabindex="0"
                aria-controls="DataTables_Table_0"
              >
                <span>Excel</span>
              </Link>
              <Link
                className="btn btn-default buttons-pdf buttons-html5 btn-sm"
                tabindex="0"
                aria-controls="DataTables_Table_0"
              >
                <span>PDF</span>
              </Link>
              <Link
                className="btn btn-default buttons-print btn-sm"
                tabindex="0"
                aria-controls="DataTables_Table_0"
              >
                <span>Print</span>
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <label className="d-flex align-items-center justify-content-end">
              <span>Search:</span>
              <input
                type="search"
                className="form-control input-sm ms-3"
                placeholder=""
              />
            </label>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TableHeader;
