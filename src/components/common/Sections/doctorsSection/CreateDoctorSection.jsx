import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SubmitReset from "../../FormComponents/Button/submitOrReset/SubmitReset";
import CustomInput from "../../FormComponents/Input/input";
import Select from "../../FormComponents/Select/Select";
import TextEditor from "../../FormComponents/textEditor/TextEditor";
import PageHeader from "../../pageHeader/PageHeader";
import { DoctorsColumsDetails } from "../../../../utils/DoctorsList";
import "./createDoctorSection.css";
import { useEffect } from "react";
import InputFile from "../../FormComponents/inputFile/InputFile";
import InputDate from "../../FormComponents/inputDate/InputDate";

const department = [
  { key: "Microbiology", value: "Microbiology" },
  { key: "Neonatal", value: "Neonatal" },
  { key: "Nephrology", value: "Nephrology" },
  { key: "Neurology", value: "Neurology" },
  { key: "Oncology", value: "Oncology" },
  { key: "Orthopaedics", value: "Orthopaedics" },
  { key: "Pharmacy", value: "Pharmacy" },
  { key: "Radiotherapy", value: "Radiotherapy" },
  { key: "Gynaecology", value: "Gynaecology" },
  { key: "Department1", value: "Department1" },
];

const bloodGroup = [
  { key: "A+", value: "A+" },
  { key: "A-", value: "A-" },
  { key: "B+", value: "B+" },
  { key: "B-", value: "B-" },
  { key: "O+", value: "O+" },
  { key: "O-", value: "O-" },
  { key: "AB+", value: "AB+" },
  { key: "AB-", value: "AB-" },
];
const sex = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const CreateDoctorSection = () => {
  const { did } = useParams();
  console.log(did, "did in create doctor sect");

  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    description: "",
    department: "",
    designation: "aa",
    address: "",
    phone: "",
    mobile: "",
    specialist: "",
    ShortBiography: "",
    sex: "",
    education: "",
    picture: "",
    dob: null,
  });

  useEffect(() => {
    const didData = DoctorsColumsDetails.find((item) => item.Id == did);
    console.log(didData.sex, "sexxxxx");
    if (didData) {
      setInitialValues({
        first_name: didData.FirstName,
        last_name: didData.LastName,
        email: didData.email,
        password: didData.password,
        description: didData.description,
        department: didData.department,
        designation: didData.designation,
        address: didData.address,
        phone: didData.Phone,
        mobile: didData.mobile,
        specialist: didData.specialist,
        ShortBiography: didData.ShortBiography,
        education: didData.education,
        dob: didData.dob,
        sex: didData.sex,
      });
    }
  }, []);

  const onSubmit = (data, onSubmitProps) => {
    console.log(data, "data");
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

              <div className="panel-body panel-form">
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  enableReinitialize={true}
                >
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
                                  First Name<i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="first_name"
                                  bgColor="bg_white"
                                  placeholder="First Name"
                                  id="text"
                                  type="text"
                                />
                              </Col>

                              <Col md={3}>
                                <label
                                  for="last_name"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Last Name<i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="last_name"
                                  bgColor="bg_white"
                                  placeholder="Last Name"
                                  id="text"
                                  type="text"
                                />
                              </Col>

                              <Col md={3}>
                                <label
                                  for="email"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Email Address
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="email"
                                  bgColor="bg_white"
                                  placeholder="Email Address"
                                  id="text"
                                  type="email"
                                />
                              </Col>

                              <Col md={3}>
                                <label
                                  for="password"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Password<i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="password"
                                  bgColor="bg_white"
                                  placeholder="Password"
                                  id="text"
                                  type="text"
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="designation"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Designation
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="designation"
                                  bgColor="bg_white"
                                  placeholder="Designation"
                                  id="description"
                                  type="text"
                                  rows={5}
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="department"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Department
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <Select
                                  label=""
                                  name="department"
                                  bgColor="bg_grey"
                                  id="state"
                                  options={department}
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="address"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Address <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="address"
                                  bgColor="bg_white"
                                  placeholder="Address"
                                  id="address"
                                  type="textarea"
                                  rows={5}
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="phone"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Phone No
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="phone"
                                  bgColor="bg_white"
                                  placeholder="Phone"
                                  id="text"
                                  type="number"
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="mobile"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Mobile No <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="mobile"
                                  bgColor="bg_white"
                                  placeholder="Mobile"
                                  id="text"
                                  type="number"
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="name"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Short Biography
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <TextEditor
                                  setFieldValue={(val) => {
                                    formik.setFieldValue("ShortBiography", val);
                                  }}
                                  value={formik.values.ShortBiography}
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="picture"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Picture
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                {/* <CustomInput
                                  name="picture"
                                  bgColor="bg_white mt-3"
                                  placeholder=" Date of Birth"
                                  id="picture"
                                  type="file"
                                /> */}
                                <InputFile
                                  name="picture"
                                  className="form-control"
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="name"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  specialist
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <CustomInput
                                  name="specialist"
                                  bgColor="bg_white"
                                  placeholder="specialist"
                                  id="specialist"
                                  type="text"
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="name"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Date of Birth
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                {/* <CustomInput
                                  name="dob"
                                  bgColor="bg_white"
                                  placeholder=" Date of Birth"
                                  id="dob"
                                  type="date" 
                                />*/}
                                <InputDate
                                  name="dob"
                                  placeholderText="hhhhh"
                                  selected="10/12/2022"
                                  className="bg_white fs_20 fw_regular rounded w-100 d-block custom_input mb-3  form-control "
                                />
                              </Col>

                              <Col md={3}>
                                <label
                                  for="name"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Sex
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <Stack
                                  direction="horizontal"
                                  gap={3}
                                  className="radio_inline"
                                >
                                  {sex.map((redio) => {
                                    console.log(
                                      redio.value,
                                      "vvvvvvvvv",
                                      initialValues.sex,
                                      formik.values.sex == redio?.value,
                                      typeof redio?.value
                                    );
                                    return (
                                      <CustomInput
                                        name="sex"
                                        type="radio"
                                        value={redio.value}
                                        label={redio.label}
                                        checked={
                                          formik.values.sex === redio.value
                                        }
                                      />
                                    );
                                  })}
                                </Stack>
                              </Col>
                              <Col md={3}>
                                <label
                                  for="name"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Blood Group
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <Select
                                  label=""
                                  name="BloodGroup"
                                  bgColor="bg_grey"
                                  id="bloodgroup"
                                  options={bloodGroup}
                                />
                              </Col>
                              <Col md={3}>
                                <label
                                  for="education"
                                  className="label fs_15 fw_bold text-dark mt-2"
                                >
                                  Education/Degree
                                  <i className="text-danger">*</i>
                                </label>
                              </Col>
                              <Col md={9}>
                                <TextEditor
                                  setFieldValue={(val) => {
                                    formik.setFieldValue("education", val);
                                  }}
                                  value={formik.values.education}
                                />
                              </Col>
                              <Col md={3}></Col>
                              <Col md={9} className="mt-4">
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

export default CreateDoctorSection;
