import React from "react";

function InputField({
  type,
  labelText,
  placeholderText,
  required,
  minLength,
  maxLength,
  handleChange,
}) {
  return (
    <div className="field">
      <label className="label">{labelText}</label>
      <div className="control">
        <input
          className="input"
          type={type}
          placeholder={placeholderText}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default InputField;
