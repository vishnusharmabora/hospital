import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "../../../components/common/FormComponents/Input/input";
import "./Login.css";
import { Button, Col, Row } from "react-bootstrap";
import Select from "../../../components/common/FormComponents/Select/Select";

import { useAuthContext } from "../../../ContextAPI/AuthContextAPI";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const roalOptions = [
  { key: "Admin", value: "1" },
  { key: "Doctor", value: "2" },
  { key: "Accountant", value: "3" },
];
const Login = () => {
  const history = useNavigate();

  const { currUserData, doLogin } = useAuthContext();

  const onSubmit = async (values, onSubmitProps) => {
    console.log(values, "values");
    const payload = {
      username: values.email,
      password: values.password,
    };
    console.log(payload, "ppppp");
    const res = await api("auth/login", payload, "post", "", "Login");
    if (res.success) {
      doLogin(res);
      history("/");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange={false}
    >
      {(formik) => {
        return (
          <div className="login_form">
            <div class="view-header d-flex mb-4">
              <div class="header-icon">
                <i class="fa fa-solid fa-lock"></i>
              </div>
              <div class="header-title">
                <h3>Demo Hospital Limited</h3>
                <small>
                  <strong>Please Log In</strong>
                </small>
              </div>
            </div>
            <Form>
              <Row>
                <Col md={12}>
                  <CustomInput
                    name="email"
                    bgColor="bg_white"
                    label="Email address"
                    placeholder="Enter email address"
                    id="email"
                    type="text"
                  />
                </Col>
                <Col md={12}>
                  <CustomInput
                    name="password"
                    bgColor="bg_white"
                    label="Password"
                    placeholder="Password"
                    id="Password"
                    type="Password"
                  />
                </Col>
                <Col md={12}>
                  <Select
                    label="User Role"
                    name="state"
                    bgColor="bg_grey"
                    id="state"
                    options={roalOptions}
                  />
                </Col>
              </Row>

              <Button type="submit" className="btn btn-success">
                Log in
              </Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
