import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../pageHeader/PageHeader";
import TableBasic from "../../table/TableBasic";

import { DoctorsColumsDetails } from "../../../../utils/DoctorsList";
import TableHeader from "../../table/tableHeader/TableHeader";
import "./doctorsListSection.css";
import { useNavigate } from "react-router-dom";

const DoctorsListSection = () => {
  const history = useNavigate();
  const DoctorsColums = [
    { Header: "Sl.No", accessor: "SlNo" },
    { Header: "Picture", accessor: "Picture" },
    { Header: "First Name", accessor: "FirstName" },
    { Header: "Last Name", accessor: "LastName" },
    { Header: "Department", accessor: "Department" },
    { Header: "Email Address", accessor: "email" },
    { Header: "Phone No", accessor: "Phone" },
    {
      Header: "Action",
      accessor: (row) => {
        return (
          <div class="action-btn">
            <span className="bg-success">
              <i class="fa fa-eye"></i>
            </span>
            <span className="bg-primary" onClick={() => editItems(row.Id)}>
              <i class="fa fa-edit"></i>
            </span>
            <span className="bg-danger" onClick={() => deleteItem(row.Id)}>
              <i class="fa fa-trash"></i>
            </span>
          </div>
        );
      },
    },

    { Header: "Address", accessor: "Address" },
    { Header: "Sex", accessor: "Sex" },
  ];
  const [data, setData] = useState(DoctorsColumsDetails);

  const deleteItem = (dataDelete) => {
    const filterData = data.filter((items) => items.Id !== dataDelete);

    setData([...filterData]);
  };

  const editItems = (editItem) => {
    history(`/create-doctor/${editItem}`);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="panel_sec panel-default thumbnail">
              <PageHeader
                url={""}
                title={"Department List "}
                icon={"fa fa-list"}
              />
              <TableHeader />
              <TableBasic headers={DoctorsColums} tableData={data} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DoctorsListSection;
