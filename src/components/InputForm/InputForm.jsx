import React from "react";
import "./InputForm.scss";

function InputField({
  label,
  name,
  handleChange,
  type,
  inputId,
  required,
  minLength,
  maxLength,
  placeholder,
  options,
}) {
  switch (type) {
    case "password":
      return (
        <div className="inputfield">
          <label className="inputfield__label" htmlFor={inputId}>
            {label}
          </label>
          <input
            className="inputfield__input"
            onChange={handleChange}
            id={inputId}
            name={name}
            type="password"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </div>
      );
    case "dropdown":
      return (
        <div className="inputfield">
          <label className="inputfield__label" htmlFor={inputId}>
            {label}
          </label>
          <select
            className="inputfield__select"
            onChange={handleChange}
            id={inputId}
            name={name}
            required={required}
          >
            <option value="" disabled defaultValue hidden>
              Select option
            </option>
            {options &&
              options.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.text}
                </option>
              ))}
          </select>
        </div>
      );
    default:
      return (
        <div className="inputfield">
          <label className="inputfield__label" htmlFor={inputId}>
            {label}
          </label>
          <input
            className="inputfield__input"
            onChange={handleChange}
            id={inputId}
            name={name}
            type="text"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </div>
      );
  }
}

export default InputField;
