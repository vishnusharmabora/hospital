import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfBox from "../infoBox/InfBox";

const InfoSections = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={6} lg={3} sm={6} xs={12}>
            <InfBox
              bg={"bg-aqua"}
              number={267}
              title={"Patient"}
              btnText={"More Info"}
              btnUrl={"#"}
              icon={"fa-wheelchair"}
            />
          </Col>
          <Col md={6} lg={3} sm={6} xs={12}>
            <InfBox
              bg={"bg-green"}
              number={267}
              title={"Appointment"}
              btnText={"More Info"}
              btnUrl={"#"}
              icon={"fa-list-alt"}
            />
          </Col>
          <Col md={6} lg={3} sm={6} xs={12}>
            <InfBox
              bg={"bg-blue"}
              number={267}
              title={"Doctor"}
              btnText={"More Info"}
              btnUrl={"#"}
              icon={"fa-user-md"}
            />
          </Col>
          <Col md={6} lg={3} sm={6} xs={12}>
            <InfBox
              bg={"bg-yellow"}
              number={267}
              title={"Representative"}
              btnText={"More Info"}
              btnUrl={"#"}
              icon={"fa-user"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoSections;
