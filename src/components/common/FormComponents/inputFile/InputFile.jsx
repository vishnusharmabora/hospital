import React, { useState } from "react";
import { Field } from "formik";
import "./inputFile.css";

const InputFile = (props) => {
  const {
    label,
    name,
    id,
    classForLabelOuter,
    classForInputOuter,
    onChangeAction,
    accept,
    productId,
    multiple = false,
  } = props;

  return (
    <>
      <div className={`row ${classForLabelOuter}`}>
        <div className="col-12">
          <p className="img_des_1">{label}</p>
        </div>
      </div>

      <Field name={name} id={id} validate={false}>
        {(formik) => {
          const {
            field: { value, name },
            form: { setFieldValue, setTouched, touched, errors },
          } = formik;
          return (
            <>
              <div
                className={`d-flex align-items-center mb-4 ${classForInputOuter}`}
              >
                <div className="mb-2">
                  <label className="custom_file_upload">
                    Upload
                    <input
                      style={{ display: "none" }}
                      type="file"
                      multiple={multiple}
                      name="information_label"
                      accept={accept}
                      onChange={(e) => {
                        setFieldValue(name, e.target.files[0], false);
                        if (onChangeAction) {
                          onChangeAction(name, e.target.files);
                        }
                      }}
                      onBlur={() => {
                        setTouched({ ...touched, [name]: true });
                      }}
                    />
                  </label>
                  {touched[name] && errors[name] && <p>ffffdf</p>}
                </div>
                {value && <div className="mx-2">{value.name}</div>}
              </div>
            </>
          );
        }}
      </Field>
    </>
  );
};

export default InputFile;
