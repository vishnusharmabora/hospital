import React from "react";
import InfoSections from "../../../components/common/infoSection/InfoSections";
import PageTitle from "../../../components/common/pageTitle/PageTitle";
import { Col, Container, Row } from "react-bootstrap";
import { InformationChart } from "../../../components/common/Sections/informationChart/InformationChart";
import PiChartSection from "../../../components/common/Sections/piChart/piChartSection/PiChartSection";
import { TotalProcess } from "../../../components/common/Sections/totalProcess/TotalProcess";
import Noticeboard from "../../../components/common/Sections/noticeboard/Noticeboard";

const Home = () => {
  return (
    <>
      <PageTitle />
      <InfoSections />
      <Container fluid>
        <Row>
          <Col md={12} lg={8}>
            <InformationChart />
          </Col>
          <Col md={12} lg={4}>
            <PiChartSection />
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={8}>
            <TotalProcess />
          </Col>
          <Col md={12} lg={4}>
            <Noticeboard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
