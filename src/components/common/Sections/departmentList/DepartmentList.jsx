import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../pageHeader/PageHeader";
import TableBasic from "../../table/TableBasic";
import { Colums } from "../../../../components/common/table/colums/Colums";

import MOCK_DATA from "../../../../utils/MOCK_DATA.json";
import TableHeader from "../../table/tableHeader/TableHeader";

const DepartmentList = () => {
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
              <TableBasic headers={Colums} tableData={MOCK_DATA} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DepartmentList;
