import React from "react";
import { Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const InputDate = (props) => {
  const {
    label,
    name,
    className,
    labelClassname,
    placeholder,
    style,
    inputDateFormat,
    onChangeAction,
    onDaySelect,
    onBlur,
    ...rest
  } = props;

  return (
    <div>
      <Field name={name} id={name}>
        {(formik) => {
          const {
            field,
            form: { setFieldValue },
          } = formik;
          return (
            <div>
              <label className={labelClassname}>
                {label}
                {rest.isRequired ? (
                  <span className="text-danger">*</span>
                ) : null}
              </label>
              <DatePicker
                {...field}
                {...rest}
                name={name}
                selected={field.value ? new Date(field.value) : null}
                id={name}
                className={className}
                placeholderText={placeholder}
                style={style}
                dateFormat={inputDateFormat ? inputDateFormat : "dd/MM/yyyy"}
                onChange={(val) => {
                  setFieldValue(name, val);
                  if (onChangeAction) {
                    onChangeAction(val);
                  }
                }}
                onSelect={(val) => {
                  if (onDaySelect) {
                    onDaySelect(val);
                  }
                }} //when day is clicked
                onBlur={onBlur}
              />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
};

export default InputDate;
