import React from "react";

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
    case "email":
      return (
        <>
          <label htmlFor={inputId}>{label}</label>
          <input
            onChange={handleChange}
            id={inputId}
            name={name}
            type="email"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </>
      );
    case "password":
      return (
        <>
          <label htmlFor={inputId}>{label}</label>
          <input
            onChange={handleChange}
            id={inputId}
            name={name}
            type="password"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </>
      );
    case "dropdown":
      return (
        <>
          <label htmlFor={inputId}>{label}</label>
          <select
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
        </>
      );
    default:
      return (
        <>
          <label htmlFor={inputId}>{label}</label>
          <input
            onChange={handleChange}
            id={inputId}
            name={name}
            type="text"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </>
      );
  }
}

export default InputField;
