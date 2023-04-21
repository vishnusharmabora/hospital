import { Children } from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "../TextError/TextError";
import "./Select.css";

const Select = (props) => {
  const {
    label,
    name,
    bgColor = "bg_grey",
    style,
    id,
    placeholder,
    disabled = false,
    isRequired,
    options = [],
    ...rest
  } = props;

  return (
    <div className="form_group">
      <label
        htmlFor={id}
        className="d-block text_primary fw_semibold fs_20 mb-2"
      >
        {label}
        {isRequired ? <span className="text-danger">*</span> : null}
      </label>
      <Field
        name={name}
        id={id}
        as="select"
        className={`${bgColor} fs_20 fw_regular rounded w-100 d-block custom_select border-0`}
        style={style}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        {...rest}
      >
        {Children.toArray(
          options.map((option) => (
            <option value={option.value}>{option.key}</option>
          ))
        )}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Select;
