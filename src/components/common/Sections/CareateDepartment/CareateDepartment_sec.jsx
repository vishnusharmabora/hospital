import { Formik, Form } from "formik";
import React, { useParams } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import SubmitReset from "../../FormComponents/Button/submitOrReset/SubmitReset";
import CustomInput from "../../FormComponents/Input/input";
import PageHeader from "../../pageHeader/PageHeader";
import "./careateDepartment_sec.css";

const initialValues = {
  d_name: "",
  description: "",
  status: "",
};
const Status = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];
const CareateDepartment = () => {
  const onSubmit = async (values, onSubmitProps) => {
    const payload = {
      //   d_name: values.email,
    };
    console.log(values);
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="panel_sec panel-default thumbnail">
              <PageHeader url={""} title={"Doctor List"} icon={"fa fa-list"} />

              <div className="panel-body panel-form">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  {(formik) => {
                    return (
                      <Form>
                        <Row>
                          <Col md={9}>
                            <Row className="p-3">
                              <Col md={3}>
                                <label
                                  for="name"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Department Name
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="d_name"
                                  bgColor="bg_white"
                                  placeholder="Department Name"
                                  id="text"
                                  type="text"
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="name"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Description
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="description"
                                  bgColor="bg_white"
                                  placeholder="Description"
                                  id="description"
                                  type="textarea"
                                  rows={5}
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="name"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Department Name
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <Stack
                                  direction="horizontal"
                                  gap={3}
                                  className="radio_inline"
                                >
                                  {Status.map((redio) => (
                                    <CustomInput
                                      name="status"
                                      type="radio"
                                      value={redio.value}
                                      label={redio.label}
                                    />
                                  ))}
                                </Stack>
                              </Col>
                              <Col md={3}></Col>
                              <Col md={9}>
                                <SubmitReset
                                  resetTitle={"Reset"}
                                  submitTitle={"Save"}
                                  onReset={formik.resetForm}
                                  activeSave={true}
                                  activeReset={false}
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CareateDepartment;
