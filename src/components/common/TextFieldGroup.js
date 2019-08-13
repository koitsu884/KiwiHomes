import React from "react";
import classnames from "classnames";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      {label && <label labelFor={name}>{label}</label>}
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted"></small>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default TextFieldGroup;
