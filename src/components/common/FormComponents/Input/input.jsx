import { Field, ErrorMessage } from "formik";
import TextError from "./../TextError/TextError";
import "./Input.css";

const CustomInput = (props) => {
  const {
    label,
    name,
    bgColor = "bg_grey",
    style,
    id,
    type,
    min,
    max,
    step,
    rows,
    cols,
    placeholder,
    disabled = false,
    onChange,
    onKeyPress,
    onKeyDown,
    isRequired,
    checked,
    ...rest
  } = props;

  const textareaProps = {
    as: type,
    rows: rows,
    cols: cols,
  };

  const textareaFieldProps = type === "textarea" ? { ...textareaProps } : null;

  const numberProps = {
    min: min,
    max: max,
    step: step,
  };

  const numberFieldProps = type === "number" ? { ...numberProps } : null;
  const radioProps = {
    checked: checked,
  };
  const radioFieldProps = type === "radio" ? { ...radioProps } : null;
  return (
    <div className="form_group">
      {type !== "checkbox" && type !== "radio" && label ? (
        <label
          htmlFor={id}
          className="d-block text_primary fw_semibold fs_20 mb-2"
        >
          {label}
          {isRequired ? <span className="text-danger">*</span> : null}
        </label>
      ) : null}

      <Field
        onKeyUp={(e) => {
          // eslint-disable-next-line
          typeof onChange === "function" ? onChange(e) : null;
        }}
        onKeyPress={(e) => {
          // eslint-disable-next-line
          typeof onKeyPress === "function" ? onKeyPress(e) : null;
        }}
        onKeyDown={(e) => {
          // eslint-disable-next-line
          typeof onKeyDown === "function" ? onKeyDown(e) : null;
        }}
        name={name}
        id={id}
        {...textareaFieldProps}
        {...numberFieldProps}
        type={type}
        className={`${bgColor} fs_20 fw_regular rounded ${
          type !== "checkbox"
            ? type !== "radio"
              ? "w-100 d-block custom_input "
              : " "
            : "custom_checkbox "
        } ${type == "file" ? "choose_file" : ""} ${
          type !== "radio" ? "form-control" : ""
        } `}
        style={style}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        {...radioFieldProps}
        {...rest}
      />
      {type == "radio" && label ? (
        <label htmlFor={id} className="ms-2">
          {label}
        </label>
      ) : null}
      {type === "checkbox" && label ? (
        <label htmlFor={id}>{label}</label>
      ) : null}
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default CustomInput;
